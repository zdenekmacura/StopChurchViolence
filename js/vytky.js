
$(document).ready(function(){

    $("input[type=checkbox]").click(function(){
    $(this).next().next().toggle(300);
    if ($(this).is(':checked')) { $(this).next().next().next().show(300) ; } else {
    	$(this).next().next().next().hide(300) ; $(this).next().next().next().next().hide(300) ;
    }
	});
	$.get("strings.xml",{},function(xml) {
		$('string-array',xml).each(function(i) {
			var namefield = $(this).attr("name");
			$("#content").append(namefield);
			$('string-array[name="'+namefield+'"]',xml).children("item").each(function(i) {
				itemvalue = $(this).text();
				$('[id$="'+namefield+'"]').parent().next().append("<div class='Item'>"+itemvalue+"</div>");
			});
		});
		$('.Item').click(function() {
 			$("#generatedReproof").hide(300);
			$("#headingReproof").hide(300);
			$("#sendsms").hide();
			$("#sharevytka").hide();
			itemvalue = $(this).text();
			var textarea = this.parentNode.previousElementSibling.firstElementChild;
			if ($(textarea).val().length > 0 ) { del = ", ";} else { del = "";}
			$(textarea).val($(textarea).val() + del + itemvalue + " ");
			$(this).parent().hide(200);
			$(this).parent().next().show(300);
			$('.ShowExamples').click(function(){
				$(this).hide(300);
    			$(this).prev().show(300);
			});
		});
	});
	
});
