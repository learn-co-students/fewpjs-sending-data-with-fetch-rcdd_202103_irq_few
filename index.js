// Add your code here
const API_URL = "http://localhost:3000/users";

function submitData(name, email) {
  return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
      })
    })
    .then(response => response.json())
    .then(json => document.body.append(json.id))
    .catch(err => document.body.append(err.message));
}
