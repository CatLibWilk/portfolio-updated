var modal = $("#modal");
var close = $(".close");

$(".portfolioObject").on("click", function(){
    var inAction = $(this).attr("url");
    var codeLink = $(this).attr("codeurl");
    var newA = $("<a>");
        newA.attr("href", inAction);
        newA.attr("target", "_blank");
        newA.text("See it in Action!");
        console.log(newA);
    $("#op-link-btn").append(newA);

    var codeA = $("<a>");
    codeA.attr("href", codeLink);
    codeA.attr("target", "_blank");
    codeA.text("See the code");
    console.log(newA);
    $("#code-link-btn").append(codeA);




    modal.modal('show'); 
});

close.on("click", function(e){
    e.preventDefault();
    modal.modal('hide');
    $("#op-link-btn").empty();
    $("#code-link-btn").empty();
});

$(window).on("click", (e) => {
    console.log(modal);
    if(modal.is(":hidden")){
        console.log("modal hidden")
        $("#op-link-btn").empty();
        $("#code-link-btn").empty();
    }else{
        console.log("didnt work")
    }
});