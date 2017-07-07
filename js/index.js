$(document).ready(function(){
  var souInt=$(".headTab-sou input[type='text']");
  var boxInt=$(".headTab-sou .int-box");
  var souDiv=$(".headTab-sou label div");
  var menuDiv=$(".head-tab .headTab-sou .menu");
  var boxDiv=$(".head-tab .headTab-sou .box ");
  
  boxInt.hover(function(){
  	souInt.css("border-color","#b0b0b0");
  	souDiv.css("border-color","#b0b0b0")
  },function(){
  	souInt.css("border-color","#e0e0e0");
  	souDiv.css("border-color","#e0e0e0")
  });
  
  souDiv.hover(function(){
  	souInt.css("border-color","#b0b0b0")
  },function(){
  	souInt.css("border-color","#e0e0e0")
  });
  
  souInt.focus(function(){
  	souInt.addClass("active");
  	souDiv.addClass("active");
  	menuDiv.css("display","block")
  	boxDiv.hide(0.1)
  });
  souInt.blur(function(){
  	souInt.removeClass("active");
  	souDiv.removeClass("active");
  	menuDiv.css("display","none")
  	boxDiv.show(0.1)
  });
  
  
  
  });