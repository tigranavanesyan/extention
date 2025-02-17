const preEls = document.querySelectorAll("pre");

[...preEls].forEach((preEl) => {
    const root = document.createElement("div");
    const shadowRoot = root.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.innerText = "Copy"
    button.type = "button"

    shadowRoot.prepend(button)

    preEl.prepend(root);

    const codeEl = preEl.querySelector("code");

    button.addEventListener("click", () => {
        navigator.clipboard.writeText(codeEl.innerText);
    });
});