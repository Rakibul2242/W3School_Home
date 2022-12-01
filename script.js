var pageNumber = document.querySelector("#pagenumber span");
var image = ["image/slider.jpg","image/slider2.jpg","image/slider3.jpg"];
var sliderImage = document.querySelector(".slider-image img");
var currentPageNumber = 1;
var caption = ["Caption Text","Caption Two","Caption Three"];
var captionText = document.querySelector(".slider-image h6");
var count = 0;

function next(){
    currentPageNumber++;
    if(currentPageNumber>3){
        currentPageNumber=1;
        pageNumber.innerHTML =(currentPageNumber)
    }
    else{
        pageNumber.innerHTML = (currentPageNumber);
    }
    count++;
    if(count>=image.length){
        count=0;
        sliderImage.src= image[count];
    }
    else{
        sliderImage.src = image[count];
    }
    //caption Text
    if(count>=caption.length){
        count=0;
        captionText.innerHTML= caption[count];
    }
    else{
        captionText.innerHTML= caption[count];
    }

}
function prev(){
    currentPageNumber--;
    if(currentPageNumber<1){
        currentPageNumber=3;
        pageNumber.innerHTML =(currentPageNumber)
    }
    else{
        pageNumber.innerHTML = (currentPageNumber);
    }
    count--;
    if(count<0){
        count=image.length - 1;
        sliderImage.style
        sliderImage.src= image[count];
    }
    else{
        sliderImage.src = image[count];
    }
    if(count<0){
        count=caption.length - 1;
        captionText.style
        captionText.innerHTML= caption[count];
    }
    else{
        captionText.innerHTML= caption[count];
    }

}