let timeOut;

window.addEventListener("mousemove", function (e) {
  clearTimeout(timeOut);
  timeOut = this.setTimeout(function () {
    console.log(e.x);
  }, 500);
});