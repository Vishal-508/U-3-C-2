// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucket_data=JSON.parse(localStorage.getItem("coffee"))||[];
getData(bucket_data);
function getData(data){
    data.forEach(function (ele,index){
        let bucket=document.getElementById("bucket");
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.img;
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let price=document.createElement("h3");
        price.innerText=ele.price;
        let rem=document.createElement("button");
        rem.setAttribute("id","remove_coffee");
        rem.innerText="remove";
        rem.addEventListener("click",function(){
            remove(ele,index);
        })
        div.append(img,title,price,rem);
        bucket.append(div);
    })
}
// remove function starts here
function remove(index){
    let bucket_data=JSON.parse(localStorage.getItem("coffee"))||[];
   bucket_data.splice(index,1)
       localStorage.setItem("coffee",JSON.stringify(bucket_data));
       total()
    window.location.reload();

}
// total function
function total(){
    let bucket_data=JSON.parse(localStorage.getItem("coffee"))||[];
    var count=0;
    let total=document.getElementById("total_amount");
    
    bucket_data.forEach(function(ele){
        count+=Number(ele.price);
    })
    total.innerText=count;
}
total()