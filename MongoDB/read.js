//User Story1, As a team1 manager, I want to know each task's status of team1 (done or doing or to do)
print("********************First:************************")
print("task's status in team1:")
var result1 = db.teams.find({ _id: team1 });                 //get team1 document
var myDocument = result1.hasNext() ? result1.next() : null;
if (myDocument) {
    var myTasks = myDocument.tasks;                         //get team1's task array
    myTasks.forEach(function (item) {
        var temp = db.tasks.find({ _id: item.id }, { name: 1, status: 1, _id: 0 });     //use each taskID to find out status of each task
        temp.forEach(printjson);
    }
    );
}

//User Story2: As a project manager, I want to know whether the level-S bugs have already assigned to someone if so show their names.
print()
print("********************Second:************************")
print("They are trying to fix the level-S bugs! Don't worry, be happy~~:")
var result2 = db.bugs.find({ priority: "S" });                  //get level-S bug document
while (result2.hasNext()) {
    var myDocument = result2.next();
    var dev = myDocument.belong;                              //get the objectID of people who are designed to this bug
    dev.forEach(function (item) {
        var temp = db.developers.find({ _id: item.id }, { name: 1, type: 1, _id: 0 });  //show their names accoring to objectID
        temp.forEach(printjson);
    }
    );
}

//User Story3: As a project manager, I want to know which task contains the most bug, and then the manager who manages this task will be fired.
print()
print("********************Third:************************")
var result3 = db.tasks.find();
var bugNum = 0;
var name = "";
while (result3.hasNext()) {                      //traversal each bugs array of tasks document
    var myDocument = result3.next();
    var temp = myDocument.hasBugs.length;
    if (temp > bugNum) {                         //compare the number of bugs, get the max count
        bugNum = temp;
        name = myDocument.manager;
    }
}
print(name + ", you have the most bugs! You will be fired!!!");
