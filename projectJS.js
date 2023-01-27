const music = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
            method: "GET"
        });
        if (res.ok) {
            let musicList = await res.json();
            console.log(res)
            let card = document.getElementById("container-music");
            console.log(musicList.data)
            for (let i = 0; i < 3; i++) {
                const artista = musicList.data[i]
                card.innerHTML += `
                    <div class="card col col-3 mb-4 mx-2" style = "width: 13rem;">
                        <img src="${artista.album.cover_big}" class="card-img-top" alt="" >
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title">${artista.title}</h5>
                                <p class="card-text">${artista.album.title}</p>
                            </div>
                        </div>
                        `;

            };
        } else {
            console.log("qualcosa è andato storto");
        }
    } catch (error) {
        console.log(error);
    }
};

music();



const song = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
            method: "GET"
        });
        if (res.ok) {
            let songList = await res.json();
            console.log(res)
            let card = document.getElementById("container-song");
            console.log(songList.data)
            for (let i = 0; i < 1; i++) {
                const artista = songList.data[i]
                card.innerHTML += `
                    <div class="card col col-3 mb-4 mx-2" style = "width: 13rem;">
                        <img src="${artista.album.cover_big}" class="card-img-top" alt="" >
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title">${artista.title}</h5>
                                <p class="card-text">${artista.album.title}</p>
                            </div>
                        </div>
                        `;

            };
        } else {
            console.log("qualcosa è andato storto");
        }
    } catch (error) {
        console.log(error);
    }
};

song();


const image = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
            method: "GET"
        });
        if (res.ok) {
            let imageList = await res.json();
            console.log(res)
            let card = document.getElementById("image");
            console.log(imageList.data)
            for (let i = 0; i < 3; i++) {
                const imageAlbum = imageList.data[i]
                card.innerHTML += `
                        <img src="${artista.album.cover_big}" class="card-img-top" alt="" >
                        `;

            };
        } else {
            console.log("qualcosa è andato storto");
        }
    } catch (error) {
        console.log(error);
    }
};

image();





