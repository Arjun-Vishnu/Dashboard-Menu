let navigation = document.querySelector(".navigation");
let bars1 = document.querySelector(".bars i.fa-bars");
let bars2 = document.querySelector(".bars i.fa-xmark");

bars1.onclick = function() {
    navigation.classList.toggle("active");
}

bars2.onclick = function() {
    navigation.classList.toggle("active");
} 