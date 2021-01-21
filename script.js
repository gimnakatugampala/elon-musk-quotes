const container = document.querySelector('.container');


function getQuote(){
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const quotes = data.map(quote => `
        <div id="main">
        <p>${quote}</p>
        </div>
        `).join('')

        container.innerHTML = quotes;

    })
    .catch(err => console.log(err))
}

getQuote()

mainEl.style.display = 'none';

setTimeout(() => mainEl.style.display = 'block',2000)