



     document.querySelector("#sum_value").innerText=localStorage.getItem("sumvalue");
     var product_array= JSON.parse(localStorage.getItem("product_key"))
      var sum = 0

      // Iterating Data
      nord_product.forEach(function(ele,index){
     var main_div= document.createElement("div")
  
    var photo=document.createElement("img")
    photo.src=ele.image

    var name=document.createElement("p")
    name.innerText=ele.name


  

    var price=document.createElement("p")
    price.innerText=ele.price
     sum=sum+ele.price
     localStorage.setItem("sumvalue",sum)
    var getprice = localStorage.getItem("sumvalue")

    
    //   // delete button&& delete function
   var del=document.createElement("button")
   del.innerText="Delete"
   del.setAttribute("class","delete_btn")
 
   del.addEventListener("click",function(){
   deleteItem(ele,index)
 })

 main_div.append(photo,name,price,del)
 document.querySelector("#cart").append(main_div)

 function deleteItem(ele,index){
  nord_product.splice(index,1)
  localStorage.setItem("product_key",JSON.stringify(product_array))
  window.location.reload();
}
 


})
    






  
   
  
  
 

 
 
  
   
  

