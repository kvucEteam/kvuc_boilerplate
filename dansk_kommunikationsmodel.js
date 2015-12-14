var situationTxt ="situationTxt";
var sprogTxt ="sprogTxt";
var afsenderTxt ="afsenderTxt";
var samfundTxt ="samfundTxt";
var medieKanalTxt ="medie / kanalTxt";
var reaktionTxt ="reaktionTxt";
var adressatTxt ="adressatTxt";
var modtagerTxt ="modtagerTxt";

$(window).resize(function() {
	var viewPort = $('#img-holder').width();
	console.log(viewPort);
	var percentage = (viewPort / 1074) * 100;
	console.log(percentage);
	$('body').css('font-size', percentage+"%");
});

$(window).load(function () {
	var viewPort = $('#img-holder').width();
	console.log(viewPort);
	var percentage = (viewPort / 1074) * 100;
	console.log(percentage);
	$('body').css('font-size', percentage+"%");
});

$('.btn-default').click(function() {
	var elementId = $(this).attr('id');
	console.log(elementId);
	var msg = elementId + "Txt";
	MsgBox('body', msg);

});

function MsgBox(TargetSelector, UserMsg) {

    var HTML = "<div class = 'MsgBox_bgr'><div id='UserMsgBox'>";
    HTML += '<span class="CloseClass right glyphicon glyphicon-remove"></span><span class="clear"></span>';
    // HTML += '<h2>'+header+'</h2>'
    HTML += UserMsg;
    HTML += "</div> </div>";
    $
    $(TargetSelector).prepend(HTML);

    $(".MsgBox_bgr").fadeIn("slow");

    $(".MsgBox_bgr").click(function() {
        $(".MsgBox_bgr").fadeOut(200, function() {
            $(this).remove();
        });
    });
}