let user = document.getElementById("user")
let ai = document.getElementById("ai")
let res = document.getElementById("res")

function rock()
{
   user.style.background = "url('https://img.freepik.com/premium-vector/vector-cute-stone-cartoon-style_846317-1586.jpg') center/cover" 
   rand()
   if(ai_gen==0)
   {
    res.innerHTML="MATCH_DRAW"
   }
   else if(ai_gen==1)
   {
    res.innerHTML="YOU WIN"
   }
   else
   {
    res.innerHTML="YOU LOST"
   }
}
function paper()
{
    user.style.background ="url('https://www.pnwu.edu/files/2021/04/Class-Notes-01.png')center/cover"
    rand()
   if(ai_gen==0)
   {
    res.innerHTML="YOU WIN"
   }
   else if(ai_gen==1)
   {
    res.innerHTML="MATCH DRAW"
   }
   else
   {
    res.innerHTML="YOU LOST"
   }
}
function scissors()
{
    user.style.background ="url('https://timvandevall.com/wp-content/uploads/scissors.jpg')center/cover"
    rand()
   if(ai_gen==0)
   {
    res.innerHTML="you LOST"
   }
   else if(ai_gen==1)
   {
    res.innerHTML="YOU WIN"
   }
   else
   {
    res.innerHTML="MATCH DRAW"
   }
}
function rand()
{
    ai_gen=Math.floor(Math.random()*3)
    if(ai_gen==0)
    {
        ai.style.background = "url('https://img.freepik.com/premium-vector/vector-cute-stone-cartoon-style_846317-1586.jpg') center/cover" 
    }
    else if(ai_gen==1)
    {
        ai.style.background ="url('https://www.pnwu.edu/files/2021/04/Class-Notes-01.png')center/cover"
    }
    else
    {
        ai.style.background ="url('https://timvandevall.com/wp-content/uploads/scissors.jpg')center/cover"
    }
}