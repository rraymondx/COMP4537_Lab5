
//Gets the insert button
document.getElementById('insertButton').addEventListener('click', () => {

    //Post request to website
    fetch('https://comp-4537-lab5-blush.vercel.app/insert', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = JSON.stringify(data);
    });
});

document.getElementById('queryButton').addEventListener('click', () => {
    const query = document.getElementById('queryInput').value;
    const method = query.startsWith('SELECT') ? 'GET' : 'POST';
    fetch('https://comp-4537-lab5-blush.vercel.app/query', {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = JSON.stringify(data);
    });
});