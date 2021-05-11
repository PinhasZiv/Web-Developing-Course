/* Pinhas Ziv 315709139, Alex Chen 312286545 */

/* Show modal */
let myPic = document.getElementById('myPicture');
let myModal = document.getElementById('myPictureModal');
let closeModal = document.getElementsByClassName('close')[0];
let picModal = document.getElementById('imgModal');

myPic.onclick = function () {
    picModal.src = this.src;
    myModal.style.display = 'block';
}

closeModal.onclick = function () {
    myModal.style.display = 'none';
}

/* Animate progress bar */
document.getElementById('java-bar').addEventListener('mouseover', animateBar);
document.getElementById('cpp-bar').addEventListener('mouseover', animateBar);
document.getElementById('assembly-bar').addEventListener('mouseover', animateBar);
document.getElementById('html-bar').addEventListener('mouseover', animateBar);

var i = 0;
function animateBar() {
    if (i == 0) {
        i = 1;
        var elem = this;
        var width = 1;
        var id = setInterval(frame, 5);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

/* Limit and show number of chars in text area */
var freeText = document.getElementById('freeText');
freeText.maxLength = 200;

freeText.addEventListener('input', countChars);
var countChars = document.getElementById('countDown');


function countChars() {
    var max = 200
    freeText.onkeyup = () => {
        var count = freeText.value.length;
        count = max - count;
        var charRemain = document.getElementById('countDown');
        charRemain.innerHTML = count + " chars remaining";
    };
}

/* Check validate form */
function checkRequired() {
    var x = document.forms["contactMeForm"]["fName"].value;
    var y = document.forms["contactMeForm"]["pNumber"].value;
    var z = document.forms["contactMeForm"]["mail"].value;
    var t = document.forms["contactMeForm"]["fText"].value;

    if (x == "" || y == "" || z == "" || t == "") {
        alert("All fields must be filled in!");
        return false;
    }
}

/* Back to top button */
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-btn").style.display = "block";
    } else {
        document.getElementById("scroll-btn").style.display = "none";
    }
};

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}
