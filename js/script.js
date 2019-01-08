var testResults = function(one, two , three ,four , five ,){
  return one + two + three + four + five ;
}

$(document).ready(function(){
  $(".begin").click(function(){
    $("#test").fadeToggle("slow");
    $(".a").fadeOut();
  });

  $("form#test").submit(function(event){
    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Q4 = parseInt($("input:radio[name=Q4]:checked").val());
    var Q5 = parseInt($("input:radio[name=Q5]:checked").val());
    var result = testResults(Q1, Q2 ,Q3, Q4, Q5);
    $(".b").fadeOut();
    $("#display").text("Your score is:" + result +"%");
      
    event.preventDefault();
    $(".final").show();
  }); 
});