var arr  = [
    {
        dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D", 
        story : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww", 
        story : "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww", 
        story : "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww", 
        story : "https://plus.unsplash.com/premium_photo-1664867432853-4b786b5ada37?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGVsfGVufDB8fDB8fHww"
    },
] 

var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach( function(elem,idx){
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

storiyan.innerHTML = clutter; 

storiyan.addEventListener("click",function(dets){
 document.querySelector("#full-screen").style.display = "block"
 document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})` 

 setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
 }, 3000)
}) 