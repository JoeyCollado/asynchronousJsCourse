//fetch = allow us to make http request to web server = {'<URL>', {}} 


fetch('https://dummyjson.com/products/1', {})
.then(response => console.log(response))
.catch(error => console.log(error))