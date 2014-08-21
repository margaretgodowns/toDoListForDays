var taskTmpl = [

  "<%_.each(task, function(element, index, list){ %>",
  "<ul>",
  "<% if (element.active === 'false'){ %> ",
    "<li class = \"done\" data-itemid=\"<%= element._id %>\"><img class = 'check' src='../images/checkmark.png'><%=element.item%><img class = 'xMark' src = '../images/xMark.png'></li>"
    "<form class = \"updateTodo hide\">",
    "<input class= \"updateTask\" type= \"text\" placeholder= \"Make changes here\" required>",
    "<input class= \"updateButton\" type= \"submit\" value= \"Update\">",
    "</form>",
  "</ul>",
    "<% } else { %>",
  "<ul>",
    "<li class = \"active\" data-itemid= \"<%= element._id %>\"> <img class= 'check' src='../images/checkmark.png'><%=element.item%> <img class= 'xMark' src='../images/xMark.png'></li>",
    "<form class= \"updateTodo hide\">",
      "<input class= \"updateTask\" type= \"text\" placeholder=\"Make changes here\" required>",
      "<input class= \"updateButton\" type= \"submit\" value= \"Update\",
    "</form>",
  "</ul>"

  "<% } %>",

].join("\n");
