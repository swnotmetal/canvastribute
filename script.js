document.addEventListener('DOMContentLoaded', function() {
    loadAddtionalContent('courses-cards.html');
}); 

function loadAddtionalContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector('#additional-content').innerHTML = data;
        });
}



