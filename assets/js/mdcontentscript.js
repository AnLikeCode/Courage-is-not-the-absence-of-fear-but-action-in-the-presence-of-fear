const HIGHLIGHT_STYLES = {
    xanh: 'xanh',
    xam: 'xam',
    dam: 'dam',
    nghien: 'nghien',
    dam_xanh: 'dam_xanh',
    dam_xam: 'dam_xam',
    gachchan: 'gachchan',
};
function appendToBlogContent(htmlContent) {
    const blogContent = document.querySelector('.blog-content');
    if (blogContent) {
        blogContent.innerHTML += htmlContent;
    }
}
function setBlogHeader({ title, author, time, tags }) {
    const blogHeader = document.querySelector('.blog-header');
    if (!blogHeader) return;

    let html = '';
    if (title) {
        html += `<h1 id="title">${applyHighlight(title)}</h1>\n`;
    }
    if (author) {
        html += `<div class="blog-meta"><span class="author">By: ${author}</span></div>\n`;
    }
    if (time) {
        html += `<div class="blog-meta"><time datetime="${new Date(time).toISOString().split('T')[0]}" class="date">Published on: ${time}</time></div>\n`;
    }
    if (tags && tags.length) {
        html += `<div class="blog-tags"><h3>Tags:</h3><div class="tags-container">\n`;
        tags.forEach(tag => {
            html += `<a href="#" class="tag">#${tag}</a>\n`;
        });
        html += `</div></div><hr class="blog-tags-hr">\n`;
    }
    blogHeader.innerHTML = html;
}
function applyHighlight(content) {
    const spanMatch = content.match(/\[\[(.+?)\]\]/);
    if (spanMatch) {
        const textToHighlight = spanMatch[1];
        const styleMatch = textToHighlight.match(/^(xanh|xam|dam|nghien|dam_xanh|dam_xam|gachchan):(.+)/);
        if (styleMatch) {
            const style = styleMatch[1];
            const text = styleMatch[2];
            return content.replace(
                `\[\[${textToHighlight}\]\]`,
                `<span class="${HIGHLIGHT_STYLES[style]}">${text}</span>`
            );
        }
        return content.replace(
            `\[\[${textToHighlight}\]\]`,
            `<span class="${HIGHLIGHT_STYLES.xanh}">${textToHighlight}</span>`
        );
    }
    return content;
}

