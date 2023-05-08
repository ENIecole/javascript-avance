// tag::pikachu[]
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(r => r.json())
    .then(reponse => {
        // console.log(reponse["sprites"]["other"]["home"]["front_female"]);
        let image = document.createElement('img');
        image.src = reponse["sprites"]["other"]["home"]["front_female"];
        document.getElementById('pikachu').appendChild(image);
    })
//end::pikachu[]

// tag::token_spotify[]
client_id = "91b7ed5b61984131a7d7425d890dbdcf";
client_secret = "35557b16e54348f2a386df61ece15d06";
fetch(
    "https://accounts.spotify.com/api/token",
    {
        headers: {
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: new URLSearchParams({
            grant_type: "client_credentials"
        })
    }
)
    .then(r => r.json())
    .then(reponse => {
        // console.log(reponse['access_token']);
        localStorage.setItem('token', reponse['access_token']);
    });
// end::token_spotify[]

// tag::recherche_spotify[]
function recherche() {
    const artiste = document.getElementById('recherche').value;
    fetch("https://api.spotify.com/v1/search?query=" + artiste + "&type=artist",
        {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        .then(r => r.json())
        .then(reponse => {
            // console.log(reponse);
            document.getElementById('artistes').innerHTML = '';
            for (const artiste of reponse['artists']['items']) {
                let div_artiste = document.createElement('div');
                div_artiste.innerText = artiste['name'];
                div_artiste.id = artiste['id'];
                div_artiste.addEventListener('click', son);
                document.getElementById('artistes').appendChild(div_artiste);
            }
        });
}

// end::recherche_spotify[]

// tag::son_spotify[]
function son(evt) {
    // console.log(evt.target.id);
    fetch("https://api.spotify.com/v1/artists/" + evt.target.id + "/top-tracks?market=FR",
        {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        .then(r => r.json())
        .then(reponse => {
            // console.log(reponse['tracks'][0]['preview_url']);
            let audio = new Audio(reponse['tracks'][0]['preview_url']);
            audio.play().catch(err => console.log(err));
        })
}

// end::son_spotify[]