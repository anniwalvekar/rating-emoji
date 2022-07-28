const starE1 = document.querySelectorAll(".fa-star");

const emojiEl = document.querySelectorAll(".fa-regular");

const colorsArray = ["red","orange","lightblue","lightgreen","green"];
updateRating(0);
// when refresh the page emoji color change without click on stars indexvalue is 0 

starE1.forEach((starE1, index)=>{
    starE1.addEventListener("click", ()=> {
       updateRating(index)
    });
});

function updateRating(index){
    starE1.forEach((starE1, idx)=>{
        if (idx < index + 1){
          starE1.classList.add("active");
        }else{
           starE1.classList.remove("active"); 
        }
    });
    emojiEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        // index 1st start value is 0 
     emojiEl.style.color = colorsArray[index]
    });
}