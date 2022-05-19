var ancho = window.innerWidth;

if (ancho <= 700) {
  const overlay = document.getElementsByClassName("overlay")[0];
  const overlay2 = document.getElementsByClassName("overlay")[1];
  const overlay3 = document.getElementsByClassName("overlayr")[0];
  const overlay4 = document.getElementsByClassName("overlayr")[1];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        overlay.style.width = "100%";
        return;
      }
      overlay.style.width = "0";
    });
  });

  observer.observe(document.querySelector(".chmex"));

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        overlay3.style.width = "100%";
        overlay3.style.left = "0";
        return;
      }
      overlay3.style.width = "0";
      overlay3.style.left = "100%";
    });
  });

  observer3.observe(document.querySelector(".arcadia"));

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        overlay2.style.width = "100%";
        return;
      }
      overlay2.style.width = "0";
    });
  });

  observer2.observe(document.querySelector(".cargame"));

  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        overlay4.style.width = "100%";
        overlay4.style.left = "0";
        return;
      }
      overlay4.style.width = "0";
      overlay4.style.left = "100%";
    });
  });

  observer4.observe(document.querySelector(".zeit"));
}

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

  phoneBtn.onclick = () => {
    if (ancho <= 600) {
      location.href = "tel:+526141903556";
    } else {
      location.href = "https://api.whatsapp.com/send?phone=+526141903556";
    }
  };

  for (var i = 0; i < contactBtns.length; i++) {
    contactBtns[i].onclick = () => {
      location.href = "https://calendly.com/arcadia-almacenadoras/30min";
    };
  }
};
