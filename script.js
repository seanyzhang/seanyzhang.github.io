let currentPage = 0;
let pages = document.querySelectorAll('.page');
let isScrolling = false;
let ids = {0:'Home', 1:'About', 2:'Skills', 3:'Projects', 4:'Experiences', 5:'Resume'};

document.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    isScrolling = true;
    setTimeout(() => isScrolling = false, 300);

    if (event.deltaY > 0) {
        showPage(currentPage + 1);
    } else {
        showPage(currentPage - 1);
    }
});

function showPage(index) {
    if (index < 0 || index >= pages.length) return; // Prevents out-of-bounds errors

    pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) {
            document.title = ids[i] + ' | Sean\'s Website';
            page.classList.add('active');
        }
    });

    currentPage = index;
}

showPage(currentPage);