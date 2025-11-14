const items=document.querySelectorAll(".fade-in")
const observer=new IntersectionObserver(e=>{
  e.forEach(i=>{
    if(i.isIntersecting){
      i.target.classList.add("show")
    }
  })
},{threshold:.2})

items.forEach(i=>observer.observe(i))
