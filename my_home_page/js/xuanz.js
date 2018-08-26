number = 0;

function zhuan()
{
    number = number + 3;
    sty = "transform: rotate(" + number + "deg)";
    document.getElementById("b1").style=sty;
}

setInterval(zhuan,25);