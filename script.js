var messageIndex = 0
const noMessages = [
    "Are you sure",
    "Maybe think again",
    "Pleaseee",
    "Reconsider",
   "Come on ChowChau" ]


const noImage = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamx5M2FrYTQzZWFlaDM3ajloa2lxanEwZnl5bzBtaXQyZnl2ZTZnaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GwskZm1jXg8cDvuZJ6/giphy.gif"
const yesImage ="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBlc3didTY5OHh3dHA4cjdkcDczaTl1ZGswdzg5cWxyZjgzOGYxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n4CZ0c7QjgS9sGAO5A/giphy.gif"


function noButtonPressed (){
    const noButton= document.getElementById("noButton")
    const image= document.getElementById("image2")
    image.src = noImage
    noButton.innerHTML = noMessages[messageIndex]
    messageIndex = messageIndex + 1 
}

function yesButtonPressed (){
    const image= document.getElementById("image2")
    image.src =yesImage

}