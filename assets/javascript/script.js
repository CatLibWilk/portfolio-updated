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

close.on("click", function(){
    modal.modal('hide');
    $("#op-link-btn").empty();
    $("#code-link-btn").empty();
});