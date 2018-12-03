
$("#general").hide()
$("#flowers").hide()
$("#food").hide()
$("#dress").hide()

$("#generalcat").click(function() {
  $("#general").show(),
  $("#food").hide(),
  $("#dress").hide(),
  $("#flowers").hide(),
  $("#generalcat").hide(),
  $("#flowerscat").show(),
  $("#foodcat").show(),
  $("#dresscat").show();
});

$("#flowerscat").click(function() {
  $("#flowers").show(),
  $("#food").hide(),
  $("#dress").hide(),
  $("#general").hide()
  $("#generalcat").show(),
  $("#flowerscat").hide(),
  $("#foodcat").show(),
  $("#dresscat").show();
});


$("#foodcat").click(function() {
  $("#food").show(),
  $("#flowers").hide(),
  $("#dress").hide(),
  $("#general").hide(),
  $("#generalcat").show(),
  $("#flowerscat").show(),
  $("#foodcat").hide(),
  $("#dresscat").show();
});

$("#dresscat").click(function() {
  $("#dress").show(),
  $("#flowers").hide(),
  $("#food").hide(),
  $("#general").hide()
  $("#generalcat").show(),
  $("#flowerscat").show(),
  $("#foodcat").show(),
  $("#dresscat").hide();
});
