// Lấy dữ liệu từ GitHub API
async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/repos/yourusername/yourrepo/contents/data.json');
        const data = await response.json();
        const content = JSON.parse(atob(data.content));
        
        let html = '';
        content.forEach(item => {
            html += `
            <div class="text-container">
                <div class="timestamp">${item.timestamp}</div>
                <p>${item.text}</p>
            </div>
            `;
        });
        
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Tải dữ liệu ban đầu và cập nhật mỗi 30 giây
fetchData();
setInterval(fetchData, 30000);
