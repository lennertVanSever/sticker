document.addEventListener("DOMContentLoaded", function () {
    const headerInput = document.getElementById("headerText");
    const hashtagInput = document.getElementById("hashtagText");
    const bottomInput = document.getElementById("bottomText");

    const headerTextElement = document.getElementById("myTextPath");
    const hashtagTextElement = document.querySelector("text[style*='black']");
    const bottomTextElement = document.querySelector("text[style*='white'] tspan");

    headerInput.addEventListener("input", function () {
        headerTextElement.textContent = headerInput.value;
    });

    hashtagInput.addEventListener("input", function () {
        hashtagTextElement.textContent = hashtagInput.value;
    });

    bottomInput.addEventListener("input", function () {
        bottomTextElement.textContent = bottomInput.value;
    });
});
