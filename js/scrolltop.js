// function goTopEx() {
const topBtn = document.getElementById("goTopBtn");

const getScrollTop = () => document.documentElement.scrollTop;

const setScrollTop = (value) => (document.documentElement.scrollTop = value);

// window.addEventListener(
//   "scroll",
//   () => (topBtn.style.display = getScrollTop() > 0 ? "" : "none")
// );

topBtn.addEventListener("click", () => {
  const goTop = setInterval(() => {
    setScrollTop(getScrollTop() / 1.1);
    if (getScrollTop() < 1) {
      clearInterval(goTop);
    }
  }, 10);
});
// }
