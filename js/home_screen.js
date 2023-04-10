
window.addEventListener('load', function() {
    homeTiles = document.getElementById("home");
    console.log(homeTiles.classList);
    homeTiles.classList.add("home-active");

    photosApp = document.getElementById("photos");
    photosApp.addEventListener("click", () => {
        currentURL = window.location.protocol + "//" + window.location.host;
        // console.log(currentURL);
        newURL = currentURL + "/camera_roll.html";
        // console.log(newURL);
        window.location.href = newURL;
    })
})