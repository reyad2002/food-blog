  // Menu toggle functionality
  const menuIcon = document.querySelector(".menu");
  const navRes = document.querySelector(".nav-res");

  menuIcon.addEventListener("click", () => {
    // Toggle menu with smooth transition
    if (!navRes.classList.contains("show")) {
      navRes.style.display = "block";
      // Force reflow to ensure the transition works
      navRes.offsetHeight;
      navRes.classList.add("show");
      menuIcon.classList.add("active");
    } else {
      navRes.classList.remove("show");
      menuIcon.classList.remove("active");
      // Wait for transition to complete before hiding
      setTimeout(() => {
        if (!navRes.classList.contains("show")) {
          navRes.style.display = "none";
        }
      }, 500); // Match this with the CSS transition duration
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !navRes.contains(e.target) &&
      !menuIcon.contains(e.target) &&
      navRes.classList.contains("show")
    ) {
      navRes.classList.remove("show");
      menuIcon.classList.remove("active");
      setTimeout(() => {
        navRes.style.display = "none";
      }, 500);
    }
  });

  // Dark mode functionality
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const sunIcon = darkModeToggle.querySelector(".fa-sun");
  const moonIcon = darkModeToggle.querySelector(".fa-moon");

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    sunIcon.style.display = body.classList.contains("dark-mode")
      ? "none"
      : "block";
    moonIcon.style.display = body.classList.contains("dark-mode")
      ? "block"
      : "none";
  });