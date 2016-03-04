// JavaScript Document
	$(document).ready(function(e) {
        middlediv();
		folderexpanded = false;
		windowwidth = 0;
		var expanded = true;
		var tabsclosed = false;
		var iconsrc = "";
		
		$('#foldermenu ol li:first-child').click(function(e) {
			var fl = $(this).parent('ol').children('li').not(':first-child');
			if (fl.css('display') == 'none'){
				$(this).css('list-style-image','url(buttonopened.png)');
				fl.fadeIn('fast');
				}else
				{
				$(this).css('list-style-image','url(buttonclosed.png)');				
            	fl.fadeOut('slow');
			}
        });
		$('#foldermenu ol li').click(function(e) {
            $(this).css({'font-weight':'bold','background-color':'#CCC'});
			$('#foldermenu ol li').not(this).css({'font-weight':'normal','background-color':'#fff'});
        });
		
		$('#inbox').resizable({ handles: "e", minWidth: 150, maxWidth: $(window).width()/4
		,resize: function( event, ui ) {$('#message').width($(window).width() - ($(this).width() + $('#foldermenu').width()+22))}
		,stop: function( event, ui ) {$('#message').width($(window).width() - ($(this).width() + $('#foldermenu').width()+22))
		}
		});
		
		$('#foldermenu').resizable({ handles: "e", minWidth: 36,  maxWidth: 228   
		,resize: function( event, ui ) {$('#message').width($(window).width() - ($(this).width() + $('#inbox').width() +22 ))
		if ($(this).width() <=50){
			$('#ExpandFolder').removeClass('ExpandedFolder');
			folderexpanded = false;
			$('#menubarsmall').fadeIn('fast');
			$('#menubarbig').css('display','none');
			}
		else if ($(this).width() >= 50){
			$('#ExpandFolder').addClass('ExpandedFolder');
			folderexpanded = true;
			$('#menubarsmall').css('display','none');
			$('#menubarbig').fadeIn('fast');
			}
		}
		,stop: function( event, ui ) {$('#message').width($(window).width() - ($(this).width() + $('#inbox').width() +22))
		}
		});
		
		$('#ExpandFolder').click(function(e) {
			if (folderexpanded){
			$('#foldermenu').animate({width:36});
			$('#menubarsmall').fadeIn('fast');
			$('#menubarbig').css('display','none');
			$('#message').animate({width:($(window).width() - ($('#inbox').width() + 36 +22))});
			$(this).removeClass('ExpandedFolder');
			folderexpanded = false;	
				}
			else{
			$(this).addClass('ExpandedFolder');
            $('#foldermenu').animate({width:228});
			$('#menubarsmall').css('display','none');
			$('#menubarbig').fadeIn('fast');
			$('#message').animate({width:($(window).width() - ($('#inbox').width() + 228 +22))});
			folderexpanded = true;
			}
        });
		//tabs
		$('.tab-page #hide').click(function(e) {
        $('.tab-page').animate({height:0},300).fadeOut(0);
		tabsclosed = true;
		$('.tab').removeClass('tabclicked');
		$('#tabcontainer').css('border-bottom-color','#FFF');
		$('#messagecontainer').height($('#message').height() - $('#messageheader').height()+100);
		$('#inboxcontainer').height(($('#inbox').height()-$('#inboxsearch').height())+100)
		$('#foldermenu').height($('#foldermenu').height()+107);
		$('#middle').height($('#middle').outerHeight(false)+107);
        });
		
		$('#tab-home').addClass('tabclicked');
		
		$('.tab').click(function(e) {
			if ($(this).attr('id') != "file"){
			  $('.tab').not(this).removeClass('tabclicked');    
			  $(this).addClass('tabclicked');
			  var page = "#page-" + $(this).attr('id');
			  $('.tab-page').not(page).height(100).css('display','none');
			  $(page).css('display','inherit').animate({height:100},300);
			  if (tabsclosed){
				  $('#foldermenu').height($('#foldermenu').height()-107);
				  $('#inboxcontainer').height($('#inboxcontainer').height()-107);
				  $('#messagecontainer').height($('#messagecontainer').height() - 107)
				  $('#middle').height($('#middle').outerHeight(false)-107);
				  tabsclosed = false;
				  $('#tabcontainer').css('border-bottom-color','#CCC');
				  }
			  //$('#'+page).css('display','none');
			}
        });
		//tabs
		
		//
		$('.optionclick').click(function(e) {
			window.unifaceTriggers('menuselect', $(this).attr('data-ref'));
//  		      alert($(this).attr('data-ref'));
    		}); 
//  		var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
//	  if(isiPad > -1)
//	  {
//		$('#inbox').css('border-right','#CCC thin solid');
//	  } 
  	$('.icon').hover(
  		function () {
    		iconsrc = $(this).attr('src').split('.');
			$(this).attr('src',iconsrc[0]+'-h.png');
  		},
 		function () {
    		$(this).attr('src',iconsrc[0]+'.png');
  		}
	);
	$('#inbox .header').click(function(e) {
		if ($(this).parent('.ibxcontain').children('.detailcontainer').height() != 0){
			$(this).parent('.ibxcontain').children('.detailcontainer').animate({opacity:0},'slow').animate({height:0});
			$(this).css('background-image','url(buttonclosed.png)');
		
		}
		else{
			var dvs = $(this).parent('.ibxcontain').children('.detailcontainer').children('.details').length;
			var dvheight = dvs*56;
			$(this).parent('.ibxcontain').children('.detailcontainer').animate({height:dvheight}).animate({opacity:1},'slow');
			$(this).css('background-image','url(buttonopened.png)');
			}
    });
	
	var xx = 0;
	window.setInterval(function() {
		if (xx <= 2){
		var ldn = $('.mlloading p').text()
		$('.mlloading p').html(ldn +'.');
		xx ++
		}
		else{
			$('.mlloading').fadeOut('slow');
			$('.mlloading').remove();
			
			}
	}, 1000);	
	
	$(window).resize(function(e) {
    	middlediv();
    });
	
	});
	
	function middlediv(){
		var TopHeight = $('#top').height();
		var BottomHeight = $('#bottom').height();
		var MiddleHeight = $(window).height() - (TopHeight + BottomHeight);
		$('#middle').height(MiddleHeight-5);
		$('#message').height((MiddleHeight-5));
		$('#message').width($(window).width() - ($('#inbox').width() + $('#foldermenu').width()+22));
		$('#messagecontainer').height($('#message').height() - $('#messageheader').height()-8);
		$('#inboxcontainer').height(($('#inbox').height()-$('#inboxsearch').height())-8);
		windowwidth = $(window).width();
		}
	function openwindow(linkn){
	window.open(linkn,'popup','status=0,menubar=0,location=0,toolbar=0,resizable=0,width=600,height=100')
	}
	
function changeimg(iid,hv){
	document.getElementById(iid).src="icos/"+iid+"-"+hv+".png";
	}
		
function popup(scree,popup,top,left){
	document.getElementById(scree).style.display = "block";
	document.getElementById(popup).style.left=left;
	document.getElementById(popup).style.top=top;
	}