async function processMarkdown() {
    try {
        const response = await fetch('./content.md');
        if (!response.ok) throw new Error('Không thể tải file markdown');
        const markdown = await response.text();
        const lines = markdown.split('\n');
        let i = 0;

        let headerInfo = {
            title: '',
            author: '',
            time: '',
            tags: [],
        };
        let firstPara = ''; // Lưu nội dung para đầu tiên cho meta description

        while (i < lines.length) {
            const line = lines[i].trim();
            if (!line) {
                i++;
                continue;
            }

            // Header info
            if (line === 'title') {
                headerInfo.title = lines[++i]?.trim() || '';
                // Cập nhật thẻ <title>
                document.querySelectorAll('title').forEach(titleTag => {
                    titleTag.textContent = headerInfo.title || 'Untitled';
                });
                i++;
                continue;
            }

            if (line === 'author') {
                headerInfo.author = lines[++i]?.trim() || '';
                i++;
                continue;
            }

            if (line === 'time') {
                headerInfo.time = lines[++i]?.trim() || '';
                i++;
                continue;
            }

            if (line === 'tag') {
                i++;
                while (i < lines.length && lines[i].trim()) {
                    headerInfo.tags.push(lines[i].trim());
                    i++;
                }
                continue;
            }

            // Content blocks
            if (line === 'para') {
                i++;
                let temp = '';
                while (i < lines.length && lines[i].trim() && !['para','h2','h3','quote','callout','imginline','layout1','layout2','figcaption'].includes(lines[i].trim())) {
                    if (!firstPara) {
                        firstPara = lines[i].trim(); // Lưu para đầu tiên
                    }
                    temp += `<p>${applyHighlight(lines[i].trim())}</p>\n`;
                    i++;
                }
                appendToBlogContent(temp);
                continue;
            }

            if (line === 'h2') {
                i++;
                let temp = '';
                while (i < lines.length && lines[i].trim()) {
                    temp += `<h2>${applyHighlight(lines[i].trim())}</h2>\n`;
                    i++;
                }
                appendToBlogContent(temp);
                continue;
            }

            if (line === 'h3') {
                i++;
                let temp = '';
                while (i < lines.length && lines[i].trim()) {
                    temp += `<h3>${applyHighlight(lines[i].trim())}</h3>\n`;
                    i++;
                }
                appendToBlogContent(temp);
                continue;
            }

            if (line === 'quote') {
                i++;
                let temp = '';
                while (i < lines.length && lines[i].trim()) {
                    temp += `<blockquote>${applyHighlight(lines[i].trim())}</blockquote>\n`;
                    i++;
                }
                appendToBlogContent(temp);
                continue;
            }

            if (line === 'figcaption') {
                i++;
                let temp = '';
                while (i < lines.length && lines[i].trim()) {
                    temp += `<figcaption class="figcaption">${applyHighlight(lines[i].trim())}</figcaption>\n`;
                    i++;
                }
                appendToBlogContent(temp);
                continue;
            }

            if (line === 'callout') {
                i++;
                let temp = '';
                while (i < lines.length && lines[i].trim()) {
                    temp += `<p>${applyHighlight(lines[i].trim())}</p>\n`;
                    i++;
                }
                appendToBlogContent(`
                    <div class="callout">
                        <span class="callout-icon">💡</span>
                        <div class="callout-content">
                            ${temp}
                        </div>
                    </div>\n`);
                continue;
            }

            if (line === 'imginline') {
                i++;
                const imgPath = lines[i++]?.trim();
                const caption = lines[i++]?.trim();
                if (imgPath && caption) {
                    appendToBlogContent(`
                        <figure class="inline-image">
                            <img src="${imgPath}" alt="Inline Image">
                            <figcaption>${caption}</figcaption>
                        </figure>\n`);
                }
                continue;
            }

            if (line === 'layout1') {
                const imgPath = lines[++i]?.trim();
                const caption = lines[++i]?.trim();
                const content = lines[++i]?.trim();
                if (imgPath && caption && content) {
                    appendToBlogContent(`
                        <div class="image-text-layout">
                            <div class="image-text-image">
                                <img src="${imgPath}" alt="Layout Image">
                                <figcaption class="figcaption">${caption}</figcaption>
                            </div>
                            <div class="image-text-content">
                                <p>${applyHighlight(content)}</p>
                            </div>
                        </div>\n`);
                }
                i++;
                continue;
            }

            if (line === 'layout2') {
                const imgPath = lines[++i]?.trim();
                const caption = lines[++i]?.trim();
                const content = lines[++i]?.trim();
                if (imgPath && caption && content) {
                    appendToBlogContent(`
                        <div class="image-text-layout">
                            <div class="image-text-content">
                                <p>${applyHighlight(content)}</p>
                            </div>
                            <div class="image-text-image">
                                <img src="${imgPath}" alt="Layout Image">
                                <figcaption class="figcaption">${caption}</figcaption>
                            </div>
                        </div>\n`);
                }
                i++;
                continue;
            }

            console.warn(`Không xác định marker: ${line}`);
            i++;
        }

        // Cập nhật meta description từ firstPara
        let metaDescription = firstPara || '';
        if (metaDescription.length > 160) {
            metaDescription = metaDescription.substring(0, 157) + '...';
        }
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', metaDescription);
        }

        // Cập nhật schema nếu có
        const schemaScript = document.querySelector('script[type="application/ld+json"]');
        if (schemaScript) {
            try {
                const schemaData = JSON.parse(schemaScript.textContent);
                schemaData.headline = headerInfo.title || 'Untitled';
                schemaData.description = metaDescription;
                schemaScript.textContent = JSON.stringify(schemaData, null, 2);
            } catch (e) {
                console.error('Lỗi khi cập nhật schema:', e);
            }
        }

        // Sau khi xử lý xong thì thêm header
        setBlogHeader(headerInfo);

    } catch (error) {
        console.error('Lỗi khi xử lý markdown:', error);
        const blogContent = document.querySelector('.blog-content');
        if (blogContent) {
            blogContent.innerHTML = '<p>Lỗi khi tải nội dung. Vui lòng kiểm tra lại.</p>';
        }
    }
}

document.addEventListener('DOMContentLoaded', processMarkdown);

let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 50; 
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });