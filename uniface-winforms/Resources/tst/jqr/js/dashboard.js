var scrollno = 0;
	var col = "";
	var ewt = 0;
	var bgpos =0;
	var mvmrgt = 0;	
	var mvmlft = 0;
	var scrolldis = 40;
	var mvm = 0;
	var conheight = 0;
	var cnt = 0;
	var cnt3 = 0;
	var startposs = 1;
	var fullscreenstatus = false;
	var windowfs = false;
	var windowheight;
	var thistileheight = 0;
	
	$(document).ready(function() {
		
		

		if (!mobdevice()){
			$('#movement-lft').css('display','none');
			$('#movement-rgt').css('display','none');
			
			}
//		$(document).click(function(){
//		$('#intbottom').animate({height:0},'slow');
//		$('#inttop').animate({height:0},'slow');
//		});
		
		startposs = $(document).scrollLeft();
		
// Set tile colous based on tile status (iconstats)		
		$('.iconstatus:contains("Action Required")').each(function () {
			$(this).parent('.tile').css('background-color','#FFCB00')
		});
		$('.iconstatus:contains("Urgent")').each(function () {
			$(this).parent('.tile').css('background-color','#8C0000')
		});
		$('.iconstatus:contains("New Info")').each(function () {
			$(this).parent('.tile').css('background-color','#06F')
		});
		$('.iconstatus:contains("Messages")').each(function () {
			$(this).parent('.tile').css('background-color','#06F')
		});
//end set tile color

//tile clicked function;		
	$('.tile').mousedown(function(e) {
				$('.tile').animate({height:100,marginTop:4,marginBottom:0,width:250,marginLeft:4,marginRight:0});
				$(this).parent('.col').children('.tile').each(function(index, element) {
					$(this).css('cursor','move');
                    $(this).animate({marginTop:8,marginLeft:8},'fast');
                });
        });

		$('.tile').click(function(e) {
			
				$('.tile').animate({height:100,marginTop:4,marginBottom:0,width:250,marginLeft:4,marginRight:0});
            //$(this).children('.iconstatus').html("");
			$('.windowtitle').css('background-color',col);
			$('.overlay').fadeIn('slow');
			$('body').css('overflow','hidden');
			windowheight = $('body').height()-60
			$('.window').height(windowheight);
			$('.window').css({"width":"95%","margin-top":"30px","position":""});
			var targeturl = $(this).attr('id');
			$('.windowcontent').attr('src','http://vmw7:8080/uniface/wrd/'+targeturl);
			$('.windowtitle  #ttl').text($(this).children('.icontitle').text())
        });
//end tile clicked function

//news tile content = to be dynamic in the future via xml feed
		var ivcount = 0;
		setInterval(function() {
			switch (ivcount)
			{
			case 0:
			  $('#news > .dcont').hide().html("<h1>baninet goes Live</h1><p>Phillip Beal CEO banifm announced today that baninet has gone live...<h1>Future Looks Bright!</h1><p>Jane Camp banifm business development manager says the future of banifm looks 'stronger than ever'... <p>").fadeIn(2500);
			  ivcount++;
			  break;
			case 1:
			  $('#news > .dcont').hide().html("<h1>Busines pay Review 2013/2014</h1><p>Rob Edgler Chief HR Officer released final details of next years pay review. All baseline sallaries will increase at 1.2% above inflation bucking the current trend in the private sector. This is as a result of strong business growth and input from the forum...<p>").fadeIn(2500);
			  //$('#news').css('background','url(newspics/p1.jpg)');
			  ivcount++;
			  break;
			case 2:
			  $('#news > .dcont').hide().html("<h1>Forum Election Results 2013</h1><p>Over 3000 colleagues voted for their forum representitives this year with all members set to have their first meet in April. The forum was set up so that all colleagues can have a real say into how the business is run and future business stratagies...<p>").fadeIn(2500);
			  ivcount++;;
			  break;
			case 3:
			$('#news > .dcont').hide().html("<h1>banifm wins 'Lions Share'</h1><p>banifm has just won the lions share of Tesco cleaning & landscaping contract. banifm was recognised by Tesco for its bold approach to business and 'can back up their claim' that they are leading the change in the cleaning industry...<p>").fadeIn(2500);
			ivcount++;;
			break;
			case 4:
			$('#news > .dcont').hide().html("<h1>The true 'paperless' office</h1><p>Kate Ewert Commercial Manager banihub explains how the banifm HQ manages to run 100% paperless by embrasing technology throughout the entire business. banifm recently won 'Greenest FM Company in Britain'...<p>").fadeIn(1500);
			ivcount = 0;
			break;
			}
		}, 17000);
		
		$('#movement-rgt').bind('mouseenter', function() {
			//$(this).children('#in').fadeIn('slow');
			$(this).animate({width:25},'fast');
			$(this).css('background','rgba(0,0,0,0.5)');
			this.iid = setInterval(function() {
				$(document).scrollLeft($(document).scrollLeft()+scrolldis);
				mvm = $(document).scrollLeft();
			}, 30)
		}).bind('mouseleave', function(){
			this.iid && clearInterval(this.iid);
			//$(this).children('#in').fadeOut('slow');
			$(this).animate({width:1},'fast');
			$(this).animate({'background':'transparent'});
			//$(this).css('background','');
			//var jhg = $('.container').children(':nth-child(3)').width();
			//$('body').animate({'scrollLeft':'250'});
		});
		
		$('#movement-lft').bind('mouseenter', function() {
			//$(this).children('#in').fadeIn('slow');
			$(this).animate({width:25},'fast');
			$(this).css('background','rgba(0,0,0,0.5)');
			this.iid = setInterval(function() {
        		$(document).scrollLeft($(document).scrollLeft()-scrolldis);
				mvm = $(document).scrollLeft();
		}, 30);
			
		}).bind('mouseleave', function(){
    		this.iid && clearInterval(this.iid);
			//$(this).children('#in').fadeOut('slow');
			$(this).animate({width:1},'fast');
			$(this).animate({'background':'transparent'});
			//$('body').animate({'scrollLeft':'4'});
		});
		
		$('.tile').mouseover(function(e) {
			$(this).addClass('tilehover');
			thistileheight = $(this).height();
       });
		$('.tile').mouseout(function(e) {
			$(this).removeClass('tilehover');
        });
		$('#newsbanner').dblclick(function(e) {
            $(this).fadeOut('slow');
        });
		
		$('#newsbanner marquee').marquee();
		
		$(document).scroll(function(e) {
			if (!mobdevice()){
			this.iid = setInterval(function() {
			if ($(document).scrollLeft() > startposs){
				var plcd = $('.inner:nth-child(1)').width()+100;    
					if($(document).scrollLeft() > plcd){
						$('.container').append($('.inner:nth-child(1)'));
						$(document).scrollLeft(100);
					}
						
			}
			if ($(document).scrollLeft() == 0){
				$(document).scrollLeft($('.inner:nth-last-child(1)').width() - (scrolldis));
				$('.container').prepend($('.inner:nth-last-child(1)'));
			}	
			plcd=1;
			mvm = $('body').scrollLeft();
			startposs = $(document).scrollLeft();
			this.iid && clearInterval(this.iid);
			},300);
			}
        });
		
		// scroll left/right on mousewheel function
		$(document).mousewheel(function(event, delta) {
			if($('.overlay').css('display') == "none"){
      			//this.scrollLeft -= (delta * 200);
				event.preventDefault();
				if (delta == -1){
					$(document).scrollLeft($(document).scrollLeft()+(scrolldis*2))
				}
				else{
					$(document).scrollLeft($(document).scrollLeft()-(scrolldis*2))
				}
			}
   		});
		
		contenth();
		tiles();
		contentw();
		
		$('#settingsbanner input:checkbox').bind('change',function(){
		//	alert('llama');
				var phm = $(this).attr('name');
            if (! $(this).attr('checked')){
				//$('#'+phm).children('.col').animate({width:0});
				$('#'+phm).fadeOut('slow');
				contentw();
				}
			else{
				$('#'+phm).fadeIn('slow');
				contentw();
				}
        });
		
		
		$(document).bind("contextmenu",function(e){
			if ($('#settingsbanner').height() == 150)
			{
			$('#settingsbanner').animate({height:0});
			$('#settingsbanner').animate({'background-color':'transparent'});
			$('#settingsbanner').animate({'color':'transparent'});
			$('#settingsbanner').css({'border-top':'none'});
			$('#movement-rgt').width(5);
			$('#movement-lft').width(5);
			$('#movement-rgt').css('background','transparent');
			$('#movement-lft').css('background','transparent');
			//$('#newsbanner').fadeIn('fast');
			}
			else
			{
			$('#settingsbanner').css({'border-top':'solid thin #000'});
			$('#settingsbanner').animate({height:150});
			$('#settingsbanner').animate({'background-color':'rgba(0,0,0,0.9)'});
			$('#settingsbanner').animate({'color':'#fff'});
			$('#movement-rgt').width(0);
			$('#movement-lft').width(0);
			//$('#newsbanner').fadeOut('fast');
			}
			return false;
        });
		
		$('#supercontainer').click(function(e) {
            if ($('#settingsbanner').height() > 0)
			{
			$('#settingsbanner').animate({height:0});	
			}
        });
		
		$('#shownews').click(function(e) {
			if ($(this).attr("checked")){	
            $('#newsbanner').animate({height:20});
			$('#settingsbanner').animate({bottom:20});
			}
			else{
			$('#newsbanner').animate({height:0});
			$('#settingsbanner').animate({bottom:0});
				}
        });
		
		$(document).keydown(function(e){
   			if(e.which==122){
       			e.preventDefault();
	  			 gofullscreen();
       			return false;
   			}
		});
		
//		document.addEventListener("webkitfullscreenchange", function () {
//			fullscreenstatus = (document.webkitIsFullScreen);
//		}, false);
				
		$('#gofull').click(function(e) {
			gofullscreen()
		});
		
		$('.window #close').click(function(e) {
            $('.overlay').fadeOut('slow');
			$('body').css('overflow','')
        });	
		
		$('.window #mvl').click(function(e){
			$('.window').css("position","absolute");
			$('.window').animate({width:"50%", left:0, height:"100%",marginTop:0})
			});
		$('.window #mvr').click(function(e){
			$('.window').css("position","absolute");
			$('.window').animate({width:"50%", left:"50%", height:"100%",marginTop:0})
			});
			
		$('.window #max').click(function(e) {
			if (!windowfs){
			$('body').css({"overflow":""})
			$('.window').animate({width:"100%", height:"100%", marginTop:0, left:0});
			windowfs = true;
			}
			else{
			$(this).attr("src","icos/max.png");
			$('body').css({"overflow":""});
			$('.window').animate({width:"95%", height:windowheight, marginTop:30});
			$('.window').css("position","");
				windowfs = false;
				}
        });	
		
		$('.smalltile').mousedown(function(e) {
            switch (event.which){
				case 3:
				return false;
				}
        });
    	
		$( ".col" ).sortable({ 
			forceHelperSize: true, 
			cursorAt: { left: 125, top:50 },
			opacity: 0.5 , 
			placeholder: "blanktile", 
			containment: "parent",
			distance: 25,
			start: function(){
			//$('.blanktile').height(thistileheight);
				},
			stop: function(){
				$(this).children('.tile').each(function(index, element) {
					$(this).css('cursor','default');
                    $(this).animate({marginTop:4,marginLeft:4},'fast');
                });
			}
    	});
		
		
		
//		$('.col').each(function() {
//			var prnt = $(this).parent('.inner').attr('id');
//			$('#settingsbanner').append('<input name="'+prnt+'" id="cbox" type="checkbox" checked>'+prnt+'');
//		});
		
		$('#settingsbanner .windowcontrols').click(function(e) {
			$('#movement-rgt').width(5);
			$('#movement-lft').width(5);
			$('#movement-rgt').css('background','transparent');
			$('#movement-lft').css('background','transparent');
            $('#settingsbanner').animate({height:0});
			$('#settingsbanner').animate({'background-color':'transparent'});
			$('#settingsbanner').animate({'color':'transparent'});
			$('#settingsbanner').css({'border-top':'none'});
			$('body').css('overflow','');
			$('#newsbanner').fadeIn('fast');
        });
		
//	$('.tile').mousedown(function(event) {
//    	switch (event.which){
//       		case 3:
//			$(this).children('.tilers').fadeIn('fast');
//			break;
//		}
//    });
	
	
});
	
	$(window).resize(function(e) {
        contenth();
		tiles();
		contentw();
    });
	
	function contenth(){
		var height = $(window).height(); // get height of window
		$(".inner").css("height",height-180); // resize inner divs to window height minus 80 for the margins
		$(".col").css("height",height-180);
		}
	
	function window_create(){
		document.createElement();
		}
	
	function contentw(){
		var overall_width = 0; // width of the container
		$('.container > .inner').each(function(index, elem) { // function for each .inner div
    		var $elem = $(elem);
    		overall_width += $elem.outerWidth() + parseInt($elem.css('margin-left'), 10) + parseInt($elem.css('margin-right'), 10); 
		});
		$('.container').width(overall_width+10);
		$('body').width(overall_width+10);
		ewt = overall_width + 50;
		}
		
		function gofullscreen(){
			if (!fullscreenstatus){
				fullscreenstatus = true;
           var docElm = document.documentElement;
				docElm.webkitRequestFullScreen
				docElm.webkitRequestFullScreen();
				docElm.RequestFullScreen
				docElm.RequestFullScreen();
			}
			else{
				fullscreenstatus = false;
				document.webkitCancelFullScreen();
				document.CancelFullScreen();
				}
			}
			
		function mobdevice(){
			return !!('ontouchstart' in window) // works on most browsers 
            || !!('onmsgesturechange' in window); // works on ie10
			}
		// ajust column width dependant on tiles contained within it
	function tiles(){
		$('.col').each(function() {
			if ($(this).has('.tile').length){
            var tileamount = $(this).children('.tile').length;
				if ($(this).find('#news').length){
					tileamount +=1;
				}
			var completetileheight = 104 * tileamount;
			var maxtileamount = Math.floor($('.inner').height() / 104);
			colwidth = Math.ceil(tileamount/maxtileamount);
			$(this).width((258*colwidth));
//			var lftno = maxtileamount - 1;
//			var rgtno = tileamount - lftno;
//			var inno = colwidth + (rgtno-1);
//			var remainingtiles = ((maxtileamount * colwidth) - tileamount);
//			alert(lftno);
			}
		else{
			var tileamount = $(this).children('.smalltile').length;
			var completetileheight = 52 * tileamount;
			var maxtileamount = Math.floor($('.inner').height() / 52);
			var colwidth = Math.ceil(tileamount/maxtileamount);
			$(this).width((258*colwidth));
			}
        });
	}