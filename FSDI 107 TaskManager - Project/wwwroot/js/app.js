var isItImportant = false;

function toggleImportant() {
  console.log("Icon clicked!");

  if (isItImportant) {
    // change to non important
    isItImportant = false;
    $("#icon-important").removeClass("fas").addClass("far");
  } else {
    //change to important
    isItImportant = true;
    $("#icon-important").removeClass("far").addClass("fas");
  }
}

function saveTask() {
  console.log("saving!!");

  // get the values from the controls
  let title = $("#txtTitle").val();
  let desc = $("#txtDesc").val();
  let location = $("#txtLocation").val();
  let dueDate = $("#txtDueDate").val();
  let alert = parseInt($("#selAlert").val() || 0);

  //data validations
  // title error
  if (!title) {
    $("#errorTitle").removeClass("hide");

    // timer in js
    // 1param: what should do
    // 2param: how much time to wait (in milliseconds)

    setTimeout(function () {
      $("#errorTitle").addClass("hide");
    }, 6000);

    return; //get out of the function
  }

  // due date error
  if (!dueDate) {
    $("#errorDueDate").removeClass("hide");

    setTimeout(function () {
      $("#errorDueDate").addClass("hide");
    }, 6000);

    return; //get out of the function
  }

  // create an object
  let theTask = new Task(title, desc, isItImportant, dueDate, alert, location);

  // console log the object
  console.log(theTask);

  //send task to server
  $.ajax({
    url: "/api/saveTask",
    type: "POST",
    data: JSON.stringify(theTask),
    contentType: "application/json",
    success: function (res) {
      console.log("Server says", res);

      displayTask(res);
    },
    error: function(error) {
      console.error("Error saying", error);
    },
  });
}

function displayTask(task) {

  let alert = "";
  switch (task.alertText) {
    case 1:
      alert = "Don't Forget To:";
      break;
    case 2:
      alert = "Start:";
      break;
    case 3:
      alert = "Stop:";
      break;
    case 4:
      alert = "Don't Forget to Exercise:";
      break;
    case 5:
      alert = "Take 15:";
      break;
  }

  let class2 = task.status == 2 ? "task-done" : "";
  let doneIcon =
    task.status == 1
      ? `<i id="iDone" onclick="doneTask(${task.id})" class="far fa-check-square"></i>`
      : "";

  let syntax = `<div id="task${task.id}" class="task ${class2}">
      <div class="sec-1">  
        ${doneIcon}
        ${alert}    
        <i id="iDelete" onclick="deleteTask(${task.id})" class="far fa-trash-alt"></i>
        </div>
        
        <div class="sec-2">

          <div class="sec-title">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
          </div>

          <div class="sec-date">
            <label>${task.dueDate}</label>
          </div>

         <div class="sec-location">
            <label>${task.location}</label>
          </div>
        
        </div>
        
    </div>`;

  if(task.status == 1){
    $("#taskContainer").append(syntax);
  }
  else{
    $("#doneContainer").append(syntax);
  }
}

function deleteTask(id) {
  console.log("deleting the task: " + id);

  $.ajax({
    url: "/api/DeleteTasks/" + id,
    type: "DELETE",
    success: function () {
      console.log("Task removed from server");
      $("#task" + id).remove();
    },
    error: function (details) {
      console.log("Error removing", details);
    },
  });
}

function doneTask(id) {
  console.log("Done task: " + id);

  $.ajax({
    url: "/api/markDone/" + id,
    type: "PATCH",
    success: function (task) {
      $("#task" + id).remove();

      displayTask(task);
    },
    error: function (details) {
      console.log("Error removing", details);
    },
  });
}

function retrieveTasks() {
  $.ajax({
    url: "/api/getTasks",
    type: "GET",
    success: function(list) {
      console.log("Retrieved", list);

      for (let i=0; i< list.length; i++){
        let task = list[i];
        if (task.user === "ThadSiwecki") {
          displayTask(task);
        }
      }
    },
    error: function(err) {
      console.error("Error Reading", err);
    },
  });
}

function init() {
  console.log("Task Manager");

  // load data
  retrieveTasks();

  //hook events
  $("#icon-important").click(toggleImportant);
  $("#btnSave").click(saveTask);

  $("#btnDetails").click(function () {
    $("#details").toggle();
  });
}

window.onload = init;
