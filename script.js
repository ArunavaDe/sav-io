document.getElementById('motivateBtn').addEventListener('click', generateQuote);

function generateQuote() {
    // Quotable API to get a random quote
    const apiURL = 'https://api.quotable.io/random';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            // Update the HTML with the fetched quote and author
            document.getElementById('quote').innerText = data.content;
            document.getElementById('author').innerText = `– ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quote').innerText = 'Oops! Could not fetch a quote.';
            document.getElementById('author').innerText = '';
        });
}



