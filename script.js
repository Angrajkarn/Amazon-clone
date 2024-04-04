document.addEventListener("DOMContentLoaded", function() {
    
    var accessLocationLink = document.getElementById("access-location");
    accessLocationLink.addEventListener("click", function(event) {
        event.preventDefault();
       
        var currentLocation = "Your Location";

        document.getElementById("location-heading").textContent = "Update Location: " + currentLocation;
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("account-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
let slideIndex = 0;

function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
    const selectedLanguage = document.getElementById("selectedLanguage");
    const languageOptions = document.getElementById("languageOptions");
    const selectedText = document.querySelector(".selected-text");
    const selectedFlag = document.querySelector(".selected-flag");

    // Show/hide language options when clicking on the selected language
    selectedLanguage.addEventListener("click", function() {
        languageOptions.style.display = (languageOptions.style.display === "block") ? "none" : "block";
    });

    // Set selected language and flag when clicking on a language option
    languageOptions.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            selectedText.textContent = e.target.textContent;
            selectedFlag.innerHTML = e.target.dataset.flag;
            languageOptions.style.display = "none";
            // You can perform actions here based on the selected language
            console.log("Selected language:", e.target.dataset.lang);
        }
    });
});

document.addEventListener("DOMContentLoaded",function(){
    var scrollToTopBtn=document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll",function(){
        if(window.pageYOffset>1){
            scrollToTopBtn.style.display="block";
        }else{
            scrollToTopBtn.style.display="none";
        }
    });
    scrollToTopBtn.addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
})

// let slideIndex1 = 0;
// showSlides();

// function plusSlides(n) {
//   showSlides(slideIndex1 += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex1 = n);
// }

// function showSlides() {
//   let i;
//   const slides1 = document.getElementsByClassName("slides1");
//   if (slideIndex1 >= slides1.length) {slideIndex1 = 0}
//   if (slideIndex1 < 0) {slideIndex1 = slides1.length - 1}
//   for (i = 0; i < slides1.length; i++) {
//       slides1[i].style.display = "flex";
//   }
//   slides1[slideIndex1].style.display = "block";
// }