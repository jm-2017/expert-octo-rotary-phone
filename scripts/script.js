// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });


$("button").click(function(){
    $.getJSON("https://github.com/jm-2017/expert-octo-rotary-phone/blob/main/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
