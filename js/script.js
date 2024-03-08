const base = document.getElementById('base');
const ssj = document.getElementById('ssj');
const ssj2 = document.getElementById('ssj2');
const ssj3 = document.getElementById('ssj3');

function Base() {
    base.style.display = "block";
    ssj.style.display = "none";
    ssj2.style.display = "none";
    ssj3.style.display = "none";
}

function SSJ() {
    base.style.display = "none";
    ssj.style.display = "block";
    ssj2.style.display = "none";
    ssj3.style.display = "none";
}

function SSJ2() {
    base.style.display = "none";
    ssj.style.display = "none";
    ssj2.style.display = "block";
    ssj3.style.display = "none";
}

function SSJ3() {
    base.style.display = "none";
    ssj.style.display = "none";
    ssj2.style.display = "none";
    ssj3.style.display = "block";
}