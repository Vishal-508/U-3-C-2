// Add the coffee to local storage with key "coffee"
async function getData(){
    let url="https://masai-mock-api.herokuapp.com/coffee/menu"
    let res= await fetch(url);
    let data= await res.json();
   return data.menu.data;
}
async function append(){
   let data=await getData();
   let menu=document.getElementById("menu");

    data.forEach(function (ele,index){
        let card=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let title=document.createElement("h2");
        title.innerText=ele.title;
        let price=document.createElement("h3");
        price.innerText=ele.price;
        let cartbtn=document.createElement("button");
        cartbtn.setAttribute("id","add_to_bucket");
        cartbtn.innerText="Add To Bucket";
        cartbtn.addEventListener("click",function(){
            addtocart(ele);
        })

        card.append(img,title,price,cartbtn);
        menu.append(card);
    });
}
append();
// addtocart function 

function addtocart(ele){
    let cartdata=JSON.parse(localStorage.getItem("coffee"))||[];
    let obj={};
    obj.img=ele.image;
    obj.title=ele.title;
    obj.price=ele.price;
    cartdata.push(obj);
    localStorage.setItem("coffee",JSON.stringify(cartdata));
    count();

}
function count(){
    let data=JSON.parse(localStorage.getItem("coffee"))||[];
    
    console.log(data);
    let counting=document.getElementById("coffee_count");
    counting.innerText=data.length;
}
count()