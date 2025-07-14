  async function loadTimelineItems(markdownFilePath, containerSelector) {
    try {
        const response = await fetch(markdownFilePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        const lines = markdown.split('\n').map(line => line.trim()).filter(line => line !== '');

        const timelineContainer = document.querySelector(containerSelector);
        timelineContainer.innerHTML = ''; // Clear old content

        for (let i = 0; i < lines.length; i += 3) {
            const date = lines[i] || 'No date';
            const title = lines[i + 1] || 'No title';
            const text = lines[i + 2] || 'No content';

            const timelineHTML = `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${date}</div>
                        <h3 class="timeline-title">${title}</h3>
                        <p class="timeline-text">${text}</p>
                    </div>
                </div>
            `;
            timelineContainer.insertAdjacentHTML('beforeend', timelineHTML);
        }
    } catch (error) {
        console.error('Failed to load timeline markdown:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadTimelineItems('./timeline.md', '#timelineContainer');
});