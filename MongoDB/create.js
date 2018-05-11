conn = new Mongo();
db = conn.getDB("project");

var developersIDs = new Array();
for (var i = 0; i < 14; i++) {
    developersIDs[i] = ObjectId();
}

db.developers.drop();
result = db.developers.insertMany([
    { _id: developersIDs[0], type: "designer", name: "ana" },
    { _id: developersIDs[1], type: "programmer", name: "bob" },
    { _id: developersIDs[2], type: "artist", name: "jack" },
    { _id: developersIDs[3], type: "manager", name: "mark" },
    { _id: developersIDs[4], type: "designer", name: "cc" },
    { _id: developersIDs[5], type: "programmer", name: "cindy" },
    { _id: developersIDs[6], type: "artist", name: "zoey" },
    { _id: developersIDs[7], type: "manager", name: "neo" },
    { _id: developersIDs[8], type: "designer", name: "smith" },
    { _id: developersIDs[9], type: "programmer", name: "han" },
    { _id: developersIDs[10], type: "artist", name: "tony" },
    { _id: developersIDs[11], type: "designer", name: "mike" },
    { _id: developersIDs[12], type: "programmer", name: "robin" },
    { _id: developersIDs[13], type: "artist", name: "dan" }
]);
print('Result for insert all developers.');
printjson(result);

db.bugs.drop();
bug1 = ObjectId()
bug2 = ObjectId()
bug3 = ObjectId()
bug4 = ObjectId()
bug5 = ObjectId()
bug6 = ObjectId()
result = db.bugs.insertMany([
    { _id: bug1, belong: [{ id: developersIDs[0] }, { id: developersIDs[4] }], priority: "S", status: "to do" },
    { _id: bug2, belong: [{ id: developersIDs[1] }], priority: "A", status: "doing" },
    { _id: bug3, belong: [{ id: developersIDs[5] }, { id: developersIDs[2] }, { id: developersIDs[6] }], priority: "B", status: "done" },
    { _id: bug4, belong: [{ id: developersIDs[9] }], priority: "C", status: "to do" },
    { _id: bug5, belong: [{ id: developersIDs[10] }], priority: "A", status: "doing" },
    { _id: bug6, belong: [{ id: developersIDs[13] }], priority: "S", status: "doing" }
]);
print('Result for insert all bugs.');
printjson(result);

db.tasks.drop();
task1 = ObjectId()
task2 = ObjectId()
task3 = ObjectId()
task4 = ObjectId()
task5 = ObjectId()
result = db.tasks.insertMany([
    { _id: task1, name: "task1", type: "GamePlay", hasBugs: [{ id: bug1 }, { id: bug2 }], status: "to do", manager: "Mark" },
    { _id: task2, name: "task2", type: "GameEngine", hasBugs: [{ id: bug3 }], status: "doing", manager: "Mark" },
    { _id: task3, name: "task3", type: "Network", hasBugs: [{ id: bug4 }], status: "done", manager: "neo" },
    { _id: task4, name: "task4", type: "Animation", hasBugs: [{ id: bug5 }], status: "to do", manager: "neo" },
    { _id: task5, name: "task5", type: "UI", hasBugs: [{ id: bug6 }], status: "doing", manager: "neo" }
]);
print('Result for insert all tasks.');
printjson(result);

db.teams.drop();
team1 = ObjectId()
team2 = ObjectId()
result = db.teams.insertMany([
    { _id: team1, name: "team1", manager: [{ name: "mark" }], designer: [{ name: "ana" }, { name: "cc" }], programmer: [{ name: "bob" }, { name: "cindy" }], artist: [{ name: "jack" }, { name: "zoey" }], tasks: [{ id: task1 }, { id: task2 }] },
    { _id: team2, name: "team2", manager: [{ name: "neo" }], designer: [{ name: "smith" }, { name: "mike" }], programmer: [{ name: "han" }, { name: "robin" }], artist: [{ name: "tony" }, { name: "dan" }], tasks: [{ id: task3 }, { id: task4 }, { id: task5 }] }
]);
print('Result for insert all teams.');
printjson(result);
