let currentPage = 0;
let pages = document.querySelectorAll('.page');
let isScrolling = false;
let ids = {0:'Home', 1:'About', 2:'Skills', 3:'Projects', 4:'Experiences', 5:'Resume'};
let touchStartY, touchEndY;

document.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    isScrolling = true;
    setTimeout(function() {isScrolling = false;}, 300);
    
    if (event.deltaY > 0) {
        showPage(currentPage + 1);
    } else {
        showPage(currentPage - 1);
    }
});

document.addEventListener('touchstart', (event) => {
    touchStartY = event.Touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
    touchEndY = event.changedTouches[0].clientY;
    let swipeDistance = touchStartY - touchEndY;

    if (swipeDistance > 50) {
        showPage(currentPage + 1);
    } else if (swipeDistance < -50) {    
        showPage(currentPage - 1);
    }
});

function showPage(index) {
    if (index < 0 || index >= pages.length) return; // Prevents out-of-bounds errors
    
    if (currentPage != index && currentPage < pages.length && currentPage >= 0) {
        pages[currentPage].classList.remove('active');
    }
    
    pages[index].classList.add('active');
    document.title = ids[index] + ' | Sean\'s Portfolio';
    currentPage = index;
}

showPage(currentPage);