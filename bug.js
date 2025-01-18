```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.find({ age: { $gt: 25 } }, { _id: 0, name: 1, email: 1 }).limit(10).toArray((err, docs) => {
  if (err) throw err;
  console.log(docs);
});

// The issue might be caused by incorrect projection or query
```