// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });


$("button").click(function(){
    $.getJSON("https://gist.github.com/jm-2017/d323b2a1c963d83216abc89878dcff10", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
