const request=require('request');
const args=process.argv.slice(2);
const fs=require('fs');
request(args[0],(error,response,body)=>{
  console.log('error',error);
  console.log('statusCode:',response && response.statusCode);
  const content=body;
  fs.writeFile(args[0],content,err=>{
    if(err){
      console.error(err);
      return;
    }
    //console.log('file written sucesfully')
  })
  fs.stat(argv[0],(err,stats)=>{
    if (err) {
      console.log('file does not exist');
    } else {
      console.log(`download and saved ${fs.stat.size} bytes to ${argv[0]}`)
    }
  })
})

