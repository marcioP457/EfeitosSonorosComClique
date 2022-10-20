let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");
let key5 = document.querySelector(".key5");

document.addEventListener("keydown", () => {
  if (event.key === "f") {
    let audio5 = document.querySelector(".audio5");
    audio5.play();
  }

  if (event.key === "g") {
    let audio3 = document.querySelector(".audio3");
    audio3.play();
  }

  if (event.key === "h") {
    let audio4 = document.querySelector(".audio4");
    audio4.play();
  }

  if (event.key === "j") {
    let audio1 = document.querySelector(".audio1");
    audio1.play();
  }

  if (event.key === "k") {
    let audio2 = document.querySelector(".audio2");
    audio2.play();
  }
});
