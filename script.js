document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.3 }); // Adjust threshold for when it becomes visible

  sections.forEach(section => {
      observer.observe(section);
  });
});

particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});

document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200, // Duration of animation
        once: true,     // Whether animation should happen only once - while scrolling down
    });
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded.');
});
