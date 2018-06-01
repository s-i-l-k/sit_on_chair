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

    /*dropdown-list*/

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

    /*choose dropdown-list elements*/

    var dropdownList = document.querySelectorAll(".list_panel li");
    console.log(dropdownList);

    for(var i=0; i<dropdownList.length; i++) {
        /*change color*/
        dropdownList[i].addEventListener("mouseover", function () {
            this.style.color = "#29ba9f"
        });
    }

    for(var i=0; i<dropdownList.length; i++) {
        /*change color*/
        dropdownList[i].addEventListener("mouseout", function () {
            this.style.color = "#585858"
        });
    }

    /*add to cart*/

    var leftPanel = document.querySelector(".panel_left");
    var children = leftPanel.children;
    var uls = document.querySelectorAll(".list_panel");
    var title = uls[0];
    var titleChildren = title.children;
    var color = uls[1];
    var colorChildren = color.children;
    var pattern = uls[2];
    var patternChildren = pattern.children;

    for(var i=0; i<titleChildren.length; i++) {

        titleChildren[i].addEventListener("click", function () {
            children[0].innerText = this.innerText;
            this.parentElement.classList.remove("visible");
        });
    }

    for(var i=0; i<colorChildren.length; i++) {

        colorChildren[i].addEventListener("click", function () {
            children[1].innerText = this.innerText;
            this.parentElement.classList.remove("visible");
        });
    }

    for(var i=0; i<patternChildren.length; i++) {

        patternChildren[i].addEventListener("click", function () {
            children[2].innerText = this.innerText;
            this.parentElement.classList.remove("visible");
        });
    }

});