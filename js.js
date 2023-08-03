document.addEventListener("DOMContentLoaded" , function(){
    var button = document.getElementsByClassName("button");
    var content = document.getElementsByClassName("content");
    for (let index = 0; index < button.length; index++) {
        button[index].onclick = function(){
            for (let k = 0; k < button.length; k++) {
                button[k].classList.remove("white");
            }
            button[index].classList.toggle("white");
            var noidunghienra = button[index].getAttribute("data-hienlen");
            var phantuhienra = document.getElementById(noidunghienra);
            for (let k = 0; k< content.length; k++) {
                content[k].classList.remove("ra");
            }
            phantuhienra.classList.toggle("ra");
        }
    }
} , false);