const textBox = document.getElementById("numOfWords");
const button = document.querySelector("button");
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = [4, 5, 6, 7, 8];
const position = document.querySelector(".container");

function createWord() {
    let word = " ";
    let n = letters[(Math.floor(Math.random() * letters.length))];
    for (let i = 0; i < n; ++i) {
        word = word + alpha[Math.floor(Math.random() * alpha.length)];
    }
    return word;
}

function createSentence() {
    const para = document.createElement("p");
    let sentence = "";
    for (var i = 0; i < textBox.value; ++i) {
        let word = createWord();
        sentence += word;
    }
    para.setAttribute("class", "paras");
    para.innerText = sentence;
    if (sentence.length)
        position.append(para);
}
button.onclick = createSentence;