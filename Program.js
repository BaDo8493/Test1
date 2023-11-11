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

function test()
{
    alert("Test")
}