// var sliderIndex = 1;
// showSlider(sliderIndex);
// function pushSlider(n){
//     showSlider(sliderIndex += n);
// }

// function showSlider(n){
//     let i = 0;
//     let x = document.getElementsByClassName("item");
//     if(n > x.length) sliderIndex = 1;
//     if(n < 1)         sliderIndex = x.length;

//     for(i; i < x.length; i++){
//         x[i].style.display = "none";
//     }

//     x[sliderIndex - 1].style.display = "block";
// }

var bodyWidth = document.body.offsetWidth;
var items = document.getElementsByClassName('item');
var slider = document.getElementById('slider');
var margin = parseInt(slider.style.marginLeft);
var maxMarginL = -slider.offsetWidth;
if(bodyWidth>=1280){
    for(let i = 0; i<items.length; i++){
        items[i].style.width = 1280 + 'px';
    }
    var getSlider = document.getElementById('slider');
    getSlider.style.width = items.length*1280+'px';
}
else{

}
function pushNext(){
    if(margin <= maxMarginL){slider.style.marginLeft = '0px';}
    else{slider.style.marginLeft-=(1280 + 'px');}
    
}