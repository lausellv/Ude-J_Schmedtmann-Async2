const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);
  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    console.log(res.body.message);
  });
});

// // console.log(res.body.message);

// //       fs.writeFile('dog-img.txt', res.body.message, (err) => {
// //         if (err) return  console.log(err.message);
// //         console.log('Random dog name saved');
// //       });
// //   }).catch(err => {
// //     console.log(err.message);
// //   });
// // });

// // a promise executes a future value.

// //readFile only needs the file
// const readFilePro = file => {
//   return new Promise((resolve, reject)=>{
// fs.readFile (file, (data, err)=>{
//   if (err) reject('I cld not find it 😪') // the value that wld go into the catch method
// resolve(data); // the value the promises returns in the then handler
//   })
// })
// }

// //writeFile needs both the file and the data that will be written in the readFile
// const writeFilePro = (file, data)=>{
//   return new Promise((resolve, reject)=>{
//     fs.writeFile (file, data, err=>{
//       if (err) reject('Cld not write file 😪')
//       resolve('success');  // in this case we don't have any data to return
//       // a promise doesn't always have to return a meaningful }value
//     });
//   });
//   };

// readFilePro(`${__dirname}/dog.txt`)
// .then(data => {
//   console.log(`Breed: ${data}`);
//   return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
// })
// .then(res => {
//   console.log(res.body.message);
//   return writeFilePro('dog-img.txt', res.body.message);
// })
// .then(() => {
//   console.log('Random dog image saved to file!');
// })
// .catch(err => {
//   console.log(err);
// });
