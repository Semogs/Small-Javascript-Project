const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let iframe = document.getElementById('iframe');
const url1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239992.7748046082!2d28.87098185276725!3d41.006209325287045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2s%C4%B0stanbul%2C%20Turkey!5e0!3m2!1sen!2sil!4v1629297090602!5m2!1sen!2sil"
const url2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74093065849!2d34.72720513951928!3d32.08805767576411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1629297976335!5m2!1sen!2sil"
const url3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43556854007!2d-118.69193128882294!3d34.020730494168454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sil!4v1629298113700!5m2!1sen!2sil"
const url4 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662934.3552303594!2d138.64846094372376!3d35.50628940346834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sil!4v1629298161526!5m2!1sen!2sil"
const urls = [url1, url2, url3, url4]

let currentlySelected = 0;

nextBtn.addEventListener('click', function () {
    currentlySelected++
    iframe.src = urls[currentlySelected]
    prevBtn.disabled = false

    if (urls.length === currentlySelected + 1) {
        nextBtn.disabled = true
    }

})

prevBtn.addEventListener('click', function () {
    currentlySelected--
    iframe.src = urls[currentlySelected]
    nextBtn.disabled = false

    if (currentlySelected === 0) {
        prevBtn.disabled = true
    }

})