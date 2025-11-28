(function () {

    function ready(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    }

    ready(function () {

        // MENU MOBILE
        const hamburger = document.getElementById("hamburgerButton");
        const mobileMenu = document.getElementById("mobileMenu");
        const closeBtn = document.getElementById("closeButton");

        function openMenu() {
            mobileMenu.classList.add("open");
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            mobileMenu.classList.remove("open");
            document.body.style.overflow = "";
        }

        if (hamburger) hamburger.addEventListener("click", openMenu);
        if (closeBtn) closeBtn.addEventListener("click", closeMenu);

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
                closeMenu();
            }
        });

        // CARROSSEL
        const slider = document.querySelectorAll('.slider');
        const btnPrev = document.getElementById('prev-button');
        const btnNext = document.getElementById('next-button');
        let currentSlide = 0;

        function hideSlider() {
            slider.forEach(item => item.classList.remove('on'));
        }

        function showSlider() {
            slider[currentSlide].classList.add('on');
        }

        function nextSlider() {
            hideSlider();
            currentSlide = (currentSlide === slider.length - 1) ? 0 : currentSlide + 1;
            showSlider();
        }

        function prevSlider() {
            hideSlider();
            currentSlide = (currentSlide === 0) ? slider.length - 1 : currentSlide - 1;
            showSlider();
        }

        btnNext.addEventListener('click', nextSlider);
        btnPrev.addEventListener('click', prevSlider);

    });

})();
