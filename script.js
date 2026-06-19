const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});

const text = "AI & Machine Learning Enthusiast";
let i = 0;

function typing(){
    const heading = document.querySelector(".hero h2");

    if(i < text.length){
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}

document.querySelector(".hero h2").textContent = "";
typing();
