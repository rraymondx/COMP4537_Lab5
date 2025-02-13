
//Gets the insert button
document.getElementById('insertButton').addEventListener('click', () => {

    const people = [
        { name: "Alice Johnson", dob: "1990-05-15" },
        { name: "Bob Smith", dob: "1985-10-22" },
        { name: "Charlie Brown", dob: "2000-07-08" },
        { name: "Diana Ross", dob: "1995-12-30" }
    ];

    //Post request to website. Gets response, then 
    fetch('http://127.0.0.1:5500/server1/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({people})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = JSON.stringify(data);
    });
});

document.getElementById('queryButton').addEventListener('click', () => {
    const query = document.getElementById('queryInput').value;
    const method = query.startsWith('SELECT') ? 'GET' : 'POST';
    fetch('http://localhost:3000/query', {
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