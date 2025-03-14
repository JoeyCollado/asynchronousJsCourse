//fetch = allow us to make http request to web server = {'<URL>', {Method property and request we want}} 


fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    description: "Iphone 19",
    price: "1000",
    rating: "9/10"

  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))