
let bars = document.querySelector(".bars");
let ul = document.querySelector("ul");
let nav = document.querySelector("nav");
let logo = document.querySelector('#logo');
let checked = true;
(function responsivity(){
if(window.innerWidth <= 900 ){
    ul.style.display = "none";
}else{
    ul.style.display = "none";
}
})
// 
bar.addEventListener('click',()=>{
    if(checked){
        
        ul.style.display = "flex";
        checked = false;
        nav.style.justifyContent = "space-evenly"
    }else{
        logo.style.display = 'block';
        ul.style.display = "none";
        checked = true;
        nav.style.justifyContent = "space-between"
        }
        
    }
)
