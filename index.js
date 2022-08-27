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
        MeanWhile..... :- "${response.quote }" ~ ${response.author}`))
        .catch(err => console.error(err));
    }
    

    function redirect_Page() 
    {var tID = setTimeout(function () {
            window.location.href = "mainpage.html";
            window.clearTimeout(tID);		// clear time out.
        }, 8000)
    };



