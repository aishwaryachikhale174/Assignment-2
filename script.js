
const progress = document.getElementById('progress');
const nextBtn = document.querySelector('.nextBtn');
const submitBtn = document.getElementById('submitBtn');
const screens = document.querySelectorAll('.formScreen');
const successMessage = document.getElementById('successMessage');
const prevBtn = document.querySelector('.prevBtn');
let currentScreen = 0;
let isSecondScreenFilled = false;

function updateProgressBar() {
    const totalScreens = screens.length;
    const progressPercentage = currentScreen * (100 / totalScreens); // Adjusted calculation
    progress.style.width = `${progressPercentage}%`;

    if (currentScreen === totalScreens && isSecondScreenFilled) {
        progress.style.width = '100%';
        successMessage.style.display = 'block'; // Show success message when progress bar is 100%
    } else {
        successMessage.style.display = 'none'; // Hide message if progress bar is not 100%
    }
}

prevBtn.addEventListener('click', () => { // Added event listener for the previous button
    if (currentScreen > 0) {
        currentScreen--;
        showScreen(currentScreen);
    }
});
function showScreen(screenIndex) {
    screens.forEach((screen, index) => {
        if (index === screenIndex) {
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });
    updateProgressBar();
}

nextBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name').value.trim();
    const licenseType = document.querySelector('input[name="licenseType"]:checked');
    
    if (nameInput !== '' && licenseType !== null) {
        currentScreen++;
        showScreen(currentScreen);
    } else {
        alert('Please fill in all fields.');
    }
});

submitBtn.addEventListener('click', () => {
    const issuedPlace = document.getElementById('issuedPlace').value.trim();
    const issuedYear = document.getElementById('issuedYear').value;
    const expiredYear = document.getElementById('expiredYear').value;

    if (issuedPlace !== '' && issuedYear !== '' && expiredYear !== '') {
        isSecondScreenFilled = true;
        currentScreen++;
        showScreen(currentScreen);
    } else {
        alert('Please fill in all fields.');
    }
});

showScreen(currentScreen);




