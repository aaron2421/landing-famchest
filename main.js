var phoneBtn = document.getElementById("phone-btn");
var contactBtn = document.getElementsByClassName("contact-btn")[0];
var contactBtn2 = document.getElementsByClassName("contact-btn")[1];

var ancho = window.innerWidth;

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

phoneBtn.onclick = () => {
  if (ancho <= 600) {
    location.href = "tel:+526141903556";
  } else {
    location.href = "https://api.whatsapp.com/send?phone=+526141903556";
  }
};

// contactBtn.onclick = () => {
//   location.href = "https://calendly.com/arcadia-almacenadoras/30min";
// }

// contactBtn2.onclick = () => {
//   location.href = "https://calendly.com/arcadia-almacenadoras/30min";
// }