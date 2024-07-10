//Sticky navbar
window.onscroll = function () {
  stickyNavbar();
};

let navbar = document.getElementById("navbar");
let share = document.getElementById("scroll-share");
let btn = document.getElementById("nav-btn");
let sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    share.classList.add("scroll-sh");
    btn.classList.add("nav-btnn");
    document.getElementById("logo").src = "../assets/dash_logo.png";
    document.getElementById("share").src = "../assets/dash_share.png";
    document.getElementById("menu").src = "../assets/dash_menu.png";
    // navbar.classList.add("scroll-share");
    // navbar.classList.add("nav-btn");
  } else {
    navbar.classList.remove("sticky");
    share.classList.remove("scroll-sh");
    btn.classList.remove("nav-btnn");
    document.getElementById("logo").src = "../assets/logo.png";
    document.getElementById("share").src = "../assets/share.png";
    document.getElementById("menu").src = "../assets/menu.png";
    // navbar.classList.add("scroll-share");
    // navbar.classList.add("nav-btn");
  }
}

//hamberger menu toggle
function showHideToggleMenu() {
  let hamberger = document.getElementById("hamberger");
  if (hamberger.style.display === "block") {
    hamberger.style.display = "none";
  } else {
    hamberger.style.display = "block";
  }
}

// line chart implementation
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        data: [12, 19, 3, 5, 2, 3, 4, 1, 3, 4, 2, 7, 10, 5],
        borderWidth: 1,
      },
      {
        label: "Google",
        data: [18, 14, 4, 2, 1, 6, 3, 12, 19, 3, 5, 2, 3, 4],
        borderWidth: 1,
      },
      {
        label: "Microsoft",
        data: [1, 3, 4, 2, 7, 10, 5, 18, 14, 4, 2, 1, 6, 3],
        borderWidth: 1,
      },
      {
        label: "Twitter Index",
        data: [-7, 8, 17, 4, 9, 10, 2, 12, 19, 3, 5, 2, 3, 4],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        // cornerRadius: 6,
        // bodyColor: {
        //   type: "Color",
        //   backgroundColor: "#fff",
        // },
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        suggestedMin: 10,
        suggestedMax: 100,
      },
      x: {
        grid: {
          color: "white",
          borderColor: "grey",
        },
      },
    },
  },
});

// Code for image slider
let slider = document.querySelector(".slider");
let firstImg = slider.querySelectorAll(".slide")[0];
let arrowIcons = document.querySelectorAll(".arrow button");

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth;
    slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => 60);
  });
});
