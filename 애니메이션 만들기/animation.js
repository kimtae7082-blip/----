const sky = document.querySelector(".sky");
const button = document.querySelector("#dayNightBtn");


button.addEventListener("click", function() {

    // 낮 / 밤 전환
    sky.classList.toggle("day");


    // 낮일 때
    if (sky.classList.contains("day")) {

        button.textContent = "🌙 밤으로 바꾸기";

    }

    // 밤일 때
    else {

        button.textContent = "☀️ 낮으로 바꾸기";

    }

});