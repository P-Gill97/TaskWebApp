function fetchIssues(){
  var tasks = JSON.parse(localStorage.getItem('tasks'))
  var tasksListe = document.getElementsById('tasksList')

  tasksList.innerHTML = '';

  for(var i=0 ; i < tasks.length; i++ ){
    var id = tasks[i].id;
    var desc = tasks[i].Description;
    var prior = tasks[i].Priority;
    var subj = tasks[i].Subject;
  }
}
