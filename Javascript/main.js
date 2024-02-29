//Mail to newsletter
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindra standardbeteendet för formuläret att skickas

    // Hämta e-postadressen från formuläret
    var email = document.getElementById("email").value;

    // Skicka e-post till din e-postadress
    sendEmail(email);

    // Visa bekräftelsemeddelandet
    document.getElementById("confirmationMessage").style.display = "block";

    // Töm formulärfältet
    document.getElementById("email").value = "";
});

function sendEmail(email) {
    // Skapa en mailto-länk för att skicka e-post till din e-postadress
    var mailtoLink = "mailto:info@clearity.nu?subject=Prenumeration på månadsbrev&body=Hej! Jag vill gärna prenumerera på klarhets månadsbrev. Min e-postadress är: " + email;

    // Öppna e-postklienten med mailto-länken
    window.location.href = mailtoLink;

    // Alternativt kan du använda AJAX för att skicka e-post via en server och inte öppna användarens e-postklient.
    // Det skulle kräva serverkod (t.ex. med Node.js) för att hantera e-postskickandet.
}

function clearSessionStorage() {
  sessionStorage.removeItem("scrollToSectionId");
}

window.onload = function () {
  scrollFunction();
  window.onscroll = function () {
    scrollFunction(); // Kör funktionen varje gång användaren scrollar
  };

  var sessionStorageId = sessionStorage.getItem("scrollToSectionId");
  console.log(sessionStorageId);
  if (sessionStorageId !== null) {
    scrollToSection(sessionStorageId);
    window.addEventListener("scroll", clearSessionStorage);
    document.addEventListener("click", clearSessionStorage);
  }
};

function scrollFunction() {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    let offset; // Flytta deklarationen hit
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Handle clicks on all links on the page
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSectionId = anchor.getAttribute("href").slice(1);
      scrollToSection(targetSectionId);
    });
  });

  // // Set margin-top for each section to accommodate the fixed navbar
  const navbarHeight = 82;
  document.querySelectorAll('[id^="section3"]').forEach((section) => {
    section.style.marginTop = `${navbarHeight}px`;
  });

  document.querySelectorAll(".goBack").forEach((link) => {
    link.addEventListener("click", function (event) {
      // Extrahera href-attributet för den klickade länken
      const href = link.getAttribute("href");

      // Om href-attributet finns och innehåller "#ij-card"
      if (href && href.includes("#ij-card")) {
        // Extrahera id:et från href-attributet
        const targetSectionId = href.split("#")[1];

        // Spara id:et i sessionStorage
        sessionStorage.setItem("scrollToSectionId", targetSectionId);

        scrollToSection(targetSectionId);
      }
    });
  });
}

function scrollToSection(targetSectionId) {
  const targetSection = document.getElementById(targetSectionId);
  console.log("är här", targetSection);
  if (targetSection) {
    let offset = targetSection.offsetTop - document.getElementById("mainNav").offsetHeight;
    if (targetSectionId.includes("ij-card")) {
      offset -= 40;
      console.log("är här också");
    }
    // Scroll to the target section with offset
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}
