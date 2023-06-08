
const createPlayer = () => {
    const age = document.getElementById("age").value;
    console.info({age});
}

const button = document.getElementById("create-button");
button.onclick = createPlayer;