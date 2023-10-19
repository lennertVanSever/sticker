document.addEventListener("DOMContentLoaded", function () {
    const headerInput = document.getElementById("headerText");
    const hashtagInput = document.getElementById("hashtagText");
    const bottomInput = document.getElementById("bottomText");

    const headerTextElement = document.getElementById("textPathHeader");
    const hashtagTextElement = document.getElementById("textPathHashtag");
    const bottomTextElement = document.getElementById("textPathBottom");

    console.log(bottomTextElement)
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
