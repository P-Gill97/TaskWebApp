function fetchtasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  var tasksListe = document.getElementsById("tasksList");

  tasksList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    // get variables
    var id = tasks[i].id;
    var desc = tasks[i].Description;
    var prior = tasks[i].Priority;
    var subj = tasks[i].Subject;
    var status = tasks[i].status;
    //html output
    tasksList.innerHTML +=
      '<div class="well">' +
      "<h6> Task id: " +
      id +
      "</h6>" +
      '<p><span class = "label label-info ">' +
      status +
      "</span></p>" +
      "<h3>  " +
      desc +
      "</h3>" +
      '<p><span class = "glyphicon glyphicon-time "></span>' +
      Priority +
      "</span></p>";
    '<p><span class = "glyphicon glyphicon-user "></span>' +
      Subject +
      "</span></p>" +
      // making button for done and remove function.
      '<a href="#" onclick ="setStatusDone(\''+id+'\')"class="btn btn-warning">Mark done</a>' +
      '<a href="#" onclick="deleteTask(\''+id+'\')" class="btn btn-danger">Remove</a>'+
      '</div>';

      ;
  }
}
