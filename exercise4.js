fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const totalCompleted = json.reduce((cnt,todo) => todo.completed?cnt+1:cnt,0) // Complete this code
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });