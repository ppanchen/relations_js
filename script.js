function enter() {
    document.getElementById('enter-btn').addEventListener('click', enter_onclick, false);
    document.getElementById('input').addEventListener('keydown', function (e) {
        form_fill(e);
    }, false);
}

function form_fill(event) {
    var event = event || window.event;
    var x = event.charCode || event.keyCode;
    var ch = String.fromCharCode(x);
    if (!(!isNaN(parseInt(ch)) || x == 188 || x == 8))
        event.preventDefault();
    if (x == 13)
        enter_onclick();
}

function cmpNb(a, b) {
    return (a - b);
}

function enter_onclick() {
    var res;
    var nb = document.getElementById('input').value.split(',', 3);
    if (document.getElementById('del'))
        document.getElementById('del').remove();
    for (var i = 0; i < nb.length; i++)
        nb[i] = parseInt(nb[i]);
    nb.sort(cmpNb);
    res = "There are not any connections"
    if (nb[0] + nb[1] == nb[2])
        res = nb[0] + '+' + nb[1] + '=' + nb[2];
    if (nb[0] * nb[1] == nb[2])
        res = nb[0] + '*' + nb[1] + '=' + nb[2];
    var p = document.createElement('p');
    p.innerHTML = res;
    p.id = "del";
    document.getElementById("output").appendChild(p);
}

enter();