let button=document.getElementsByClassName("button")[0]
const socket=io('wss://prickle-bloom-fiber.glitch.me/')

button.addEventListener("click",()=>{
  let tempMember=document.getElementsByClassName("input")[0].value
  socket.emit("newMember",String(tempMember))
})

