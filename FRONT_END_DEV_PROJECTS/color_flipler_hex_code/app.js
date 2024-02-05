let a =document.querySelector('body')
let c = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
function change()
{
    let d ="#"
    for(i=0;i<6;i++)
    {
        d+=random()
    }
    a.style.backgroundColor=d
    document.getElementById("ovalue").innerHTML = d

}
function random()
{
    let e = Math.floor(Math.random()*16)
    return c[e]
}

