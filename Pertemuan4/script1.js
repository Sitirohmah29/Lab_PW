window.onload = function() {
    var today = new Date();
    var time = today.getHours();
    var greeting;

    if (time >= 0 && time < 12) {
        greeting = 'Selamat Pagi!';
    } else if (time >= 12 && time < 18) {
        greeting = 'Selamat Siang!';
    } else {
        greeting = 'Selamat Malam!';
    }

    alert(greeting);
};
