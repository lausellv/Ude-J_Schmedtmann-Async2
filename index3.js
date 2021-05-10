const fs = require('fs');
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
      resolve('success')  // in this case we don't have any data to return 
      // a promise doesn't always have to return a meaningful }value
    })
  })
  };