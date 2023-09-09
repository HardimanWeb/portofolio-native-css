document.addEventListener('scroll',()=>{
    var scroll_position =window.scrollY;
    
    if(scroll_position >50){
      document.getElementById("header").style.borderBottomColor= "#89cff0"  
      document.querySelector(".menu-list").style.borderColor= "transparent";

    }else if(scroll_position <50){
        document.getElementById("header").style.borderBottomColor= "transparent";
        document.querySelector(".menu-list").style.borderColor= "transparent";
    }
})


function toggleMenu(){
  const menu = document.querySelector(".menu-list");
  const icon = document.querySelector(".humberger-icon");
menu.style.borderColor= "#89cff0";
  menu.classList.toggle("open");
 icon.classList.toggle("open");
}
