const openHamburger = () => {
    var open = document.getElementById('open');
    var close = document.getElementById('close');
    var dis = document.getElementById('links')
    if(dis.style.display === 'flex'){
        close.style.display = "no";
        dis.style.display = "flex";
        open.style.display = "none";
    }
    // else {
    //     close.style.display = "block";
    //     dis.style.display = "flex";
    //     open.style.display = "none";
    // }
}



// const closeHamburger = () => {
//     close.style.display = "none";
//     dis.style.display = "none";
//     open.style.display = "block";
// }