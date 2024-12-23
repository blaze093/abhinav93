function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.getElementById('menuButton');
    mobileMenu.classList.toggle('active');
    menuButton.classList.toggle('open');
}
        const nameElement = document.getElementById("typingName");
        const nameText = "Abhinav";
        let index = 0;

        function typeEffect() {
            if (index < nameText.length) {
                nameElement.textContent += nameText[index];
                index++;
                setTimeout(typeEffect, 150);
            } else {
                setTimeout(() => {
                    nameElement.textContent = "";
                    index = 0;
                    typeEffect();
                }, 2000);
            }
        }

        typeEffect();