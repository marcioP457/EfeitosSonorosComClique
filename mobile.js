let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");
let key5 = document.querySelector(".key5");

////////////
// CLIQUE //
////////////

key1.addEventListener("click", () => {
  let audio5 = document.querySelector(".audio5");
  audio5.play();
});

key2.addEventListener("click", () => {
  let audio3 = document.querySelector(".audio3");
  audio3.play();
});

key3.addEventListener("click", () => {
  let audio4 = document.querySelector(".audio4");
  audio4.play();
});

key4.addEventListener("click", () => {
  let audio1 = document.querySelector(".audio1");
  audio1.play();
});

key5.addEventListener("click", () => {
  let audio2 = document.querySelector(".audio2");
  audio2.play();
});

////////////
// MOBILE //
////////////

key1.addEventListener("touchstart", () => {
  let audio5 = document.querySelector(".audio5");
  audio5.play();
});

key2.addEventListener("touchstart", () => {
  let audio3 = document.querySelector(".audio3");
  audio3.play();
});

key3.addEventListener("touchstart", () => {
  let audio4 = document.querySelector(".audio4");
  audio4.play();
});

key4.addEventListener("touchstart", () => {
  let audio1 = document.querySelector(".audio1");
  audio1.play();
});

key5.addEventListener("touchstart", () => {
  let audio2 = document.querySelector(".audio2");
  audio2.play();
});
