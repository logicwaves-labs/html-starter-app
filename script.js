const jokeBtn = document.querySelector("#joke-btn");
const speakBtn = document.querySelector("#speak-btn");
const jokeText = document.querySelector("#joke");
const synth = window.speechSynthesis;

let joke = null;

function speakUp(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.volume = 0.2;
  synth.speak(utterance);
}

jokeBtn.addEventListener("click", () => {
  fetch(`https://icanhazdadjoke.com/`, {
    headers: {
      Accept: "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => {
      jokeText.innerText = res.joke;
      joke = res.joke;
    });
});

speakBtn.addEventListener("click", () => {
  if (!joke) {
    speakUp("I don't have anything to tell you");
  } else {
    speakUp(joke);
  }
});
