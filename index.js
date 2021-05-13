// Add your code here
  function submitData(){
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        const newItem = document.createElement("div");
        newItem.innerHTML = "rando";
        document.body.append(newItem);
      
    })
    .catch(function(error) {
      const errorMsg = document.createElement("div");
      errorMsg.innerHTML = error.message;
      document.body.append(errorMsg);
    });
  }
  submitData();