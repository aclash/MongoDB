//User Story4, As a programmer, I fixed the bug6, so I modify this bug's status from "doing" to "done"
print("********************Fourth:************************")
print("Status before modified:");
result = db.bugs.find({ _id: bug6 }, { _id: 0, status: 1 });
result.forEach(printjson);
db.bugs.updateOne(
    { _id: bug6 },
    {
        $set: { status: "done" },
    }
)
print("Status after modified:");
result = db.bugs.find({ _id: bug6 }, { _id: 0, status: 1 })
result.forEach(printjson);

//User Story5, As team2's manager, I find bug5 is difficult to fix, so I want to add two people robin and han to fix it.
print("********************Fifth:************************")
print("Developers' ID before adding:");
result = db.bugs.find({ _id: bug5 }, { _id: 0, belong: 1 });
result.forEach(printjson);
db.bugs.updateOne(
    { _id: bug5 },
    { $push: { belong: { $each: [{ id: developersIDs[9] }, { id: developersIDs[12] }] } } }
)
print("Developers'name after adding:");
result = db.bugs.find({ _id: bug5 }, { _id: 0, belong: 1 });
var myDocument = result.hasNext() ? result.next() : null;
if (myDocument) {
    var devs = myDocument.belong;                         //get team1's task array
    devs.forEach(function (item) {
        var temp = db.developers.find({ _id: item.id }, { name: 1, _id: 0 });     //use each taskID to find out status of each task
        temp.forEach(printjson);
    }
    );
}

//User Story6, As a manager of team2, I found all the task's bugs have been fixed, so I want to delete all the bugs in the collection of task, and modify the status to "done".
print("********************Sixth:************************")
print("Bug list before modified:");
result = db.bugs.find({ _id: bug6 }, { _id: 0, status: 1 });
result.forEach(printjson);
db.bugs.updateOne(
    { _id: bug6 },
    {
        $set: { status: "done" },
    }
)
print("Bug list after modified:");
result = db.bugs.find({ _id: bug6 }, { _id: 0, status: 1 })
result.forEach(printjson);
