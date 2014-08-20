$(document).ready(function(){
  toDo.init();
});

var toDo = {
  init: function(){
    this.initStyling();
    this.initEvents();
  },
    initStyling: function(){
      toDo.getTasks
    }
    initEvents: function(){
      $("form").on("submit", function(event){
        event.preventDefault();
        var newTask = {
          task: $(".taskEnter").val()
        };

        toDo.createTask(newTask);
      });

url:'http://tiy-fee-rest.herokuapp.com/collections/margeToDo',
getTasks: function (){
  $.ajax({
    url: toDo.url,
    type: 'GET',
    success: function (response) {
      var tasks = window.posts = response;
      toDo.render(tasksTmpl, tasks, $("section"));
    }
  });
},


    createTask: function (newTask){
      $.ajax({
        url: toDo.url,
        data: newTask,
        type: 'POST',
        success: function(response){
          toDo.getTasks();

        }
      });
    },
    deleteTask: function(taskId){
      $.ajax({
        url: toDo.url + "/" + postId,
        type: 'DELETE',
        success: function () {
          toDo.getTasks();
        }
      });
    },
    updateTask: function(taskId, updatedTask){
      $.ajax({
        url: toDo.url + "/" + taskId,
        type: 'PUT',
        data: updatedTask,
        success: function (response) {
          //something goes here
          console.log(response);
          toDo.getTasks();
        }
      });
    }
}
