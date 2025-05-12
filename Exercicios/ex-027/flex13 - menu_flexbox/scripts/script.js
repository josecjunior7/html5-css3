function changeWid() {
    if (window.innerWidth >= 564) {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}


function clickMenu() {
    if (nav.style.display == 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
}