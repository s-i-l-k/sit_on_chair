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
            drop_menu.classList.toggle("visible");

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

    var leftPanelChildren = document.querySelector(".panel_left").children;
    var uls = document.querySelectorAll(".list_panel");
    var titleChildren = uls[0].children;
    var colorChildren = uls[1].children;
    var patternChildren = uls[2].children;

    var rightPanelChildren = document.querySelector(".panel_right").children;

    var sum = document.querySelector(".sum");

    function addingPrices() {
        return cartSum = Number(rightPanelChildren[0].innerText) + Number(rightPanelChildren[1].innerText)
            + Number(rightPanelChildren[2].innerText) + Number(rightPanelChildren[3].innerText) + " zł";
    }

    var transport = document.getElementById("transport");


    for(var i=0; i<titleChildren.length; i++) {

        titleChildren[i].addEventListener("click", function () {
            leftPanelChildren[0].innerText = this.innerText;
            this.parentElement.classList.remove("visible");

            if (this.innerText === "Clair") {
                rightPanelChildren[0].innerText = 200;
            } else if (this.innerText === "Margarita") {
                rightPanelChildren[0].innerText = 300;
            } else {
                rightPanelChildren[0].innerText = 400;
            }

            sum.innerText =  addingPrices();

        });
    }

    for(var i=0; i<colorChildren.length; i++) {

        colorChildren[i].addEventListener("click", function () {
            leftPanelChildren[1].innerText = this.innerText;
            this.parentElement.classList.remove("visible");

            if (this.innerText === "Czerwony") {
                rightPanelChildren[1].innerText = 100;
            } else {
                rightPanelChildren[1].innerText = 0;
            }

            sum.innerText =  addingPrices();
        });
    }

    for(var i=0; i<patternChildren.length; i++) {

        patternChildren[i].addEventListener("click", function () {
            leftPanelChildren[2].innerText = this.innerText;
            this.parentElement.classList.remove("visible");

            if (this.innerText === "Tkanina") {
                rightPanelChildren[2].innerText = 0;
            } else {
                rightPanelChildren[2].innerText = 150;
            }

            sum.innerText =  addingPrices();
        });
    }

    transport.addEventListener('click', function () {
        if (this.checked) {
            leftPanelChildren[3].innerText = "Transport";
            rightPanelChildren[3].innerText = Number(transport.dataset.transportPrice);
        } else {
            leftPanelChildren[3].innerText = "";
            rightPanelChildren[3].innerText = "";
        }

        sum.innerText = addingPrices();
    })

});