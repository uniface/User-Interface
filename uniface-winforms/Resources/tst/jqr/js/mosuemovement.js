
	var mvmrgt = 0;	
	var mvmlft = 0;
		$(document).ready(function(e) {
		//experimental move on side window hover
		$('#movement-rgt').bind('mouseenter', function() {
    	this.iid = setInterval(function() {
			if (($('body').scrollLeft()-50) < ($('body').width()) - $(window).width()){
        $('body').scrollLeft($('body').scrollLeft()+50);
		mvmrgt -= 50;
		mvmlft += 50;
		
		$('#movement-lft').fadeIn('fast');
		mvm = $('body').scrollLeft();
		
		$('#movement-rgt').css('right',mvmrgt);
		$('#movement-lft').css('left',(mvmrgt*-1))         
			}
			else{
			$('#movement-rgt').fadeOut('fast');
			$('#movement-lft').fadeIn('fast');
				}}, 10);
		}).bind('mouseleave', function(){
    	this.iid && clearInterval(this.iid);
		});
		
		$('#movement-lft').bind('mouseenter', function() {
			
    	this.iid = setInterval(function() {
		if ($('body').scrollLeft() != 0){
        $('body').scrollLeft($('body').scrollLeft()-50);
		mvmlft -= 50;
		mvmrgt += 50;
		$('#movement-rgt').fadeIn('fast');
		mvm = $('body').scrollLeft();
		$('#movement-lft').css('left',mvmlft);
		$('#movement-rgt').css('right',(mvmlft*-1))         
		}
		else{
			$('#movement-rgt').fadeIn('fast');
			$('#movement-lft').fadeOut('fast');
			}
		}, 10);
			
		}).bind('mouseleave', function(){
    	this.iid && clearInterval(this.iid);
		});

            
        });