document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");

  function activateRandomDot() {
      const randomIndex = Math.floor(Math.random() * dots.length);
      dots[randomIndex].classList.add("active");

      setTimeout(() => {
          dots[randomIndex].classList.remove("active");
      }, 300); // Duration for which the dot stays active
  }

  function startGlitchEffect() {
      setInterval(activateRandomDot, 400); // Interval for the glitch effect
  }

  startGlitchEffect();
});