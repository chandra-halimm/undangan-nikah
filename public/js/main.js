// export const element = () => {
//   const opacity = (id, speed = 0.01) => {
//     const element = document.getElementById(id);
//     let op = parseInt(element.style.opacity);

//     let clear = null;
//     clear = setInterval(() => {
//       if (op > 0) {
//         element.style.opacity = op.toString();
//         op -= speed;
//       } else {
//         clearInterval(clear);
//         clear = null;
//         element.remove();
//       }
//     }, 10);
//   };

//   const open = async (button) => {
//     button.disabled = true;
//     confetti({
//       origin: { y: 1 },
//       zIndex: 1057,
//     });

//     document.querySelector("body").style.overflowY = "scroll";
//     if (storage("information").get("info")) {
//       document.getElementById("information")?.remove();
//     }

//     const token = document.querySelector("body").getAttribute("data-key");
//     if (!token || token.length === 0) {
//       document.getElementById("ucapan")?.remove();
//       document
//         .querySelector('a.nav-link[href="#ucapan"]')
//         ?.closest("li.nav-item")
//         ?.remove();
//     }

//     AOS.init();

//     countDownDate();
//     opacity("welcome", 0.025);

//     audio.play();
//     audio.showButton();

//     theme.check();
//     theme.showButtonChangeTheme();

//     if (!token || token.length === 0) {
//       return;
//     }

//     const status = await storeConfig(token);
//     if (status === 200) {
//       animation();
//       await comment.comment();
//     }
//   };

//   return { opacity, open };
// };

document.getElementById("open").addEventListener("click", function () {
  var container = document.getElementById("openContainer");
  var halo = document.getElementById("halo");

  // Memicu animasi tirai dan menghilangkan container
  container.classList.add("slide-up");
  container.addEventListener("animationend", function () {
    container.remove();
    // Setelah container hilang, tampilkan elemen "Halooo"
    halo.style.display = "block";
  });
});
