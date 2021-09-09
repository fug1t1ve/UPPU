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
    for(let i = 0;i<=2;i++){
        loadmorecards()
    }
    document.getElementById('downelement').scrollIntoView({
        behavior: 'smooth'
    })
    $('#reload').show()
}

function loadmorecards(){
    $('#reload').remove()
    for(let i = 0;i<2;i++){
        $('#cardplace').append(`                    <div class="row">
                        <div class="card mb-3 col-6" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="/static/img/back.png" alt="marijuana" class='card-img-top'>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 col-6" style="max-width: 540px;margin-left: auto;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="/static/img/back.png" alt="marijuana" class='card-img-top'>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>`)
    }
    $('#cardplace').append(`                    <div class="container-fluid text-center" id="reload">
    <button type="button" class="btn btn-outline-warning"  style="margin-bottom: 1em;" onclick="loadmorecards()">Load more..</button>
</div>`)
}