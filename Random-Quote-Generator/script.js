const button = document.querySelector('.generate')

button.addEventListener('click', () => {
    async function getRandomQuote () {
        try {
            const response = await fetch('https://api.quotable.io/random')
            if (!response.ok) {
                throw new Error('Something Went Wrong')
            }
            const data = await response.json()
            document.getElementById('content').innerText = data.content
            document.querySelector('.quote-author').innerText = data.author
            document.querySelector('.tags').innerText = data.tags
            console.log(data)
        } catch (error) {
         console.log("Failed To Get Quote")   
        }
    }
    getRandomQuote()
});
