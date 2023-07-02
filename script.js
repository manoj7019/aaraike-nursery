function changeHome() {
    let homeIcon = document.getElementById('homeIcon');
    if(homeIcon.src.match("homee")) {
        homeIcon.src = 'images/home.png';
        return;
    } else {
        homeIcon.src = 'images/home1.png';
    }
    let pinIcon = document.getElementById('pinIcon');
    let grapesIcon = document.getElementById('grapesIcon');
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    let shovelIcon = document.getElementById('shovelIcon');
    shovelIcon.src = 'images/shovel.png';
    pinIcon.src = 'images/pin.png';
    grapesIcon.src = 'images/grapes.png';
    phoneCallIcon.src = 'images/phoneCall.png';
}

function changeShovel() {
    let shovelIcon = document.getElementById('shovelIcon');
    if(shovelIcon.src.match("shovellll")) {
        shovelIcon.src = 'images/shovel.png';
        return;
    } else {
        shovelIcon.src = 'images/shovel1.png';
    }
    let pinIcon = document.getElementById('pinIcon');
    let grapesIcon = document.getElementById('grapesIcon');
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    homeIcon.src = 'images/home.png';
    pinIcon.src = 'images/pin.png';
    grapesIcon.src = 'images/grapes.png';
    phoneCallIcon.src = 'images/phoneCall.png';
}

function changePin() {
    let pinIcon = document.getElementById('pinIcon');
    if(pinIcon.src.match("pinny")) {
        pinIcon.src = 'images/pin.png';
        return;
    } else {
        pinIcon.src = 'images/pin1.png';
    }
    let homeIcon = document.getElementById('homeIcon');
    let grapesIcon = document.getElementById('grapesIcon');
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    let shovelIcon = document.getElementById('shovelIcon');
    shovelIcon.src = 'images/shovel.png';
    homeIcon.src = 'images/home.png';
    grapesIcon.src = 'images/grapes.png';
    phoneCallIcon.src = 'images/phoneCall.png'
}

function changeGrapes() {
    let grapesIcon = document.getElementById('grapesIcon');
    if(grapesIcon.src.match("grapeee")) {
        grapesIcon.src = 'images/grapes.png';
    } else {
        grapesIcon.src = 'images/grapes1.png';
    }
    let homeIcon = document.getElementById('homeIcon');
    let pinIcon = document.getElementById('pinIcon');
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    let shovelIcon = document.getElementById('shovelIcon');
    shovelIcon.src = 'images/shovel.png';
    homeIcon.src = 'images/home.png';
    pinIcon.src = 'images/pin.png';
    phoneCallIcon.src = 'images/phoneCall.png'
}

function changePhoneCall() {
    let phoneCallIcon = document.getElementById('phoneCallIcon');
    if(phoneCallIcon.src.match("phoneee")) {
        phoneCallIcon.src = 'images/phoneCall.png';
    } else {
        phoneCallIcon.src = 'images/phoneCall1.png';
    }
    let homeIcon = document.getElementById('homeIcon');
    let grapesIcon = document.getElementById('grapesIcon');
    let pinIcon = document.getElementById('pinIcon');
    let shovelIcon = document.getElementById('shovelIcon');
    shovelIcon.src = 'images/shovel.png';
    homeIcon.src = 'images/home.png';
    grapesIcon.src = 'images/grapes.png';
    pinIcon.src = 'images/pin.png'
}


