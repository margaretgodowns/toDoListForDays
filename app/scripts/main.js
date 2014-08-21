$(document).ready(function(){
  toDo.init();
});

var toDo = {
  url: "http://tiy-fee-rest.herokuapp.com/collections/margeTodo",
  init: function(){
    this.initStyling();
    this.initEvents();
  },
    initStyling: function(){
      toDo.getTask();
      $(".itemsLeft").prepend($(".active").length + " ")

    },
    initEvents: function(){
      $(".downArrow").on("click", function(event){
        event.preventDefault();
        $(".homeTodo").toggleClass("hide");
      });

      $(".homeTodo").on("submit", function(event){
        event.preventDefault();
        var newTask = {
          task: $(".taskEnter").val(),
          active: true,
        };
        console.log(newTask);
        toDo.createTask(newTask);
        $(".taskEnter").val("");
      });
    },

render: function (template, data, $el){
  var markup = _.template(template, data);
  $el.html(markup);
},


getTask: function (){
  $.ajax({
    url: toDo.url,
    type: 'GET',
    success: function (response) {
      var task = window.task = response;
      toDo.render(taskTmpl, task, $(".allTask"));
    }
  });
},

createTask: function (newTask){
  $.ajax({
    url: toDo.url,
    data: newTask,
    type: 'POST',
    success: function(response){
          toDo.getTask();

        }
      });
    },
    deleteTask: function(taskId){
      $.ajax({
        url: toDo.url + "/" + taskId,
        type: 'DELETE',
        success: function () {
          toDo.getTask();
        }
      });
    },
    updateTask: function(taskId, updatedTask){
      $.ajax({
        url: toDo.url + "/" + taskId,
        type: 'PUT',
        data: updatedTask,
        success: function () {
          toDo.getTask();
        }
      });
    }
};
