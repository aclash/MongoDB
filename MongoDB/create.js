conn = new Mongo();
db = conn.getDB("project");
db.developers.drop();

var developersIDs = new Array()
for (i = 0; i < 14; i++) {
  developersIDs[i] = ObjectId()
}

db.developers.insertMany([
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

 db.bugs.drop();
 bug1 = ObjectId()
 bug2 = ObjectId()
 bug3 = ObjectId()
 bug4 = ObjectId()
 bug5 = ObjectId()
 bug6 = ObjectId()
 db.bugs.insertMany([
      { _id: bug1, belong: [ developersIDs[0],  developersIDs[1] ], priority: "S", status: "to do" },
      { _id: bug2, belong: [ developersIDs[2] ], priority: "A", status: "doing" },
      { _id: bug3, belong: [ developersIDs[3], developersIDs[7], developersIDs[8] ], priority: "B", status: "done" },
      { _id: bug4, belong: [ developersIDs[4] ], priority: "C", status: "to do" },
      { _id: bug5, belong: [ developersIDs[5] ], priority: "A", status: "doing" },
      { _id: bug6, belong: [ developersIDs[6] ], priority: "S", status: "doing" }
   ]);

db.tasks.drop();
task1 = ObjectId()
task2 = ObjectId()
task3 = ObjectId()
task4 = ObjectId()
task5 = ObjectId()
db.developers.insertMany([
      { _id: task1, type: "GamePlay", hasBugs: [bug1, bug2], status: "to do" },
      { _id: task2, type: "GameEngine", hasBugs: [bug3], status: "doing" },
      { _id: task3, type: "Network", hasBugs: [bug4], status: "done" },
      { _id: task4, type: "Animation", hasBugs: [bug5], status: "to do" },
      { _id: task5, type: "UI", hasBugs: [bug6], status: "doing" }
   ]);


db.teams.drop();
team1 = ObjectId()
team2 = ObjectId()
db.teams.insertMany([
      { _id: team1, manager: ["ana"], designer: ["ana", "cc"], programmer: ["bob", "cindy"], artist: ["jack", "zoey"], tasks: [task1, task2] },
      { _id: team2, manager: ["neo"], designer: ["smith", "mike"], programmer: ["han", "robin"], artist: ["tony", "dan"], tasks: [task3, task4, task5] }
   ]);
