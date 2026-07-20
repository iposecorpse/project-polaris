alert("JavaScript loaded!");

const button = document.getElementById("beginBtn");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const message = `Dear Sia,

Happy Birthday ❤️

Today is all about celebrating you.

I hope this year brings you happiness,
good health,
lots of laughter,
and memories worth keeping.

Thank you for being the wonderful person you are.

Have an amazing birthday.

— Deepak`;

button.addEventListener("click", function () {
    button.style.display = "none";
    letter.classList.remove("hidden");
    typeWriter();
});

let i = 0;

function typeWriter() {
    if (i < message.length) {
        typing.textContent += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}
