fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((acc,todo) => {
        !todo.completed ? acc.push({userId:todo.userId, title:todo.title}) : acc;
        return acc;    
     },[]) // Complete this code
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });