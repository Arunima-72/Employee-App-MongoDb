const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const employeeModel=require('../model/employeeData');

function employeeroutes(nav){


router.get('/',async(req,res)=>{
   try {
        const data=await employeeModel.find();
        res.render('home', { data ,nav,success:null,error:null});

        // res.status(200).send(data);
   } catch (error) {
    res.status(404).send('No data');
    
   } 
})
router.get('/addform',(req,res)=>{
    res.render('addEmployee',{nav})
})


router.post('/addEmployee',async (req,res) => {
    try {
        var item=req.body;
        const data=new employeeModel(item);
        await data.save();
        res.redirect('/basic');
        // res.status(200).send('Added ');
    } catch (error) {
        res.status(404).send('unsuccessful');
    }
    
})
router.get('/updateform/:id',async(req,res)=>{
    const data=await employeeModel.findOne({"_id":req.params.id})
    res.render('updateForm',{id:req.params.id,
        data,nav

    })
})
router.post('/edit/:id',async (req,res)=> {
    try {
        const id=req.params.id;
        await employeeModel.findByIdAndUpdate(id,req.body);
        // res.status(200).send('Update Success')
        res.redirect('/basic')
    } catch (error) {
        res.status(404).send('Update failed')
    }
    
})
router.get('/delete/:id',async (req,res)=> {
    try {
        const id=req.params.id;
        await employeeModel.findByIdAndDelete(id);
        //  res.status(200).send('delete Successfully')
        res.redirect('/basic')

    } catch (error) {
        res.status(404).send('not deleted')
    }
})

return router
}
module.exports=employeeroutes