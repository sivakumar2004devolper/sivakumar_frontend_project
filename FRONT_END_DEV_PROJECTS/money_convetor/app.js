function change()
{
    let ivalue = Number(document.getElementById("ivalue").value) 
    let ovalue = document.getElementById("ovalue").value
    let s1 = document.getElementById("s1").value 
    let s2 = document.getElementById("s2").value 
    if(s1=="USD")
    {
        if(s2=="USD")
        {
            document.getElementById("ovalue").value = ivalue
        }
        else if(s2=="INR")
        {
            document.getElementById("ovalue").value = ivalue*82.88
        }
        else if(s2=="AUD")
        {
            document.getElementById("ovalue").value = ivalue*1.51
            
        }
        else if(s2=="CAD")
        {
            document.getElementById("ovalue").value = ivalue*1.34
            
        }
        else if(s2=="JPY")
        {
            document.getElementById("ovalue").value = ivalue*146.49
            
        }
        else if(s2=="RUB")
        {
            document.getElementById("ovalue").value = ivalue*90.56
            
        }
    }
    else if(s1=="INR")
    {
        if(s2=="INR")
        {
            document.getElementById("ovalue").value = ivalue
        }
        else if(s2=="USD")
        {
            document.getElementById("ovalue").value = ivalue*0.012
        }
        else if(s2=="AUD")
        {
            document.getElementById("ovalue").value = ivalue*0.018
            
        }
        else if(s2=="CAD")
        {
            document.getElementById("ovalue").value = ivalue*0.016
            
        }
        else if(s2=="JPY")
        {
            document.getElementById("ovalue").value = ivalue*1.77
            
        }
        else if(s2=="RUB")
        {
            document.getElementById("ovalue").value = ivalue*1.09
            
        }
    }
    else if(s1=="JPY")
    {
        if(s2=="JPY")
        {
            document.getElementById("ovalue").value = ivalue
        }
        else if(s2=="USD")
        {
            document.getElementById("ovalue").value = ivalue*0.0068
        }
        else if(s2=="INR")
        {
            document.getElementById("ovalue").value = ivalue*0.057
            
        }
        else if(s2=="AUD")
        {
            document.getElementById("ovalue").value = ivalue*0.010
            
        }
        else if(s2=="CAD")
        {
            document.getElementById("ovalue").value = ivalue*0.0091
            
        }
        else if(s2=="RUB")
        {
            document.getElementById("ovalue").value = ivalue*0.62
            
        }
    }
    else if(s1=="AUD")
    {
        if(s2=="AUD")
        {
            document.getElementById("ovalue").value = ivalue
        }
        else if(s2=="USD")
        {
            document.getElementById("ovalue").value = ivalue*0.66
        }
        else if(s2=="INR")
        {
            document.getElementById("ovalue").value = ivalue*54.73
            
        }
        else if(s2=="CAD")
        {
            document.getElementById("ovalue").value = ivalue*0.88
            
        }
        else if(s2=="JPY")
        {
            document.getElementById("ovalue").value = ivalue*96.80
            
        }
        else if(s2=="RUB")
        {
            document.getElementById("ovalue").value = ivalue*59.81
            
        }
    }
    else if(s1=="CAD")
    {
        if(s2=="CAD")
        {
            document.getElementById("ovalue").value = ivalue
        }
        else if(s2=="USD")
        {
            document.getElementById("ovalue").value = ivalue*0.75
        }
        else if(s2=="INR")
        {
            document.getElementById("ovalue").value = ivalue*61.96
            
        }
        else if(s2=="AUD")
        {
            document.getElementById("ovalue").value = ivalue*1.13
            
        }
        else if(s2=="JPY")
        {
            document.getElementById("ovalue").value = ivalue*109.53
            
        }
        else if(s2=="RUB")
        {
            document.getElementById("ovalue").value = ivalue*67.70
            
        }
    }
    else if(s1=="RUB")
    {
        if(s2=="RUB")
        {
            document.getElementById("ovalue").value = ivalue
        }
        else if(s2=="USD")
        {
            document.getElementById("ovalue").value = ivalue*0.011
        }
        else if(s2=="INR")
        {
            document.getElementById("ovalue").value = ivalue*0.91
            
        }
        else if(s2=="AUD")
        {
            document.getElementById("ovalue").value = ivalue*0.017
            
        }
        else if(s2=="JPY")
        {
            document.getElementById("ovalue").value = ivalue*1.62
            
        }
        else if(s2=="CAD")
        {
            document.getElementById("ovalue").value = ivalue*0.015
            
        }
    }
}
function clsr()
{
    document.getElementById("ivalue").value =" "
    document.getElementById("ovalue").value = " "
}
