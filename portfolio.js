// on modifie l'opacité pour faire apparaitre les elements quand on passe sur le drapeau
const flags = document.querySelectorAll(".flag");
for (let i = 0; i < flags.length; i++) {
  flags[i].addEventListener("mouseover", function (event) {
    const contents = flags[i].querySelector(".content");
    if (contents) {
      contents.style.display = "flex";
      contents.style.opacity = "0";
      setTimeout(() => {
        contents.style.opacity = "1";
      }, 100);
    }

    const x = event.offsetX;
    const y = event.offsetY;
    console.log(`La souris est à la position (${x}, ${y})`);
  });

  flags[i].addEventListener("mouseout", function (event) {
    const contents = flags[i].querySelector(".content");
    if (contents) {
      contents.style.opacity = "0";
    }
    setTimeout(() => {
      if (contents.style.opacity == 0) {
        contents.style.display = "none";
      }
    }, 2000);
  });
}

// menu burger
var elburger = document.getElementById("burger");
var openBtn = document.getElementById("openBtn");
openBtn.onclick = openNav;
function openNav() {
  elburger.classList.add("active");
}
function closeNav() {
  elburger.classList.remove("active");
}

//  On cherche à afficher le numero de la page en fonction de la position (var utilisable dans tous les blocs)
const numbers = document.querySelectorAll(".number");
console.log(numbers);
console.log(scrollX);
function updateNumber() {
  if (scrollX < 1500 && scrollX > -1) {
    numbers[0].classList.add("revealnumber");
  } else {
    numbers[0].classList.remove("revealnumber");
  }
  if (scrollX < 3000 && scrollX > 1500) {
    numbers[1].classList.add("revealnumber");
  } else {
    numbers[1].classList.remove("revealnumber");
  }
  if (scrollX < 4500 && scrollX > 3000) {
    numbers[2].classList.add("revealnumber");
  } else {
    numbers[2].classList.remove("revealnumber");
  }
  if (scrollX < 6000 && scrollX > 4500) {
    numbers[3].classList.add("revealnumber");
  } else {
    numbers[3].classList.remove("revealnumber");
  }
}

// faire en sorte de defiler avec le scroll
window.addEventListener("wheel", (e) => {
  console.log(e.deltaY);
  window.scrollX += e.deltaY;
  scroll(window.scrollX, window.scrollY);
  updateNumber();
});

// //bouger les nuages
// const cloud1 = document.querySelector(".cloud1");
// const cloud2 = document.querySelector(".cloud2");
// const cloud3 = document.querySelector(".cloud3");
// console.log(cloud1);
// cloud1.x = 100;
// console.log(cloud1.offsetLeft);
// setInterval(() => {
//   cloud1.style.left = toString(parseInt(cloud1.style.left) + 3.5) + "px";
//   cloud2.style.left += 6;
//   cloud3.style.left += 2;
//   //atteint une certaine position, retour à -200px
// }, 100);
