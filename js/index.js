const textBox = document.getElementById("textBox");
const quoteBtn = document.querySelector(".quoteBtn");
const volumBtn = document.querySelector(".volum");

let num = -1;
synth = speechSynthesis;


function random() {
  const quote = [
    "“Be yourself; everyone else is already taken.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“Be the change that you wish to see in the world.”",
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    "“If you tell the truth, you don't have to remember anything.”",
  ];

  const userNames = [
    "--Oscar Wilde",
    "--Bernard M. Baruch",
    "--Mahatma Gandhi",
    "--Mahatma Gandhi",
    "--Andre Gide, Autumn Leaves",
    "--Mark Twain",
  ];

  do {
    var qouteNum = Math.floor(Math.random() * quote.length);
  } while (num === qouteNum);

  num = qouteNum;

  // console.log(quote[num] + " " + userNames[num]);

  document.getElementById("quote").innerHTML = quote[num];
  document.getElementById("userNames").innerHTML = userNames[num];
}

function styleText() {
        textBox.style.display = "block";
}

document.querySelector(".copy").addEventListener("click", function () {
        navigator.clipboard.writeText(textBox.innerText);
});

volumBtn.addEventListener("click", function () {
        if (!quoteBtn.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${textBox.innerText}`);
        synth.speak(utterance);

        setInterval(() => {
        !synth.speaking
                ? volumBtn.classList.remove("active")
                : volumBtn.classList.add("active");
        }, 1);
        }
});
