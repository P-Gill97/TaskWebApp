function fetchtasks(){
  var tasks = JSON.parse(localStorage.getItem('tasks'))
  var tasksListe = document.getElementsById('tasksList')

  tasksList.innerHTML = '';

  for(var i=0 ; i < tasks.length; i++ ){
    // get variables
    var id = tasks[i].id;
    var desc = tasks[i].Description;
    var prior = tasks[i].Priority;
    var subj = tasks[i].Subject;
    var status = tasks[i].status;
    //html output
    tasksList.innerHTML += '<div class="well">' +
                            '<h6> Task id: ' + id + '</h6>'+
                            '<p><span class = "label label-info ">' + status + '</span></p>'
  }
}
