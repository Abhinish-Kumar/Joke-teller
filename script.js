const btnEl = document.getElementById("btn");
const joke = document.getElementById("joke");

const apiKey = "26af7a9864b6e5069777b71f4691";

const apiURL = "https://hindi-jokes-api.onrender.com/jokes?api_key=";

async function getJoke() {
  try {
    joke.innerText = "Updating...........";
    btnEl.disabled = true;
    btnEl.innerText = "Loading";
    const response = await fetch(apiURL + apiKey);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    joke.textContent = data.jokeContent;
  } catch (error) {
    joke.textContent = "An error happen try again latter";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.error(error);
  }
}

btnEl.addEventListener("click", getJoke);
