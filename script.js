function changeHome() {
    let homeIcon = document.getElementById('homeIcon');
    if(homeIcon.src.match("homee")) {
        homeIcon.src = 'images/home00.png';
        return;
    } else {
        homeIcon.src = 'images/home01.png';
    }
    let pinIcon = document.getElementById('pinIcon');
    let grapesIcon = document.getElementById('grapesIcon');
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    let shovelIcon = document.getElementById('shovelIcon');
    shovelIcon.src = 'images/shovel00.png';
    pinIcon.src = 'images/pin.png';
    grapesIcon.src = 'images/grapes00.png';
    phoneCallIcon.src = 'images/phoneCall.png';
}

function changeShovel() {
    let shovelIcon = document.getElementById('shovelIcon');
    if(shovelIcon.src.match("shovellll")) {
        shovelIcon.src = 'images/shovel00.png';
        return;
    } else {
        shovelIcon.src = 'images/shovel01.png';
    }
    let pinIcon = document.getElementById('pinIcon');
    let grapesIcon = document.getElementById('grapesIcon');
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    homeIcon.src = 'images/home00.png';
    pinIcon.src = 'images/pin.png';
    grapesIcon.src = 'images/grapes00.png';
    phoneCallIcon.src = 'images/phoneCall.png';
}