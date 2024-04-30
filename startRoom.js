alert("WELCOME TO SSP's Multiplayer World. This is BETA Stage and Dev is aware of the following problems: 1) DONT APPOINT YOURSELF AS PRESIDENT 2) If YOU GET DISCONNECTED CLOSE BOTH THE TABS AND ENTER AGAIN 3) IF YOU FACE ANY DELAY IN EITHER ANIMATION OR DECISION BLURS, Inform Dev. 4) MAKE SURE TO KEEP BOTH TABS RUNNING DURING THE ENTIRE ROUND 6) WHEN ROUND ENDS CLOSE BOTH TABS AND JOIN ROOM AGAIN 7) HOPE TESTING GOES WELL HAVE A GALA TIME Njoy! 8) KILL PLAYER SCREEN IS OCASSIONALLY NOT LOADING DUE TO SERVER LAGS WILL FIX IT. 10) Report any new problem you notice on your OS. ")
let button=document.getElementsByClassName("button")[0]
const socket=io('wss://prickle-bloom-fiber.glitch.me/')

button.addEventListener("click",()=>{
  let tempMember=document.getElementsByClassName("input")[0].value
  socket.emit("newMember",String(tempMember))
})

