const checktime = location.search.split("=");
const ftime = Number(checktime[1])
const ntime = new Date().getTime();
const time = ntime - ftime;
const sec = 1000;
const min = 60000;

if(time < min * 15){
    $("#text").html("<h1>ID:Check Mate</h1>");
}else if(time >= min * 15){
    $("#text").html("<h1>ID:Ready to finish?</h1>");
}else{
    $("#text").html("<h1>403 Forbidden Error<h1>\n\n<h3>Did you come this page from chat?</h3>");
}
