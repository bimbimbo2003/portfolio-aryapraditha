const spot=document.querySelector(".spotlight");document.addEventListener("mousemove",e=>{spot.style.left=e.clientX+"px";spot.style.top=e.clientY+"px"});
const bar=document.querySelector(".progress");window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(scrollY/h*100)+"%"});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
document.querySelectorAll("[data-count]").forEach(el=>{const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){let n=0,t=+el.dataset.count;let q=setInterval(()=>{el.textContent=++n;if(n>=t)clearInterval(q)},120);o.disconnect()}},{threshold:.6});o.observe(el)});
const modal=document.getElementById("modal"),mt=document.getElementById("mtitle"),md=document.getElementById("mdesc"),mtype=document.getElementById("mtype"),ms=document.getElementById("mstack");
document.querySelectorAll(".work").forEach(card=>card.addEventListener("click",()=>{mt.textContent=card.dataset.title;md.textContent=card.dataset.desc;mtype.textContent=card.dataset.type;ms.innerHTML=card.dataset.stack.split(" / ").map(x=>"<span>"+x+"</span>").join("");modal.classList.add("open")}));
document.getElementById("close").onclick=()=>modal.classList.remove("open");document.getElementById("back").onclick=()=>modal.classList.remove("open");modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});
document.querySelectorAll(".work").forEach(c=>{c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.transform=`perspective(800px) rotateX(${-(y/r.height-.5)*4}deg) rotateY(${(x/r.width-.5)*4}deg) translateY(-7px)`});c.addEventListener("mouseleave",()=>c.style.transform="")});
const music=document.getElementById("bgMusic"),musicBtn=document.getElementById("musicToggle");
music.volume=0.23;
musicBtn.addEventListener("click",async()=>{
  if(music.paused){try{await music.play();musicBtn.classList.add("playing");musicBtn.querySelector("b").textContent="ON"}catch(e){}}
  else{music.pause();musicBtn.classList.remove("playing");musicBtn.querySelector("b").textContent="OFF"}
});

const pageGlitch=document.getElementById("pageGlitch");
function triggerGlitch(){pageGlitch.classList.remove("active");void pageGlitch.offsetWidth;pageGlitch.classList.add("active");}
document.querySelectorAll('a').forEach(link=>link.addEventListener('click',triggerGlitch));
document.querySelectorAll('button').forEach(btn=>{if(btn.id!=="musicToggle")btn.addEventListener('click',triggerGlitch)});
