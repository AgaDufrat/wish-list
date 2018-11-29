function addToList(item) {
  $('#items').append('<li>' + item + '<span class=\'label pending\'>Pending</span>' + '</li>')
};

$(document).on('click', '#add-to-list', function() {
  addToList( $('#item').val() );
  $('#item').val("");
  $('#item').focus();
});

$(document).on('click', '.label.pending', function() {
  var li_node = $(this).parent();
  li_node.find("span").remove();
  $(li_node).append("<span class='label success'>Done!</span>");
  li_node.addClass('completed');
});
