const cachedPosts = [];
function getRandomElements(array, n) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result.slice(0, Math.min(n, result.length));
}
async function fetchBlogContent(blogFile) {
    if (!blogFile || typeof blogFile !== 'string') {
        throw new Error('Invalid blog file name');
    }
    try {
        const response = await fetch(`./${blogFile}/content.md`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        const lines = markdown.split('\n').map(line => line.trim());
        
        let title = 'Không có tiêu đề';
        let date = 'Không có ngày đăng';
        let excerpt = 'Không có nội dung...';
        let image = '../assets/images/nền_labtop.jpg';
        let currentSection = '';
        let inHeader = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line === 'title') {
                inHeader = true;
                title = lines[++i] || title;
                continue;
            }
            if (line === 'time') {
                inHeader = true;
                date = lines[++i] || date;
                continue;
            }
            if (line === 'thumbnail') {
                inHeader = true;
                image = lines[++i] || image;
                continue;
            }
            if (line === 'author' || line === 'tag') {
                inHeader = true;
                i++;
                continue;
            }
            if (inHeader && line.match(/^(h2|h3|para|imginline|layout1|layout2|quote|callout|figcaption)$/)) {
                inHeader = false;
                currentSection = line;
            }
            if (!inHeader) {
                if (currentSection === 'para' && line && !line.match(/^(h2|h3|para|imginline|layout1|layout2|quote|callout|figcaption)$/)) {
                    if (!excerpt || excerpt === 'Không có nội dung...') {
                        excerpt = line;
                    }
                }
                if (line.match(/^(h2|h3|para|imginline|layout1|layout2|quote|callout|figcaption)$/)) {
                    currentSection = line;
                }
            }
        }

        return { title, date, excerpt, image };
    } catch (error) {
        console.error(`Error fetching ${blogFile}:`, error);
        return { 
            title: 'Không thể tải tiêu đề...', 
            date: 'Không thể tải ngày đăng...',
            excerpt: 'Không thể tải nội dung...',
            image: '../assets/images/nền_labtop.jpg'
        };
    }
}

function createBlogPostHTML(blogFile, content) {
    return `
        <article class="card" data-blog="${blogFile}" role="article" aria-labelledby="blog-title-${blogFile}">
            <img src="${content.image}" alt="${content.title}" loading="lazy" data-src="${content.image}">
            
            <div class="content">
                <p class="date">${content.date}</p>
                <h2 class="blog-title" id="blog-title-${blogFile}">${content.title}</h2>
                <hr>
                <a class="read" href="./${blogFile}/" aria-label="Read more about ${content.title}">
                    <i class="fas fa-arrow-right"></i> Read More
                </a>
            </div>
        </article>
    `;
}

async function getBlogFiles() {
    const maxRetries = 3;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch('blog-list.json');
            if (!response.ok) throw new Error('Failed to fetch blog list');
            const data = await response.json();
            return data.blogs;
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);
            if (attempt === maxRetries) {
                alert('Không thể tải danh sách bài viết. Vui lòng thử lại sau.');
                return ['blog5', 'blog4', 'blog3', 'blog2', 'blog1'];
            }
        }
    }
}

async function createSkeletonCards() {
    const blogFiles = await getBlogFiles();
    const leftColumn = document.querySelector('.left-column');
    leftColumn.innerHTML = '';
    for (let i = 0; i < Math.min(blogFiles.length, 10); i++) {
        const skeletonHTML = `
            <div class="card skeleton-card">
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
            </div>
        `;
        leftColumn.insertAdjacentHTML('beforeend', skeletonHTML);
    }
}

async function loadBlogPosts() {
    await createSkeletonCards();
    const blogFiles = await getBlogFiles();
    const leftColumn = document.querySelector('.left-column');
    leftColumn.innerHTML = '';

    const blogPostsPromises = blogFiles.map(async blogFile => {
        const content = await fetchBlogContent(blogFile);
        return { html: createBlogPostHTML(blogFile, content), content, blogFile };
    });

    const blogPostsData = await Promise.all(blogPostsPromises);
    leftColumn.innerHTML = blogPostsData.map(data => data.html).join('');

    cachedPosts.length = 0;
    cachedPosts.push(...Array.from(document.querySelectorAll('.left-column .card')).map(card => ({
        titleElement: card.querySelector('.blog-title'),
        dateElement: card.querySelector('.date'),
        excerpt: card.querySelector('.excerpt'),
        link: card.querySelector('a.read').href,
        blogFile: card.dataset.blog,
        image: card.querySelector('img').dataset.src
    })));

    if (cachedPosts.length > 0) {
        const randomPosts = getRandomElements(cachedPosts, Math.min(3, cachedPosts.length));
        const randomPostsList = document.querySelector('#randomPostsList');
        randomPostsList.innerHTML = randomPosts.map((post, index) => 
            `<li style="animation-delay: ${index * 0.1}s">
                <a href="${post.link}">${post.titleElement.textContent}</a>
            </li>`
        ).join('');
    }

    return cachedPosts;
}

