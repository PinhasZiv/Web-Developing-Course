/* Pinhas Ziv 315709139, Alex Chen 312286545 */


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

// var progress = $('.bar');

// for (var j = 0; j < progress.length; j++){
//     console.log("for loop")
//   progress[j].addEventListener('mouseover', animateBar)
//     console.log(progress[j].innerHTML)
// }
//
// let java = document.getElementById('70');
// let cpp = document.getElementById('50');
// let assembly = document.getElementById('40');
// let mhtml = document.getElementById('30');
//
// java.addEventListener("mouseover", animateBar)
// cpp.addEventListener("mouseover", animateBar)
// assembly.addEventListener("mouseover", animateBar)
// mhtml.addEventListener("mouseover", animateBar)

var i = 0;

function animateBar() {
    console.log("in animateBar")
    if (i == 0) {
        i = 1;
        var elem = document.getElementsByClassName('bar')
        var width = 10;
        var call = setInterval(frame, 20);

        function frame() {
            if (width >= 60) {
                clearInterval(call);
                i = 0;
            } else {
                // console.log(elem[j].id)
                width++;
                elem[0].innerHTML = width + "%";
                elem[0].style.width = width + "%";
                elem[1].innerHTML = width + "%";
                elem[1].style.width = width + "%";
                elem[2].innerHTML = width + "%";
                elem[2].style.width = width + "%";
                elem[3].innerHTML = width + "%";
                elem[3].style.width = width + "%";

            }
        }

    }
}

function countChars(text) {
    console.log("in countChars")
    var max = 200
    text.onkeyup = () => {
        console.log("in onKeyUp")
        var count = text.value.length;
        count = max - count;
        var charRemain = document.getElementById('chars');
        charRemain.innerHTML = count + " chars remaining";
    };

}

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

/*
var i = 0;

function showProgress() {
    if (i == 0) {
        i = 1;
        let elem = document.getElementsByClassName("progress-bar");
        let width = 1;
        let id = setInterval(frame, 10);

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
}*/
