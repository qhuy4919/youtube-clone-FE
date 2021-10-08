function getImageInform (){
    var image_details = document.querySelector(".demo-container img");
    var image_div = document.getElementById("emilia");
    var img_w = image_details.getAttribute("width");
    var img_h = image_details.getAttribute("height");
    var div_w = image_div.offsetWidth;
    var div_h = image_div.offsetHeight;
    var pos_x = image_div.offsetTop;
    var pos_y = image_div.offsetLeft;
    document.getElementById("img_w_h").innerHTML = img_w + "x" + img_h;
    document.getElementById("div_w_h").innerHTML = div_w + "x" + div_h;
    document.getElementById("div_pos").innerHTML = pos_x + "-" + pos_y;
}