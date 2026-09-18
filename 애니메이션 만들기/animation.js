const sky = document.querySelector(".sky");
const button = document.querySelector("#dayNightBtn");

button.addEventListener("click", function() {
    
    sky.classList.toggle("day");

    if(sky.classList.contains("day")) {
        button.textContent = "밤으로 바꾸기";
    } else {
        button.textContent = "낮으로 바꾸기";
    }

});