function updateoutput(){
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>"
  +$("#csspanel").val()+"</style></head><body>"+$("#htmlpanel").val()+"</body></html>");
  document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());
}
$(".toggleButton").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");
  var clickedbutton=$(this).attr("id")+"panel";
  $("#"+clickedbutton).toggleClass("hidden")
  $(".panel").width($(window).width()/$(".active").length-10);
});
$(".toggleButton").hover(function(){
  $(this).addClass("highlightedButton");
},function(){
  $(this).removeClass("highlightedButton");
});
$(".panel").height($(window).height()-$("#topbar").height()-20);
$(".panel").width($(window).width()/2-10);
updateoutput();
$("textarea").on('change keyup paste',function(){
  updateoutput();
});
