const next=document.getElementById("next")
const prev=document.getElementById("prev")
const circles=document.querySelectorAll(".circle")
let activeClass=1
next.addEventListener('click' ()=>{
activeClass++
update();
})

prev.addEventListener('click',()=>{
activeClass--
update()		
})

function update() {
circles.forEach((circle, idx) => {	
if(idx < activeClass) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }	
})
prev.disabled = activeClass === 1;
next.disabled = activeClass === circles.length;
}	
	