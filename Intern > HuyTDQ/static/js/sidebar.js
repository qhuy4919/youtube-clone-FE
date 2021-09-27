function activate_menu(){
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("page-container").style.margin = "0 0 0 250px";
}

function close_menu(){
    document.getElementById("sidebar").style.left = "-250px"
    document.getElementById("page-container").style.margin = "0";
}