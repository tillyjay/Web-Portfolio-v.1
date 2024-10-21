const md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
    console.log('This is a mobile device.');
} else {
    console.log('This is a desktop device.');
}
