const accessKey = '9GmaXQO14j8SrHgw2TKaORTFSr_JkjWigW5a8oQsNXo';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const imageContainer = document.getElementById('image-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value;
    searchImages(query);
});

function searchImages(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayImages(images) {
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        imageContainer.appendChild(imgElement);
    });
}
