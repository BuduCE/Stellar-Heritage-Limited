let open = document.getElementById('open');
let close = document.getElementById('close');
let dis = document.getElementById('links')

const openHamburger = () => {
    close.style.display = "block";
    dis.style.display = "flex";
    open.style.display."none";
}
const closeHamburger = () => {
    close.style.display.none;
    dis.style.display.none;
    open.style.display.block;
}