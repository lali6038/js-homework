/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

$(function(){
  var $favList = $('#fav-list');

  $favList.on('click', 'li a.complete', function(){
    var $span = $(this).parent().find('span');
    $span.css('text-decoration', 'line-through');
    
  });

  $favList.on('click', 'li a.complete', function(){
   $(this).parent().remove();
  });

 
  $('#new-thing-button').on('click', function() {
    // get whatever the user has typed in
    var currentValue = $('#new-thing').val();

    var listItem = $('<li class="fav-thing"><span>' + currentValue + '</span> <a class="complete" href="#">Complete</a></li>');
    listItem.appendTo($favList);
    // or..
    // $favList.append(listItem);
  });
})