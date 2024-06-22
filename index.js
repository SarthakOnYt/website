async function fetchData() {
    try {
        const response = await fetch('json/news.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function displayNews() {
    const data = await fetchData();
    if (data) {
        const newsList = document.getElementById('news_holder');
        const newsItem = document.createElement('li');
        newsItem.textContent = data["1"]; // Adjust the key based on your JSON structure
        newsList.appendChild(newsItem);
    }
}

// Call the function to display news
displayNews();