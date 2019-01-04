// event handeler
document.getElementById("taskInputForm").addEventListener('submit', saveTask);
console.log("about to start saveTask  ");
function saveTask(e) {
  console.log('Started save task');
  var taskDesc = document.getElementById('taskDescInput').value;
  var taskPriority = document.getElementById('taskPriorityInput').value;
  var taskSubject = document.getElementById('taskSubjectInput').value;
  var taskId = chance.guid();
  var taskStatus = "Unfinished";

  var task = {
    id: taskId,
    description: taskDesc,
    priority: taskPriority,
    subject: taskSubject,
    status: taskStatus
  };
  if (localStorage.getItem('tasks') == null) {
    var tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  document.getElementById("taskInputForm").reset();

  fetchtasks();

  e.preventDefault();
  console.log('end of saveTask')
}
function fetchtasks() {
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  var tasksListe = document.getElementById('tasksList');

  tasksListe.innerHTML = '';


  for (var i = 0; i < tasks.length; i++) {
    // get variables
    var id = tasks[i].id;
    var desc = tasks[i].description;
    var prior = tasks[i].priority;
    var subj = tasks[i].subject;
    var status = tasks[i].status;
    //html output
    tasksList.innerHTML +=
      '<div class="well">' +
      '<h6> Task id:'  + id + '</h6>' +
      '<p><span class = "label label-info ">' +
      status +
      '</span></p>' +
      '<h3>' +
      desc +
      '</h3>' +
      '<p><span class = "glyphicon glyphicon-time "></span>' +
      prior +
      '</span></p>' +
      '<p><span class = "glyphicon glyphicon-user "></span>' +
      subj +
      '</span></p>' +
      // making button for done and remove function.
      '<a href="#" onclick ="setStatusDone(\'' +
      id +
      '\')"class="btn btn-warning">Mark done</a>' +
      '<a href="#" onclick="deleteTask(\'' +
      id +
      '\')" class="btn btn-danger">Remove</a>' +
      "</div>";
  }
  console.log("innerHtml ended ");
}
