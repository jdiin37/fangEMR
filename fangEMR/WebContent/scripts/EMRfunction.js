function getPatInfo(paraMethod) {

	$.ajax({
		method: "POST",
		url : 'http://172.16.2.189:8080/SHSTimaServices/servlets/ServletAgent',
		data: {
			serviceName: "PatinpService",
			parameters: '{"idNo":"ORCL","sessionID":1806,"method":' + "getPatinpListInp" + '}'
		},
		dataType: "json"
	})
		.done(function (data) {
			if(data.status == "Success")
			{
				$.each(data.resultSet,function(index,obj)
				{
					// We can access the object using obj or this
					// alert("index:"+index + " , value: "+obj.pt_name +" ,
					// value:"+this);
					var pat = " 病歷號碼:" + obj.chart_no + " 姓名:"+ obj.pt_name + " 性別:" + obj.sex_name
					$("#block-1-patInfo").text(pat);
					$("#timeLine").html("");
					showTimeLine();
					if(index == 0)
					return false;				 
				});	
			}						
		});

}

var timesCnt = 0;

function showTimeLine(){				 
			
	timesCnt++;
		
	var content = "<div class='panel panel-info'>" +
                  	"<div class='panel-heading'>" +
                  		"<a data-toggle='collapse' id='link_time_" +timesCnt + "' data-parent='#timeLine' href='#time_" + timesCnt + "'>" +
                  			"<h4 class='panel-title'>"+
                  				timesCnt + 
                  			"</h4>" +                  			
                  		"</a>" +
                    "</div>" +
                    "<div id='time_" + timesCnt + "' class='panel-collapse collapse'>" +
                           "<div class='panel-body'>" +
                           		"body" +
                           "</div>" +
                    "</div>"
                   "</div>";
	
	$("#timeLine").append(content);
	$("#link_time_" + timesCnt).click(function() {
		  // alert( $(this).attr('id') );
		$('#LoadingModal').modal('show');
		setTimeout(function(){
	        $("#LoadingModal").modal('hide');
	    }, 1000);
	});
	if(timesCnt<=10)
        setTimeout("showTimeLine()", 500);
}


