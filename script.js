document.addEventListener("DOMContentLoaded", function () {
    const headerInput = document.getElementById("headerText");
    const hashtagInput = document.getElementById("hashtagText");
    const bottomInput = document.getElementById("bottomText");

    const headerTextElement = document.getElementById("textPathHeader");
    const hashtagTextElement = document.getElementById("textPathHashtag");
    const bottomTextElement = document.getElementById("textPathBottom");

    // Function to update the URL
    function updateURL() {
        const params = new URLSearchParams();
        params.set("header", headerInput.value);
        params.set("hashtag", hashtagInput.value);
        params.set("bottom", bottomInput.value);

        const newURL = "?" + params.toString();
        window.history.pushState({}, "", newURL);
    }

    // Function to set default values if inputs are empty
    function setDefaultValues() {
        headerInput.value = headerInput.value || "";
        hashtagInput.value = hashtagInput.value || "";
        bottomInput.value = bottomInput.value || "";
        headerTextElement.textContent = headerInput.value || "Header";
        hashtagTextElement.textContent = hashtagInput.value || "#Hashtag";
        bottomTextElement.textContent = bottomInput.value || "Bottom Text";
        updateURL();
    }

    headerInput.addEventListener("input", function () {
        headerTextElement.textContent = headerInput.value || "Header";
        updateURL();
    });

    hashtagInput.addEventListener("input", function () {
        hashtagTextElement.textContent = hashtagInput.value || "#Hashtag";
        updateURL();
    });

    bottomInput.addEventListener("input", function () {
        bottomTextElement.textContent = bottomInput.value || "Bottom Text";
        updateURL();
    });

    // Retrieve values from URL parameters and set default values
    const urlParams = new URLSearchParams(window.location.search);
    headerInput.value = urlParams.get("header") || "";
    hashtagInput.value = urlParams.get("hashtag") || "";
    bottomInput.value = urlParams.get("bottom") || "";
    setDefaultValues();


    function exportSVG() {
        const svgElement = document.querySelector("svg");

        // Create a Blob from the SVG content
        const svgBlob = new Blob([new XMLSerializer().serializeToString(svgElement)], { type: "image/svg+xml" });

        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(svgBlob);
        downloadLink.download = "exported.svg";
        downloadLink.style.display = "none";

        // Append the link to the body and trigger the click event to download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up by removing the link
        document.body.removeChild(downloadLink);
    }

    // Add a click event listener to the export button
    const exportButton = document.getElementById("exportButton");
    exportButton.addEventListener("click", exportSVG);


});
