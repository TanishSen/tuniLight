// var index = 0;

// function changeColors() {
//   var colors = ["blue", "red", "green", "pink", "yellow", "orange"];
//   document.getElementsByTagName("body")[0].style.background = colors[index++];

//   if (index > colors.length - 1)
//   {
//     index = 0;
//   }

//    let i;
//   for(i=0 ; i<colors.length ; i++)
//   if (colors[i]== red)
//   {
//     document.getElementsByClassName("hex") = #FF0000;
//   }

//   else if (colors[i]== blue)
//     {
//       document.getElementsByClassName("hex") = #0000FF;
//     }

//     else if (colors[i]== green)
//         {
//           document.getElementsByClassName("hex") = #008000;
//         }

//         else if (colors[i]== pink)
//             {
//               document.getElementsByClassName("hex") = #FFC0CB
//               ;
//             }
// }

var index = 0;

function changeColors() {
  // Define color names and their hex codes
  var colors = [
    { name: "blue", hex: "#0000FF" },
    { name: "red", hex: "#FF0000" },
    { name: "green", hex: "#008000" },
    { name: "pink", hex: "#FFC0CB" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "orange", hex: "#FFA500" },
  ];

  // Set the body's background color
  document.getElementsByTagName("body")[0].style.background = colors[index].hex;

  // Update the hex color text in the element with class "hex"
  let hexElement = document.getElementsByClassName("hex")[0];
  hexElement.textContent = colors[index].hex;
  hexElement.style.backgroundColor = colors[index].hex;

  // Increment index, reset if it exceeds array length
  index++;
  if (index >= colors.length) {
    index = 0;
  }
}
