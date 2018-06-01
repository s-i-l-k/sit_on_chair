document.addEventListener("DOMContentLoaded", function() {

    /*dropdown menu*/

    var menu = document.querySelectorAll("nav>ul>li");
    var firstLi = menu[0];

    firstLi.addEventListener("mouseover", function () {
        var drop = this.firstElementChild;
        drop.style.display = "block";
    });

    firstLi.addEventListener("mouseout", function () {
        var drop = this.firstElementChild;
        drop.style.display = "none";
    });

    /*bar show/hide*/

    var boxes = document.querySelectorAll(".boxes > div");

    for(var i=0; i<boxes.length-1; i++) {
        boxes[i].addEventListener("mouseover", function () {
            var bar = this.firstElementChild;
            bar.style.display = "none";

        });
    }

    for(var i=0; i<boxes.length-1; i++) {
        boxes[i].addEventListener("mouseout", function () {
            var bar = this.firstElementChild;
            bar.style.display = "block";

        });
    }

    /*slider*/

    var previous = document.querySelector(".nav");
    var next = document.querySelector(".right");
    var images = document.querySelectorAll(".images ul li");
    var counter = 0;

    images[counter].classList.add("visible");

    previous.addEventListener("click", function () {
        images[counter].classList.remove("visible");
        if(counter === 0) {
            counter = images.length-1;
        } else {
            counter--;
        }
        images[counter].classList.add("visible");

    });

    next.addEventListener("click", function () {
        images[counter].classList.remove("visible");
        if(counter >= images.length-1) {
            counter = 0;
        } else {
            counter++;
        }
        images[counter].classList.add("visible");
    });

    /*calculator*/

    var arrows = document.querySelectorAll(".list_arrow");

    for(var i=0; i<arrows.length; i++) {
        arrows[i].addEventListener("click", function () {
            var drop_menu = this.nextElementSibling;
            if(drop_menu.classList.contains("visible")) {
                drop_menu.classList.remove("visible");
            } else {
                drop_menu.classList.add("visible");
            }

        });
    }
});