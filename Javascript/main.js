window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").classList.add("sticky");
    } else {
        document.querySelector("header").classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Lägg till en klickhändelse för alla länkar i navigationsmenyn
    document.querySelectorAll('nav a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Hämta målet (sektionen) från href-attributet
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Hämta höjden av den sticky navbaren
                const navbarHeight = document.querySelector('nav').offsetHeight;

                // Räkna ut den nya scrollpositionen för att korrekt visa sektionen
                const offsetTop = targetElement.offsetTop - navbarHeight + 1; // Lägg till 1 för att hantera avrundningsfrågor

                // Rulla till den nya positionen med en mjuk övergång
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                document.querySelector('.navbar-toggler').click();
            }
        });
    });

    // Lägg till en scrollhändelse för att markera den aktiva länken
    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");

        sections.forEach(function (section) {
            if (isElementInViewport(section)) {
                document.querySelectorAll("nav a.nav-link").forEach(function (link) {
                    link.classList.remove("active");
                });

                const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add("active");
                }
            }
        });
    });

    // Hjälpfunktion för att kontrollera om ett element är synligt i fönstret
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

// Lägg till en händelselyssnare för readMoreLink om elementet existerar
for (let i = 1; i <= 8; i++) {
    const readMoreLink = document.getElementById(`readMoreLink${i}`);
    const collapseElement = document.getElementById(`collapse${i}`); // Unikt ID för varje collapseElement
    if (readMoreLink && collapseElement) {
        readMoreLink.addEventListener('click', function () {
            var ariaExpanded = collapseElement.getAttribute('aria-expanded');

            if (ariaExpanded === 'true') {
                // Ändra texten till "Läs mer" om aria-expanded är true
                readMoreLink.innerText = 'Läs mer';
                document.getElementById(`ij-card${i}`).classList.remove('card-collapsed'); // Ta bort klassen
                collapseElement.setAttribute('aria-expanded', 'false'); // Uppdatera attributet
            } else {
                // Annars ändra texten till "Läs mindre"
                readMoreLink.innerText = 'Läs mindre';
                document.getElementById(`ij-card${i}`).classList.add('card-collapsed'); // Lägg till klassen
                collapseElement.setAttribute('aria-expanded', 'true'); // Uppdatera attributet
            }
        });
    }
}
    // Lägg till en klickhändelse för kortlänkarna under #gridSection
    document.querySelectorAll('.idatest a.link').forEach(cardLink => {
        cardLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Hämta höjden av den sticky navbaren
                const navbarHeight = document.querySelector('nav').offsetHeight;

                // Räkna ut den nya scrollpositionen för att korrekt visa sektionen
                const offsetTop = targetElement.offsetTop - navbarHeight + 1;

                // Rulla till den nya positionen med en mjuk övergång
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



