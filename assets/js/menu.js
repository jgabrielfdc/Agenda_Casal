$(document).ready(function(){

    $("#viagens").on("click",function(){
        $("#menus").load("./pages/viagem.html")
    })
    $("#compromissos").on("click",function(){
        $("#menus").load("./pages/compromissos.html")
    })
})