
Promise.resolve('hello world')
  .then(data => {
    return data.toUpperCase();
  })
  .then(data => {
    console.log(data);
  })