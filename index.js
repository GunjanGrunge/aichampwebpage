



 function getQuote(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b8d9747918msha1cf93b44fff4c1p18a553jsn99e1754c447f',
            'X-RapidAPI-Host': 'free-famous-quotes.p.rapidapi.com'
        }
    };
    
    fetch('https://free-famous-quotes.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => document.getElementById("para").innerText=(`
        We are Under Construction.  However, here is the quote of the day :- "${response.quote }" ~ ${response.author}`))
        .catch(err => console.error(err));
    }
    



