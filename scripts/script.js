// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });


$("button").click(function(){
    $.getJSON("https://gist.githubusercontent.com/jm-2017/141ff99966a67eac70f2c3d91aa2615f/raw/286bf0d70f58895624e265232bcaf2b9f486a02d/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
