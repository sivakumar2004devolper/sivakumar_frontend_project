function change()
{
   let b = document.querySelector('body')
   color_code=`rgb(${random()},${random()},${random()})`
   b.style.backgroundColor=color_code
   document.getElementById("ans").innerHTML=color_code

}
function random()
{
    let a = Math.floor(Math.random()*256)
    return a
}