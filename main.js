// active Nav bar
let nav = document.querySelector(".navigation-wrap");
window.onscroll= function(){
    if(document.documentElement.scrollTop >20 ){
        nav.classList.add("scroll-on");
    }else {
        nav.classList.remove("scroll-on");
    }
}
//  hide nav
  let navBar = document.querySelector('.nav-link');
  let navCollapse = document.querySelector('navbar-collapse.collapse');
  navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })

  });

// Counter Section
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id), 
        current = start,
        range = end - start,
        increment = end > start ? 1:-1,
        step = Math . abs (Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent =  current;
            if(current== end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0 ,1 ,2000);
    counter("count2", 0 ,7 ,3000);
    counter("count3", 100 ,1000 ,3000);
    counter("count4", 20 ,200 , 3000);
    counter("count5", 0 ,2 ,2000);
    counter("count6", 0 ,1 ,5000);
    
})

