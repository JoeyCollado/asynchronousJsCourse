//fetch = allow us to make http request to web server = {'<URL>', {Method property and request we want}} 
//post = get data
//put = update existing product

/*
fetch('https://dummyjson.com/products/add', {
  method: 'POST', //method to use
  headers: { //content type we want to create
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ //include data we want
    description: "Iphone 19",
    price: "1000",
    rating: "9/10"

  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))
*/

fetch('https://dummyjson.com/products/1', {
  method: 'PUT', //method to use
  headers: { //content type we want to create
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ //include data we want
    title: "iphone 19",
    description: "Changed to iphone 19",
    price: "1000",
    rating: "9/10"

  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))