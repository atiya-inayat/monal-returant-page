const themeSwitcher = document.getElementById("theme-switcher");
const welcomeTitle = document.querySelector(".welcome-heading");
const darkThemeTitles = document.querySelectorAll(".darkTheme");
const navbarTheme = document.querySelectorAll(".navDarkTheme");
const aboutBtn = document.querySelector(".about-btn");
const clockTheme = document.querySelector(".fa-clock");
const timingTheme = document.querySelector(".timing");
const toggleIcon = document.querySelector(".fa-moon");

function darkModeToggle() {
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "#fff";
  aboutBtn.style.color = "#fff";
  aboutBtn.style.background = "#ed792e";
  clockTheme.style.color = "#ed792e";
  timingTheme.style.color = "#ed792e";
  toggleIcon.classList.replace("fa-sun", "fa-moon");

  darkThemeTitles.forEach((title) => {
    title.style.color = "#ed792e";
  });
  navbarTheme.forEach((nav) => {
    nav.style.color = "#ed792e";
  });
}

function lightModeToggle() {
  document.body.style.backgroundColor = "#fff"; // "#121212";
  document.body.style.color = "#121212"; //"#fff";
  aboutBtn.style.color = "#ed792e";
  aboutBtn.style.background = "rgba(255, 255, 255, 0.9)";
  clockTheme.style.color = "#121212";
  timingTheme.style.color = "#121212";
  toggleIcon.classList.replace("fa-moon", "fa-sun");

  darkThemeTitles.forEach((title) => {
    title.style.color = "#121212";
  });
  navbarTheme.forEach((nav) => {
    nav.style.color = "#fff";
  });
}

function switchTheme() {
  //   console.log(event.target.checked);
  if (themeSwitcher.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeToggle();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightModeToggle();
  }
}

themeSwitcher.addEventListener("change", switchTheme);
