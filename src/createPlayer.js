
const apiOrigin = "http://127.0.0.1:8000";
const apiPlayers = `${apiOrigin}/players/`;

const createPlayer = () => {
    const age = document.getElementById("age").value;
    console.info({age});
}

const button = document.getElementById("create-button");
button.onclick = createPlayer;