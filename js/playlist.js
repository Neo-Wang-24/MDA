function selectVideo() {

		$('#navAD').click(function(){
			$('#AD').show();
			$('#Animation').hide();
			$('#History').hide();
		});

        $('#navAnmation').click(function(){
			$('#AD').hide();
			$('#Animation').show();
			$('#History').hide();
		});

        $('#navHistory').click(function(){
			$('#AD').hide();
			$('#Animation').hide();
			$('#History').show();
		});

}