$("#general").hide()
$("#flowers").hide()
$("#food").hide()
$("#dress").hide()

$("#generalbtn").click(function() {
  $("#general").show(), $("#food").hide(), $("#dress").hide(), $("#flowers").hide();
});

$("#flowersbtn").click(function() {
  $("#flowers").show(), $("#food").hide(), $("#dress").hide(), $("#general").hide();
});

$("#foodbtn").click(function() {
  $("#food").show(), $("#flowers").hide(), $("#dress").hide(), $("#general").hide();
});

$("#dressbtn").click(function() {
  $("#dress").show(), $("#flowers").hide(), $("#food").hide(), $("#general").hide();
});
