function timenow(){
    var datenow = new Date().toLocaleString();
    document.getElementById('prod_add_time').setAttribute('value',datenow)
}
