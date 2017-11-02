
				
	$(document).scroll(function(){
		
		var iTop = $(document).scrollTop();
		if(iTop>=56){
			
			$(".pageNav").css("top",0)
		}
		else{
			$(".pageNav").css("top",56)
		}
	})
	//
	
