// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from the href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio filter functionality
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
        const galleryItems = document.querySelectorAll('.gallery_product');

        galleryItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
            } else {
                if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Highlight active navigation link on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");  // All the sections on the page
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");  // All the navbar links
  
    // Function to update active link based on the section currently in view
    const updateActiveLink = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;  // Get the top position of the section
        const sectionHeight = section.offsetHeight;  // Get the height of the section
  
        // If the section is in view (within the scroll window)
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");  // Get the id of the section currently in view
        }
      });
  
      // Loop through all nav links and add the 'active' class to the correct one
      navLinks.forEach((link) => {
        link.classList.remove("active");  // Remove 'active' class from all links
        if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active");  // Add 'active' class to the link corresponding to the section in view
        }
      });
    };
  
    // Call updateActiveLink when the page is scrolled
    window.addEventListener("scroll", updateActiveLink);
  
    // Call updateActiveLink on page load to ensure correct active link if the page is loaded at a specific section
    updateActiveLink();
  });
  