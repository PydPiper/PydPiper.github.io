// img group index for preset 10 groups
var slideIndex = [0,0,0,0,0,0,0,0,0,0];

function showDivs(n,group) {
    var divs_SlideImg = document.querySelectorAll('.group' + group + ".slideimg");
    divs_SlideImg[slideIndex[group]].style.display = "none";
    if (n + slideIndex[group] >= divs_SlideImg.length) {
        slideIndex[group] = 0;
    }
    else if (n + slideIndex[group] < 0) {
        slideIndex[group] = divs_SlideImg.length-1;
    }
    else {
        slideIndex[group] += n;
    };
    divs_SlideImg[slideIndex[group]].style.display = "block";
};
