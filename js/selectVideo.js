function selectVideo() {

		

		$('#navVideo1').click(function(){
			$('#Video1').show();
			$('#Video2').hide();
			$('#Video3').hide();
			
			
		});

		$('#navVideo2').click(function(){
			$('#Video1').hide();
			$('#Video2').show();
			$('#Video3').hide();
			
			
		});

		$('#navVideo3').click(function(){
			$('#Video1').hide();
			$('#Video2').hide();
			$('#Video3').show();
			
			 
		});

		
	}