var liczba = 0

function dodaj()
{
    liczba += 1;
    document.getElementById("przycisk").innerHTML = liczba;
    
    if (liczba==15)
{
    un1()
    setTimeout("un1k();", 5000)
}
}

function un1()
{
    document.getElementById("unlocked").innerHTML = "Gratulacje!"
}

function un1k()
{
    document.getElementById("unlocked").innerHTML = ""
}