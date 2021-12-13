const express = require('express')
const app = express()
const path=require("path");
const cors = require('cors');
const bodyParser = require('body-parser');

const analysis = require('./routes/analysis');

const PORT = process.env.PORT || 5000;

// app.set('view engine', 'ejs');

// app.use(express.static(path.resolve(__dirname,'public')));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',analysis);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})


// app.post('/upload', upload.single('upload'), (req, res) => {
//   if(req.file){

//     console.log("File name",req.file.filename)
//     const python = spawn('python', ['creator.py',`data/`+req.file.filename,'data/Trees/','100','100','public/Mosaic.jpeg'])

//     python.stdout.on('data', function (data) {
//       console.log('Pipe data from python script ...')
//       console.log(data.toString())
//     })
//     python.stdout.on('close', function (code) {
//         console.log('Closed with code ',code)
//         res.render('pages/image',{data: "Mosaic.jpeg"});
//       })
    

    
//   }else{
//     res.status(400).json({msg:"Img Not Received"})
//   }
// })


// app.get('/mosaic',(req,res)=>{
//   console.log("Mosaic Route")
//   res.render('pages/mosaic');
// })

// app.get('/age-gender',(req,res)=>{
//   console.log("Age-Gender Route")
//   res.render('pages/gad');
// })

// app.post('/upload-age-gender', upload.single('upload'), (req, res) => {
//   if(req.file){

//     console.log("File name",req.file.filename)
//     const python = spawn('python', ['gad.py',`data/`+req.file.filename])

//     python.stdout.on('data', function (data) {
//       try{
//         console.log('Pipe data from python script ...')
//         console.log(data.toString())
//       }catch(dataError){
//         console.log("DATA ERROR:",dataError)
//       }
//     })
//     python.stdout.on('close', function (code) {
//       try{
//         console.log('Closed with code ',code)
//         res.render('pages/gadImage',{data: "Person.jpeg"});
//       }catch(closeError){
//         console.log("CLOSE ERROR:",closeError)
//       }
//     })
    

    
//   }else{
//     res.status(400).json({msg:"Img Not Received"})
//   }
// })
// app.get('/auto-stackoverflow',(req,res)=>{
//   console.log("Age-Gender Route")
//   res.render('pages/stackOverflow',{data: ""});
// })

// app.post('/upload-py',upload_py.single('upload'),(req,res)=>{
//   if(req.file){

//     console.log("File name",req.file.filename)
//     const python = spawn('python', ['project3.py',`data/`+req.file.filename])
//     var output = ""
//     python.stdout.on('data', function (data) {
//       try{
//         console.log('Pipe data from python script ...')
//         output+=data.toString()
//       }catch(dataError){
//         console.log("DATA ERROR:",dataError)
//       }
//     })
//     python.stdout.on('close', function (code) {
//       try{
//         console.log('Closed with code ',code)
//         console.log("FINAL OUTPUT: ",output)
//         const outputUrl = output.split("'").filter(x=>x.length>5)
//         console.log(outputUrl.length)
//         res.render('pages/stackOverflow',{data: outputUrl})
//         // outputUrl.forEach(url=>res.redirect(301,url))
//         // res.render('pages/stackOverflow');
//       }catch(closeError){
//         console.log("CLOSE ERROR:",closeError)
//       }
//     })
    
//   }else{
//     res.status(400).json({msg:"Python file Not Received"})
//   }
// })

// app.get('/',(req,res)=>{
//   console.log("Home Route")
//   res.render('pages/index');
// })


