document.addEventListener("DOMContentLoaded", function() {

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

});