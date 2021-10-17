
var header = document.getElementById ('header');
var mobileMenu = document.querySelector ('.mobile-menu-btn');
var headerHeight = header.clientHeight;

// đóng mở mobile menu
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

// tự động đóng khi chọn menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null
        }
    }
    

}


// on-off MODAL
const getBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')


function showBuyTickets() {
    modal.classList.add('open')
}

function hideBuyTickets() {
    modal.classList.remove('open')
}

const getBtn = getBtns.forEach(e => {
    e.addEventListener('click', showBuyTickets)
});

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', e => {
    e.stopPropagation()
})



