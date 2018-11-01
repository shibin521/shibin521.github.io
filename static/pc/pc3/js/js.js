$(function(){
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") { 
		$('#box_one_text>ul>li').hover(function(){
			$(this).children('.img_f').show();
		},function(){
			$(this).children('.img_f').hide();
		});
		$('#box_one_texts>ul>li').hover(function(){
			$(this).children('.img_f').show();
		},function(){
			$(this).children('.img_f').hide();
		});
		$('.three_list>ul>li').hover(function(){
			$(this).children('.three_f').show();
		},function(){
			$(this).children('.three_f').hide();
		});
	}else{
		$('#box_one_text>ul>li').hover(function(){
			$(this).children('.img_f').css({"display":"flex"});
			$(this).children('.img_f').removeClass('flipOutX').addClass('animated flipInX');
		},function(){
			$(this).children('.img_f').removeClass('flipInX').addClass('flipOutX');
		});
		$('#box_one_texts>ul>li').hover(function(){
			$(this).children('.img_f').show();
			$(this).children('.img_f').css({"display":"flex"});
			$(this).children('.img_f').removeClass('flipOutY').addClass('animated flipInY');
		},function(){
			$(this).children('.img_f').removeClass('flipInY').addClass('flipOutY');
		});
		$('#box_one_textss>ul>li').hover(function(){
			$(this).children('.img_f').show();
			$(this).children('.img_f').css({"display":"flex"});
			$(this).children('.img_f').removeClass('flipOutY').addClass('animated flipInY');
		},function(){
			$(this).children('.img_f').removeClass('flipInY').addClass('flipOutY');
		});
		$('.three_list>ul>li').hover(function(){
			$(this).children('.three_f').css('display','block');
			$(this).children('.three_f').removeClass('bounceOut').addClass('animated bounceIn');
		},function(){
			$(this).children('.three_f').css('display','none !important');
			$(this).children('.three_f').removeClass('bounceIn').addClass('bounceOut');
		});
	};	
	
	$('.banner_left').hover(function(){
		$(this).attr('src','img/banner_lefts.png');
	},function(){
		$(this).attr('src','img/banner_left.png');
	});
	$('.banner_right').hover(function(){
		$(this).attr('src','img/banner_rights.png');
	},function(){
		$(this).attr('src','img/banner_right.png');
	});
	
	$('.box_one_li').hover(function(){
		$(this).children('img').eq(0).hide();
		$(this).children('img').eq(1).css('display','block');
		$(this).children('img').eq(1).animate({
			'filter':'alpha(opacity=1)',
			'-moz-opacity':'1',
			'-khtml-opacity':'1', 
			'opacity': '1', 
		},300);
		$(this).children('p').addClass('box_one_p_active');
		$(this).css('border','1px solid #F8A40D');
	},function(){
		$(this).children('img').eq(0).css('display','block');
		$(this).children('img').eq(1).hide();
		$(this).children('img').eq(1).css({
			'filter':'alpha(opacity=0)',
			'-moz-opacity':'0',
			'-khtml-opacity':'0', 
			'opacity': '0', 
		});
		$('.box_one_li>p').removeClass('box_one_p_active');
		$(this).css('border','1px solid #313131');
	});
	$('.box_two_li').hover(function(){
		$(this).children('img').animate({'bottom':'0px'},300);
	},function(){
		$(this).children('img').animate({'bottom':'-186px'},300);
	});
	$('.box_three_list').hover(function(){
		$(this).children('div').children('div').animate({'bottom':'0px'},300);
	},function(){
		$(this).children('div').children('div').animate({'bottom':'-316px'},300);
	});
	
	

	
	$('#box_one_text').rollNoInterval().left();
	$('#box_one_texts').rollNoInterval().left();
	$('#box_one_textss').rollNoInterval().left();
	  var mySwiper = new Swiper('.swiper-container',{
	    pagination: '.pagination',
	    loop:true,
		autoplay:4000,
	    paginationClickable: true
	  })
	  $('.banner_left').on('click', function(e){
	    e.preventDefault()
	    mySwiper.swipePrev()
	  })
	  $('.banner_right').on('click', function(e){
	    e.preventDefault()
	    mySwiper.swipeNext()
	  })
	
	
	
	
		$('.baner_hover').hover(function(){
			$(this).next('img').css('display','block');
		},function(){
			$(this).next('img').css('display','none');
		});
	
	
	
	$('#r_ewm').hover(function(){
		$('.r_ewm_h').fadeIn();
	},function(){
		$('.r_ewm_h').fadeOut();
	});
	$('#top').click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	$('#open_zx').click(function(){
		$('.tc').show();
	});
	$('.go_zx').click(function(){
		$('.tc').show();
		$('.tc_kf').hide();
	});
	$('.tc>i').click(function(){
		$('.tc').hide();
	});
	$('#r_rx').hover(function(){
		$('.tel_text').fadeIn();
	},function(){
		$('.tel_text').fadeOut();
	});
	
	
	$('.box_three_nav>li').click(function(){
		$('.box_three_nav>li').removeClass('box_three_nav_ac');
		$(this).addClass('box_three_nav_ac');
		$('.box_threes>.box_three_tab').hide();
		$('.box_threes>.box_three_tab').eq($(this).index()).show();
	});
	
	
});
