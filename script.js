var index = 0;

function changeColors() {
  var colors = ["blue", "red", "pink", "yellow", "orange"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
