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

    $(".outter_box").mouseover(function(){
    	$("#nut").show();
    });

    $("#nut").mouseover(function(){
    	$("#nut").show();
    });

    $("#nut").mouseout(function(){
        $("#nut").hide();
    });

    $(".outter_box").mouseout(function(){
        $("#nut").hide();
    });

	$("#addEvent").submit(function(){
		$("#event").show();
		return false;
	});

	$("#eventSubmit").submit(function(){
		$("#event").hide();
		return false;
	});

}

