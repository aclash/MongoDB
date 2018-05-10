// Script to create a MongoDB database of house records
conn = new Mongo();
db = conn.getDB("houses");

db.houses.drop();

result = db.houses.insert({address: {street:"16576 Russell Ct", city:"San Leandro", state:"CA", zip:"94578"}, ForSale:true, size:2020, bedrooms:5, price:669000});

print('Result for "insert a house with address 16576 Russell Ct, San Leandro, CA 94578 that has 2020 square feet and 5 bedrooms. It is on sale for $669,000"');
printjson( result );

// document to show below query works
db.houses.insert({address: {street:"2000 Main St", city:"Hayward", state:"CA", zip:"94541"}, ForSale:true, size:1420, bedrooms:3, price:499000});

result = db.houses.find({"address.city":"Hayward", "address.state":"CA", bedrooms:{$gte:3}, ForSale:true, price:{$lt:500000}});
print('Result for desired houses:');

// Using the code from the "Write Scripts for the mongo Shell" tutorial from doc.mongodb.org
while ( result.hasNext() ) {
   printjson( result.next() );
}

// Of course, at the time you are reading this, chances are the correct answer would be
// "No such houses exist" ...
