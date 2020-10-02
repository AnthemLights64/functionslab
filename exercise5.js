fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((cnt,todo) => {
        todo.completed ? cnt.push({userId:todo.userId, title:todo.title}) : cnt;
        return cnt;    
     },[]) // Complete this code
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });