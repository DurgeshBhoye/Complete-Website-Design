
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    }
    else {
        sideNav.style.right = "-250px";
    }
}



var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});




function hide() {                            // hides Sidebar
    sideNav.style.right = "-250px";
}


function add() {
    document.getElementById("adding").innerHTML += "<br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, necessitatibus? Dolore nostrum culpa nihil porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Blanditiis, error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus, nostrum nulla temporibus debitis voluptatemeum omnis cupiditate suscipit a.";
    // document.getElementById("homereadhide").style.visibility = "hidden";    // hides only content, but occupied space
    document.getElementById("homereadhide").style.display = "none";  // removes the element and remove space oocupied
}

function course() {
    document.getElementById("courseList").innerHTML += "<br><br><h5>Bussiness</h5><p>All about starting new bussiness<br>Rs.599</p><h5  id='bussiness'>Web Developer</h5><p>Complete Web Development Course<br>Rs.1399</p><h5 id='photo'>Photography</h5><p>Includes Photoshop, Canva and other Photography Basics<br>Rs.999</p><h5 id='market'>Marketing</h5><p>Basics of Marketing and Strategies<br>Rs.999</p>";
    // document.getElementById("homereadhide").style.visibility = "hidden";    // hides only content, but occupied space
    document.getElementById("courseBtnHide").style.display = "none";  // removes the element and remove space oocupied
    document.getElementById("bussiness").style.color = "#f67c92";
    document.getElementById("market").style.color = "orange";
    document.getElementById("photo").style.color = "lightblue";
}

let offers = document.getElementById("offers");

function signUpFirst() {
    document.getElementById("offers").innerHTML = "SignUp Alert !";
    // document.getElementById("offers").innerHTML = document.getElementById("signup").innerHTML;
    // offers.style.backgroundColor = "red";
    document.getElementById("offers").style.border = "thick solid lightblue";
    document.getElementById("offers").style.borderRadius = "25%";
    document.getElementById("offers").style.color = "red";
    // document.getElementById("homereadhide").style.visibility = "hidden";    // hides only content, but occupied space
    // document.getElementById("courseBtnHide").style.display = "none";  // removes the element and remove space oocupied
}

function language() {
    document.getElementById("lang").innerHTML = "Spanish";
    document.getElementById("lang").style.border = "2px solid lightpink";
    document.getElementById("lang").style.borderRadius = "10px";

}