// function searchBlogPosts(searchTerm) {
//     if (typeof searchTerm !== 'string') {
//         console.warn('Search term must be a string');
//         return;
//     }
//     const searchTermLower = searchTerm.toLowerCase().trim();
//     const leftColumn = document.querySelector('.left-column');
//     const oldNoResultsMessage = document.querySelector('.no-results');
//     if (oldNoResultsMessage) oldNoResultsMessage.remove();

//     leftColumn.innerHTML = '';
//     let hasResults = false;

//     if (!searchTermLower) {
//         cachedPosts.forEach((post, index) => {
//             const html = createBlogPostHTML(post.blogFile, {
//                 title: post.titleElement.textContent,
//                 date: post.dateElement.textContent,
//                 excerpt: post.excerpt.textContent,
//                 image: post.image
//             });
//             leftColumn.insertAdjacentHTML('beforeend', html);
//             leftColumn.querySelectorAll('.card').forEach(card => {
//                 card.style.animationDelay = `${index * 0.1}s`;
//                 card.classList.remove('hidden');
//             });
//         });
//         return;
//     }

//     cachedPosts.forEach(post => {
//         const title = post.titleElement.textContent.toLowerCase();
//         const excerpt = post.excerpt.textContent.toLowerCase();
//         const date = post.dateElement.textContent.toLowerCase();

//         if (title.includes(searchTermLower) || excerpt.includes(searchTermLower) || date.includes(searchTermLower)) {
//             const html = createBlogPostHTML(post.blogFile, {
//                 title: post.titleElement.textContent,
//                 date: post.dateElement.textContent,
//                 excerpt: post.excerpt.textContent,
//                 image: post.image
//             });
//             leftColumn.insertAdjacentHTML('beforeend', html);
//             hasResults = true;
//         }
//     });

//     if (!hasResults) {
//         const noResultsMessage = document.createElement('div');
//         noResultsMessage.className = 'no-results';
//         noResultsMessage.innerHTML = `
//             <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
//             <p>Không tìm thấy bài viết nào phù hợp với "${searchTerm}"</p>
//         `;
//         leftColumn.appendChild(noResultsMessage);
//     }
// }
function searchBlogPosts(searchTerm) {
    const articles = document.querySelectorAll('.left-column .card');
    const searchTermLower = searchTerm.toLowerCase().trim();
    let hasResults = false;

    // Xóa thông báo "Không tìm thấy" cũ nếu có
    const oldNoResultsMessage = document.querySelector('.no-results');
    if (oldNoResultsMessage) {
        oldNoResultsMessage.remove();
    }

    // Nếu không có từ khóa tìm kiếm, hiển thị tất cả bài viết
    if (!searchTermLower) {
        articles.forEach((article, index) => {
            article.style.animationDelay = `${index * 0.1}s`;
            article.classList.remove('hidden');
        });
        return;
    }

    // Duyệt qua từng bài viết
    articles.forEach(article => {
        // Lấy nội dung từ .blog-title và .date trong .content
        const title = article.querySelector('.content .blog-title')?.textContent.toLowerCase() || '';
        const date = article.querySelector('.content .date')?.textContent.toLowerCase() || '';

        // Kiểm tra xem từ khóa có trong title hoặc date không
        if (title.includes(searchTermLower) || date.includes(searchTermLower)) {
            article.classList.remove('hidden');
            hasResults = true;
        } else {
            article.classList.add('hidden');
        }
    });

    // Hiển thị thông báo nếu không tìm thấy kết quả
    if (!hasResults) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results';
        noResultsMessage.innerHTML = `
            <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <p>Không tìm thấy bài viết nào phù hợp với "${searchTerm}"</p>
        `;
        document.querySelector('.left-column').appendChild(noResultsMessage);
    }
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => {
        img.dataset.src = img.src;
        img.src = '';
        observer.observe(img);
    });
}

function displayTags() {
    const tagsContainer = document.getElementById('blogTags');
    tagsContainer.innerHTML = blogTags.map(tag => 
        `<span class="tag" data-tag="${tag}">${tag}</span>`
    ).join('');
}

async function updateTotalPosts() {
    const blogFiles = await getBlogFiles();
    const totalPostsElement = document.getElementById('totalPosts');
    totalPostsElement.textContent = `${blogFiles.length} Bài viết`;
}

function updateTotalTags() {
    const totalTagsElement = document.getElementById('totalTags');
    totalTagsElement.textContent = `${blogTags.length} Tags`;
}

function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

function filterByTag(tag) {
    const articles = document.querySelectorAll('.left-column .card');
    articles.forEach(article => {
        const tags = article.dataset.tags?.split(',') || [];
        if (tag === 'all' || tags.includes(tag)) {
            article.classList.remove('hidden');
        } else {
            article.classList.add('hidden');
        }
    });
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', () => {
        searchBlogPosts(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBlogPosts(searchInput.value);
        }
    });
    
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchBlogPosts(searchInput.value);
        }, 230);
    });
    
    loadBlogPosts().then(() => {
        if (searchInput.value.trim()) {
            searchBlogPosts(searchInput.value);
        }
    });
    
    displayTags();
    updateTotalPosts();
    updateTotalTags();
    updateCurrentYear();
    lazyLoadImages();

    // const tagButtons = document.querySelectorAll('.tag');
    // tagButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         filterByTag(button.dataset.tag);
    //     });
    // });
});