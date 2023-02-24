// A $( document ).ready() block.
// $(document).ready(function () {
//   var mobile = document.getElementById("mobile").value;
//   document.getElementById("link").value = "https://wa.me/+91" + mobile;
// });

function generateLink() {
  console.log("Generating");
  var mobile = document.getElementById("mobile").value;
  var myWindow = window.open("https://wa.me/+91" + mobile);
  //   document.getElementById("link").value = "https://wa.me/+91" + mobile;
}

function myFunction() {
  console.log("edited");
  var x = document.getElementById("mobile").value;
  document.getElementById("link").value = "https://wa.me/+91" + x;
}
