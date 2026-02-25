//gagames start for kaplay
kaplay({
  width:600,
height:600,
crisp:true,
letterbox:true,
stretch:true
})
scene("loadgame",()=>{
setBackground(0,0,0)
loadSprite("kaplay","https://image2url.com/r2/default/images/1772056803247-6cfb2277-0791-4e76-8ce9-d5bee05420dd.png")
loadSprite("ga","https://image2url.com/r2/default/images/1772058295528-ccb9ac04-b3b6-4e72-b32f-01b373fa06fc.png")

add([
sprite("ga"),
anchor("center"),
pos(150,150)
])
})
go("loadgame")
