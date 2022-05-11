function myNavLinks() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onload = () => {
  var phoneBtn = document.getElementById("phone-btn");
  var contactBtns = document.getElementsByClassName("btn");
  var ancho = window.innerWidth;

  phoneBtn.onclick = () => {
    if (ancho <= 600) {
      location.href = "tel:+526141903556";
    } else {
      location.href = "https://api.whatsapp.com/send?phone=+526141903556";
    }
  };

  for(var i = 0; i<contactBtns.length; i++) {
    contactBtns[i].onclick = () => {
      location.href = "https://calendly.com/arcadia-almacenadoras/30min";
    }
  }
}