Studies related to reference type field in firebase.

example to get referenced field data:

`const a = await e.data().myFKField.get()`

example to insert a reference field in firestore:
```
// creates a ref type field
const ref = firebase.firestore().doc(e.data().path) 

// adding in collection, a new register, using the reference type
firebase.firestore().collection('teste').add({ ref, name: 'agora vai' })
```

PS: Don't try to pass just the string path, because it won't work.

Good luck
