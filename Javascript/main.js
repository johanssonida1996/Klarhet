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

document.addEventListener("DOMContentLoaded", function () {
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

                // Räkna ut den nya scrollpositionen för att korrekt visa sektionen direkt under navbaren
                const offsetTop = targetElement.offsetTop - navbarHeight;

                // Rulla till den nya positionen med en mjuk övergång
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close the mobile navigation menu
                document.querySelector('.navbar-toggler').click();
            }
        });
    });

    // Lägg till en scrollhändelse för att markera den aktiva länken och göra navbaren sticky
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

        // Hämta navbarelementet
        const navbar = document.querySelector("header");

        // Om scrollpositionen är större än 80, lägg till 'sticky' klassen, annars ta bort den
        if (window.scrollY > 80) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
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
});



