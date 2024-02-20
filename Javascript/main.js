let navbar = document.getElementById("navbar");
let navHeight = navbar.offsetHeight;
let homeSection = document.getElementById("home");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let targetId = this.getAttribute('href').substr(1);
        let targetSection = document.getElementById(targetId);
        let targetOffset = targetSection.offsetTop - navHeight; // Justera offset för att inkludera navigationslistens höjd

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    // Hämta avståndet mellan toppen av sidan och toppen av navigationslistens container
    let navbarOffset = navbar.offsetTop;

    // Loopa genom varje sektion och justera paddingen för att undvika att innehållet täcks av den klibbiga navigationslisten
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== "home") { // Kontrollera om sektionen inte är "home"
            if (scrollPos >= section.offsetTop - navHeight) {
                section.style.paddingTop = navHeight + "px";
            } else {
                section.style.paddingTop = "0";
            }
        }
    });

    // Lägg till eller ta bort den klibbiga klassen beroende på scrollpositionen
    if (scrollPos >= navbarOffset && scrollPos > 0) { // Lägg till kontroll för att se till att scrollPos inte är 0
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});