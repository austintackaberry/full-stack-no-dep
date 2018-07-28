"use strict";

let title = document.querySelector("#title");
let currText = title.textContent;

const req = new XMLHttpRequest();
let nextText = "Don't know what to display here yet...";
req.open("GET", "/nextText.json");
req.onreadystatechange = event => {
    if (event.target.readyState === 4) {
        nextText = JSON.parse(event.target.response).nextText;
        document
            .querySelector("body")
            .appendChild(
                document
                    .createElement("p")
                    .appendChild(
                        document.createTextNode("Received " + nextText)
                    )
            );
    }
};
req.send();

title.addEventListener("click", () => {
    title.textContent = nextText;
    const tmp = currText;
    currText = nextText;
    nextText = tmp;
});
