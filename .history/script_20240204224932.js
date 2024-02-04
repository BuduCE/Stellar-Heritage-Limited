const open = document.getElementById('open');
const close = document.getElementById('close');
const dis = document.getElementById('links')

const openHamburger = () => {
    close.style.display.block;
    dis.style.display.flex;
}
const closeHamburger = () => {
    close.style.display.none;
    dis.style.display.none;
    open.style.display
}