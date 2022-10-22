window.onscroll = function() {
    stickyBtn();
};

let btn = document.querySelector('#top-button');
let sticky = btn.offsetTop;

const stickyBtn = () => {
    if (window.pageYOffset >= sticky) {
        btn.style.display = 'block';
        btn.classList.add('sticky');
    } else {
        btn.classList.remove('sticky');
    }
}