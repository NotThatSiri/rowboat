$('.topbar-noti').click(function (event) {
  event.preventDefault();

  $.post("/notification/ack/" + $(event.currentTarget).attr('id'));
  $(event.currentTarget).remove();
});

function notify(level, msg) {
  $(".alert").remove();
  var div = $('<div class="alert alert-' + level + '">' + msg + '</div>');
  $("#page-wrapper").prepend(div);
  div.delay(2000).fadeOut();
}
