$(document).ready(function() {
	var souInt = $(".headTab-sou input[type='text']");
	var boxInt = $(".headTab-sou .int-box");
	var souDiv = $(".headTab-sou label div");
	var menuDiv = $(".head-tab .headTab-sou .menu");
	var boxDiv = $(".head-tab .headTab-sou .box ");

	boxInt.hover(function() {
		souInt.css("border-color", "#b0b0b0");
		souDiv.css("border-color", "#b0b0b0")
	}, function() {
		souInt.css("border-color", "#e0e0e0");
		souDiv.css("border-color", "#e0e0e0")
	});

	souDiv.hover(function() {
		souInt.css("border-color", "#b0b0b0")
	}, function() {
		souInt.css("border-color", "#e0e0e0")
	});

	souInt.focus(function() {
		souInt.addClass("active");
		souDiv.addClass("active");
		menuDiv.css("display", "block")
		boxDiv.hide(0.1)
	});
	souInt.blur(function() {
		souInt.removeClass("active");
		souDiv.removeClass("active");
		menuDiv.css("display", "none")
		boxDiv.show(0.1)
	});

	//轮播图部分
	var images = $(".carousel .carousel-tp ul li");
	var index = 0;
	var imgCount = images.length;
	var timer = null;

	for(var i = 0; i < imgCount; i++) {
		$(".carousel .carousel-tp .box").append("<span data-idx='" + i + "'></span>")
	};

	var points = $(".carousel .carousel-tp .box span");
	points.eq(0).addClass("active");
	images.eq(0).show();

	function timers() {
		timer = setInterval(function() {
			images.eq(index).fadeOut(300);
			index = (index + 1) % imgCount;
			images.eq(index).fadeIn(300);
			points.removeClass("active").eq(index).addClass("active");
		}, 3000);
	};
	timers();

	images.hover(function() {
		clearInterval(timer);
	}, function() {
		timers()
	});
	points.click(function() {
		clearInterval(timer);
		var currentIndex = parseInt($(this).attr("data-idx")); //获取当前索引值。
		points.removeClass("active").eq(currentIndex).addClass("active");
		$(":animated").stop(true, true);
		images.eq(index).fadeOut(200); //前一张淡出
		index = currentIndex;
		images.eq(index).fadeIn(200); //下一张淡入
	});

	//下一张
	$(".carousel .carousel-tp .btm").click(function() {
		//停止所有的动画
		clearInterval(timer);
		images.eq(index).fadeOut(200); //前一张淡出
		index = (index + 1) % imgCount; //下一张
		images.eq(index).fadeIn(200); //下一张淡入
		points.removeClass("active").eq(index).addClass("active");
	});

	//上一张
	$(".carousel .carousel-tp .top").click(function() {
		//停止所有的动画
		clearInterval(timer);
		images.eq(index).fadeOut(200); //前一张淡出
		index = (index + imgCount - 1) % imgCount; //上一张
		images.eq(index).fadeIn(200); //下一张淡入
		points.removeClass("active").eq(index).addClass("active");
	});
	
	//.carousel .mune-tab .children  菜单切换效果
	var liTab=$(".carousel .carousel-menu ul li");
	var muneTab=$(".carousel .mune-tab .children");
	var muneTabUl=$(".carousel .mune-tab .children>ul");
//	muneTab.css("width",muneTabUl.width()*muneTabUl.length+2+"px");
		
		for (var i=0;i<muneTab.length;i++) {
			muneTab.eq(i).css("width",muneTab.eq(i).children().length*muneTabUl.width()+"px")
		};
	liTab.hover(function(){
		idx=$(this).index();
		muneTab.hide();
		muneTab.eq(idx).show()
		liTab.removeClass("active");
		$(this).addClass("active");
	},function(){
		liTab.removeClass("active");
		muneTab.hide()
	});
	muneTab.hover(function(){
		idx2=$(this).index();
		muneTab.eq(idx).show()
		liTab.removeClass("active");
		liTab.eq(idx2).addClass("active");
	},function(){
		liTab.removeClass("active");
		muneTab.hide()
	});
	
	
	
	
	//小米明星单品部分
	
	var mxdpUl=$(".mxdp .box ul");
	var mxdpLi=$(".mxdp .box ul li");
	var mxdpSpan=$(".mxdp .span span");
	var mxdpSpanActive=$(".mxdp .span span.active");
	var timer2=null;
	var idx2=0;
	var colorArr=["yellow","red","orange","green","#ff6700","blue","orange","red","green","#ff6700"];
	
	mxdpUl.css("width",(mxdpLi.width()+14)*mxdpLi.length+"px");
	for (var i=0;i<mxdpLi.length;i++) {
		mxdpLi.eq(i).css("border-color",colorArr[i]);
	};
	
	
	function startTimer2(){
		clearInterval(timer2);
		timer2=setInterval(function(){
			idx2=(idx2+1)%2;
			console.log(idx2);
			mxdpUl.animate({left:(-1240*idx2)+"px"},800)
			mxdpSpan.removeClass("active").eq(idx2).addClass("active");
		},10000);
	};
	startTimer2();
	
	
	mxdpSpan.eq(0).click(function(){
		if (idx2==0) {
			idx2=1;
		} else{
			return;
		};
		mxdpUl.animate({left:(-1240*idx2)+"px"},600);
		mxdpSpan.removeClass("active").eq(idx2).addClass("active");
		startTimer2();
	});
	mxdpSpan.eq(1).click(function(){
		if (idx2==0) {
			return;
		} else{
			idx2=0;
		};
		mxdpUl.animate({left:(-1240*idx2)+"px"},600);
		mxdpSpan.removeClass("active").eq(idx2).addClass("active");
		startTimer2();
	});
});