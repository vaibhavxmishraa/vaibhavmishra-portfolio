const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CUSTOM CURSOR
  ========================= */
  const cursor = document.querySelector(".cursor");
  const cursorGlow = document.querySelector(".cursor-glow");

  if (cursor && cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });
  }

  /* =========================
     MAGNETIC EFFECT
  ========================= */
  const magneticItems = document.querySelectorAll(
    "a, button, .project-card, .testimonial-card"
  );

  magneticItems.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor?.classList.add("active");
      cursorGlow?.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
      cursor?.classList.remove("active");
      cursorGlow?.classList.remove("active");
      el.style.transform = "translate(0px,0px)";
    });

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
  });

  /* =========================
     SCROLL REVEAL
  ========================= */
  const sections = document.querySelectorAll("section");

  function revealSections() {
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  /* =========================
     NAV ACTIVE LINK
  ========================= */
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((sec) => {
      if (window.pageYOffset >= sec.offsetTop - 100) {
        current = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  /* =========================
     SKILLS ANIMATION
  ========================= */
  const skillSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".bar span");

  let animated = false;

  function animateSkills() {
    if (!skillSection) return;

    const rect = skillSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100 && !animated) {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });

      animated = true;
    }
  }

  window.addEventListener("scroll", animateSkills);
  animateSkills();

  /* =========================
     PROJECT MODAL
  ========================= */
  window.openProject = function (title, desc) {
    document.getElementById("projectTitle").innerText = title;
    document.getElementById("projectDesc").innerText = desc;

    document
      .getElementById("projectModal")
      .classList.remove("hidden");
  };

  window.closeProject = function () {
    document
      .getElementById("projectModal")
      .classList.add("hidden");
  };

  /* =========================
     TESTIMONIAL
  ========================= */
  window.toggleLetter = function (el) {
    const letter = el.querySelector(".letter");

    if (letter) {
      letter.classList.toggle("hidden");
    }
  };

  /* =========================
     CHATBOT
  ========================= */
  const toggle = document.getElementById("chatbot-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const chat = document.getElementById("chatbot");

      chat.style.display =
        chat.style.display === "flex"
          ? "none"
          : "flex";
    });
  }

  window.sendMessage = function () {
    const input = document.getElementById("userInput");

    const msg = input.value.trim();

    if (!msg) return;

    addMessage("You", msg);

    input.value = "";

    setTimeout(() => {
      addMessage(
        "AI",
        getAIResponse(msg.toLowerCase())
      );
    }, 500);
  };

  function addMessage(sender, text) {
    const box = document.getElementById("chat-box");

    const div = document.createElement("div");

    div.innerHTML = `<b>${sender}:</b> ${text}`;

    box.appendChild(div);

    box.scrollTop = box.scrollHeight;
  }

  function getAIResponse(msg) {
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello 👋 I'm your portfolio assistant!";
    }

    if (msg.includes("skills")) {
      return "Web Development, Python, C/C++, AI & ML 🚀";
    }

    if (msg.includes("project")) {
      return "Café Management, Email Validator and Multimedia Website.";
    }

    if (msg.includes("contact")) {
      return "Use the contact form below.";
    }

    return "I'm still learning 🤖";
  }

  /* =========================
     PAGE TRANSITION
  ========================= */
  const transition = document.querySelector(".page-transition");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.getAttribute("href");

      transition.classList.add("active");

      setTimeout(() => {
        document.querySelector(target)
          .scrollIntoView({
            behavior: "smooth"
          });

        transition.classList.remove("active");
      }, 500);
    });
  });

  /* =========================
     TYPING EFFECT
  ========================= */
  const text = "Hi, I'm Vaibhav";
  let index = 0;

  function typeEffect() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    typing.innerHTML = text.slice(0, index);

    index++;

    if (index <= text.length) {
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();

  /* =========================
     PARTICLES
  ========================= */
  const canvas = document.getElementById("particles");

  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
      });
    }

    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => {

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width)
          p.dx *= -1;

        if (p.y < 0 || p.y > canvas.height)
          p.dy *= -1;

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "#D4AF37";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});

/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2500);
});
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const bar = document.querySelector(".loader-bar span");

    if(bar){
        bar.style.width = "100%";
    }

    setTimeout(() => {
        loader.classList.add("hide");
    }, 3000);

});){
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
