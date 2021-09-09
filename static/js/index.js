var text = "Welcome to the online ganja store.";
var speed = 100;
var element = document.getElementById("info");
var i = 0;
var flag = 0;

$('#downelement').hide()

function information(){
    if (i<text.length)
    {   
        if(flag == 1) element.innerHTML = ''
        element.innerHTML += text.charAt(i);
        i++;
        flag = 0;
        setTimeout(information,speed);
    }
    else{
        i = 0;
        flag = 1
        setTimeout(information,speed * 100);
    }
}

function loadButtom() {
    $('#downelement').show()
    document.getElementById('downelement').scrollIntoView()
}