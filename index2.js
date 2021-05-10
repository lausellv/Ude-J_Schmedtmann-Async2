const fs = require('fs');
// const { resolve } = require('node:path');
const superagent = require('superagent');

//readFile only needs the file
const readFilePro = file => {
  return new Promise((resolve, reject)=>{
fs.readFile (file, (data, err)=>{
  if (err) reject('I cld not find it 😪') // the value that wld go into the catch method
resolve(data); // the value the promises returns in the then handler
  })
})
}

//writeFile needs both the file and the data that will be written in the readFile
const writeFilePro = (file, data)=>{
  return new Promise((resolve, reject)=>{
    fs.writeFile (file, data, err=>{
      if (err) reject('Cld not write file 😪')
      resolve('success');  // in this case we don't have any data to return 
      // a promise doesn't always have to return a meaningful }value
    });
  });
  };


// readFilePro(`${__dirname}/dog.txt`)
// .then(data=>{
//   console.log(`Breed: ${data}`);
//   return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
// }).then(res=>{
// console.log(res.body.message);
// return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(() =>{
//     console.log('Random dog name saved');
//   }).catch(err => {
//     console.log(err);
//   });

  readFilePro(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch(err => {
    console.log(err);
  });



// a promise executes a future value. 