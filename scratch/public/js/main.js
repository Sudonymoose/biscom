/* Arthur Chang: arthurc
 */
window.onready = function(){
    $(".outter_box").click(function(){
        var unchecked = $(this).children(".device_box").children("div .uncheck");
        var checked = $(this).children(".device_box").children("div .check");
        if(unchecked != undefined){
            unchecked.removeClass("uncheck").addClass("check");
        }
        if(checked !=undefined){
            checked.removeClass("check").addClass("uncheck");
        }
    });
}

