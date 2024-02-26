
//Mail to newsletter
// document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Förhindra standardbeteendet för formuläret att skickas

//     // Hämta e-postadressen från formuläret
//     var email = document.getElementById("email").value;

//     // Skicka e-post till din e-postadress
//     sendEmail(email);

//     // Visa bekräftelsemeddelandet
//     document.getElementById("confirmationMessage").style.display = "block";

//     // Töm formulärfältet
//     document.getElementById("email").value = "";
// });

// function sendEmail(email) {
//     // Skapa en mailto-länk för att skicka e-post till din e-postadress
//     var mailtoLink = "mailto:lillida_96@hotmail.com?subject=Prenumeration på nyhetsbrev&body=Denna person vill prenumerera på ert nyhetsbrev. E-postadress: " + email;

//     // Öppna e-postklienten med mailto-länken
//     window.location.href = mailtoLink;

//     // Alternativt kan du använda AJAX för att skicka e-post via en server och inte öppna användarens e-postklient.
//     // Det skulle kräva serverkod (t.ex. med Node.js) för att hantera e-postskickandet.
// }

document.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
  
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', (event) => {
            // Get the target section from href attribute
            const targetSectionId = responsiveNavItem.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                // Calculate the offset considering padding
                let offset;
                if (window.scrollY === 0) {
                    // If the navbar is in the top position, use the full height (96px)
                    if (window.innerWidth <= 996) {
                        offset = targetSection.offsetTop - document.getElementById('mainNav').offsetHeight + 248;
                    }
                    else{
                        let offsetStart = targetSection.offsetTop - document.getElementById('mainNav').offsetHeight;
                        offset = offsetStart + 14;
                    }
                } else {
                    if (window.innerWidth <= 996) {
                        offset = targetSection.offsetTop - document.getElementById('mainNav').offsetHeight + 248;
                    }
                    else{
                        offset = targetSection.offsetTop - document.getElementById('mainNav').offsetHeight;
                    }
                  
                }
    
                // Wait for a short delay before scrolling
                setTimeout(() => {
                    // Scroll to the target section with offset
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                    // Close the navbar if it's open
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                }, 10); // Adjust the delay time if needed
            }
        });
    });
    

        // Function to handle scrolling to target section
        function scrollToSection(targetSectionId) {
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                // Calculate the offset considering padding
                let offset = targetSection.offsetTop - document.getElementById('mainNav').offsetHeight;
                // Check if the target section ID contains 'ij-card' and adjust offset
                if (targetSectionId.includes('ij-card')) {
                    offset -= 40; // Add 60px for '#ij-card' sections
                }
                // Scroll to the target section with offset
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        }
    
        // Handle clicks on all links on the page
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetSectionId = anchor.getAttribute('href').slice(1);
                scrollToSection(targetSectionId);
            });
        });

});
