
var productContainer=document.querySelectorAll('.product-container');
var nxtBtn=document.querySelectorAll( '.next-btn');
var preBtn=document.querySelectorAll( '.pre-btn');


productContainer.forEach((item,i)=>{
    var contDimensions=item.getBoundingClientRect();
    var contwidth=contDimensions.width;
    nxtBtn[i].addEventListener("click",()=>{
        item.scrollLeft +=contwidth;
        
    })
    preBtn[i].addEventListener('click',()=>{
       item.scrollLeft -=contwidth;
    })
    
})