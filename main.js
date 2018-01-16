window.onload = function() {
  var current_date = new Date();

  document.getElementById('date').innerHTML = formated_date(current_date);
  document.getElementById('day').innerHTML = day_text(current_date.getDay());
};

function formated_date(date) {
  var day = date.getDate();
  var month = String("00" + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();

  return (year + '/' + month + '/' + day);
}

function day_text(day) {
  var texts = [
    'Still Friday',
    'The heaviest Friday',
    'It\'s f*cking Friday (c)Wild',
    'Small Friday',
    'Friday - 1',
    'Of course today is Friday',
    'Friday + 1'
  ];
  return texts[day];
}
