const bgm=document.getElementById("bgm")

// start on click
document.body.addEventListener("click",()=>{
bgm.play()
show("stage2","stage1")
initPuzzle()
},{once:true})

function show(id,hide){
document.getElementById(hide).classList.add("hidden")
document.getElementById(id).classList.remove("hidden")
}

// PUZZLE
function initPuzzle(){
let nums=[1,2,3,4].sort(()=>Math.random()-0.5)
let box=document.getElementById("puzzle")

nums.forEach(n=>{
let d=document.createElement("div")
d.className="tile"
d.textContent=n
d.onclick=()=>swap(d)
box.appendChild(d)
})
}

let first=null
function swap(el){
if(!first){
first=el
}else{
let t=first.textContent
first.textContent=el.textContent
el.textContent=t
first=null
checkWin()
}
}

function checkWin(){
let ok=true
document.querySelectorAll(".tile").forEach((t,i)=>{
if(t.textContent!=i+1) ok=false
})
if(ok){
document.getElementById("status").textContent="Yay berhasil ❤️"
setTimeout(()=>{
show("stage3","stage2")
typing()
},1200)
}
}

// TYPING
function typing(){
let text=`Hai Calon istrikuu...
Aku mungkin belum bisa jadi yang sempurna.
Aku juga belum bisa kasih banyak hal.

Tapi satu hal pasti —
Aku selalu serius sama kamuuuuu.

Aku sayangggggg kamu ❤️
— Calon Suami Kamu`

let i=0
let area=document.getElementById("typing")

function t(){
if(i<text.length){
area.innerHTML+=text.charAt(i)
i++
setTimeout(t,35)
}else{
setTimeout(()=>{
show("stage4","stage3")
slide()
},2000)
}}
t()
}

// SLIDESHOW
let imgs=[
"img/sf1.jpeg","img/am1.jpeg",
"img/sf2.jpeg","img/am2.jpeg",
"img/sf3.jpeg","img/am3.jpeg"
]

function slide(){
let i=0
let el=document.getElementById("slide")
el.src=imgs[0]

let int=setInterval(()=>{
i++
if(i>=imgs.length){
clearInterval(int)
show("stage5","stage4")
counter()
return
}
el.src=imgs[i]
},2000)
}

// COUNTER
function counter(){
let start=new Date("2025-12-23")
let now=new Date()
let days=Math.floor((now-start)/(1000*60*60*24))
document.getElementById("counter").innerHTML=
"Kita sudah bersama <b>"+days+"</b> hari ❤️"
}

// HEART PARTICLES
setInterval(()=>{
let heart=document.createElement("span")
heart.innerHTML="❤"
heart.style.left=Math.random()*100+"vw"
heart.style.animationDuration=(Math.random()*3+3)+"s"
document.getElementById("hearts").appendChild(heart)

setTimeout(()=>heart.remove(),6000)
},300)
