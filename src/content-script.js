const preEls = document.querySelectorAll("pre");

[...preEls].forEach((preEl) => {
    const button = document.createElement("button");
    button.innerText = "Copy"
    button.type = "button"

    preEl.prepend(button)

    const codeEl = preEl.querySelector("code");

    button.addEventListener("click", () => {
        navigator.clipboard.writeText(codeEl.innerText);
    });
});