I have a node.js app using mongodb and mongoose and express. the front end is in svelte.

I save a question in data base and it gives success but the question is not updated in the database why ?

here is svelte component
<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
//@ts-nocheck
import {PageWrapper} from "$lib/cmp";
import { BASE_URL,onMount,toast,goto,chqLogin } from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import PageHeading from './PageHeading.svelte';
import ThreeButtons from "./ThreeButtons.svelte";
import GridPanel from "./GridPanel.svelte";
import GlobalPanel from "./GlobalPanel.svelte";
import SPPanel from "./SPPanel.svelte";
import getNewCol from "./getNewCol.js";
let grid = {bgColor: "#293544", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }
let showPanel = "gridPanel"
let data = {};
let rows = [[]]; //[[]]
rows[0].push(getNewCol());


async function save(){
  try{
       debugger; 
       const question =  {_id :'650b94b4d750929738a4526c' ,board:"FBISE" , class:9 ,chapter:1, exercise: "1.2", questionNo : 1,part:"i",finalized : false,filename : "fbise_cl_9_ch_1_ex_1.2_q_1_pt_1" , eqs : []};
       question.global = grid;
       question.rows = rows;
       /////////////////////////////////////// 
       const token = localStorage.getItem("token");
       const response = await fetch(`${BASE_URL}/upload_math`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token,question})
        });
        if (response.ok) {
            toast.push('Data uploaded successfully');
        }else {
              toast.push('Response not ok');
        } 
      }catch (e) {
              toast.push('Unknown Error');
      }
}
</script>

<PageWrapper>
<Nav />
<PageHeading />

<ThreeButtons bind:showPanel={showPanel} />

<div>
{#if showPanel == "globalPanel"}
<GlobalPanel bind:grid={grid} />
{/if}
{#if showPanel == "SBPanel"}
<SPPanel />
{/if}

<GridPanel  {grid} {save} bind:rows={rows}/>

</div>



<br>
<br>
<br>
<br>
<br>
</PageWrapper>

here is the node.js api "upload_math" route

require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');

const nonAuthRouter = express.Router();

const {MathQuestion} = require("../models/mathQuestion.js");
const {FBISE9th} = require("../models/mathQuestion.js");
const Teacher = require("../models/teacher.js");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
nonAuthRouter.post("/add_question" , async function(req,res) {
  try {
  debugger;
  const question  = req.body.question;
  const admin = verifyAdmin(req);

  if (!admin){
     return res.status(500).json({ message: "Not Authorised" });
  }else {
  await FBISE9th.create(question);
     return res.status(200).json({ message: "Question Added" });
  }
  
  } catch(error) {
    return res.status(400).json({msg : 'unknown error!'  });
  }
});
/////////////////////////////////////////////////
nonAuthRouter.get("/get_question" , async function(req,res) {
  try {
  // debugger;
  const quizId  = req.query.id;
  
    const mathQuestion = await FBISE9th.findById( quizId );
      if (mathQuestion == null){
        return res.status(404).json({ msg: "Item not found" });
      }      
      return res.status(200).json({ mathQuestion, msg: "success" });

  } catch(error) {
    return res.status(400).json({msg : 'unknown error!'  });
  }
});
///////////////////////////////////////////////////////////////////////
nonAuthRouter.post("/upload_math" , async function(req,res) {
try{
    debugger;
    const question = req.body.question;
    const options = { new: false, upsert: false }; 
    await FBISE9th.findByIdAndUpdate( question._id , question,options);

    return res.status(200).json({status : "ok"});
            // console.log(subscribers);
}catch(error){
        return res.status(400).json({status : "error" , msg:"failed to save question"   });
}
});
////////////////////////////////////////////////////////
nonAuthRouter.post("/backup", async function (req, res) {
  try {
   const admin = verifyAdmin(req);

  if (!admin){
     return res.status(500).json({ message: "Not Authorised" });
  }
    const questions = await FBISE9th.find({ });
    const total_questions = await FBISE9th.countDocuments();
    return res.status(200).json({ questions,total_questions, message: "success" });

  } catch (error) {
    // console.error(error);
    return res.status(500).json({ msg: 'Unknown error!' });
  }
});
nonAuthRouter.get("/math_fbise", async function (req, res) {
  try {
    // debugger;
    const questions = await FBISE9th.find({ filledBy: { $in: [null, ""] } });
    const total_questions = await FBISE9th.countDocuments();
    return res.status(200).json({ questions,total_questions, message: "success" });

  } catch (error) {
    // console.error(error);
    return res.status(500).json({ message: 'Unknown error!' });
  }
});

nonAuthRouter.post("/all_filled", async function (req, res) {
  try {
    const questions = await FBISE9th.find({ filledBy: { $nin: [null, ""] } });
    return res.status(200).json({ questions, message: "success" });

  } catch (error) {
    return res.status(500).json({ message: 'Unknown error!' });
  }
});

nonAuthRouter.get("/math_syllabus/:status", async function (req, res) {
  try {
    // debugger;
    const statusIncomming  = req.params.status;
    
    const questions = await FBISE9th.find({ status : statusIncomming });

    return res.status(200).json({ questions, message: "success" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unknown error!' });
  }
});
nonAuthRouter.post("/filledByMe", async function (req, res) {
  try {
    debugger;
    const teacher_name  = req.body.teacher_name;
    //--check login token later
    const token  = req.body.token;
    
    const questions = await FBISE9th.find({ filledBy : teacher_name });

    return res.status(200).json({ questions, msg: "success" });

  } catch (error) {
    // console.error(error);
    return res.status(500).json({ msg: 'Unknown error!' });
  }
});
nonAuthRouter.get("/getex", async function (req, res) {
  try {
    const boardParam = req.query.board;
    const exerciseParam = req.query.exercise;

    if (!boardParam || !exerciseParam) {
      return res.status(400).json({ msg: "Board and exercise parameters are required" });
    }

    const mathQuestions = await MathQuestion.find({ board: boardParam, exercise: exerciseParam });

    if (mathQuestions.length === 0) {
      return res.status(404).json({ msg: "No matching math questions found" });
    }

    return res.status(200).json({ mathQuestions, msg: "success" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Unknown error!' });
  }
});
nonAuthRouter.get("/get_chapter", async function (req, res) {
  try {
    const chapter = req.query.chapter;
    const questions = await MathQuestion.find({  chapter });

    return res.status(200).json({ questions, message: "success" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Unknown error!' });
  }
});
////////////////////////////////////////////////////////
//http://localhost/mathboard?board=FBISE
nonAuthRouter.get("/mathboard", async function (req, res) {
  try {
    const boardParam = req.query.board;
    // const exerciseParam = req.query.exercise;

    if (!boardParam) {
      return res.status(400).json({ msg: "Board parameter is required" });
    }

    const mathQuestions = await MathQuestion.find({ board: boardParam });

    if (mathQuestions.length === 0) {
      return res.status(404).json({ msg: "No matching math questions found" });
    }

    return res.status(200).json({ mathQuestions, msg: "success" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Unknown error!' });
  }
});
////////////////////////////////////////////////////////
nonAuthRouter.post("/teacher_login", async function (req, res) {
  try {
  // debugger;
    const email = req.body.email;
    const passwordPlain = req.body.password;

    // Input validation
    if (!email || !passwordPlain) {
      return res.status(400).json({ msg: "Email and password are required" });
    }
    // if there is no status in the table it will return "teacher" as per the default in the Schema
    const user = await Teacher.findOne({ email });
    // console.log("user", user);
    if (user == null) {
      return res.status(404).json({ msg: "Email address not found" });
    }

    if (await bcrypt.compare(passwordPlain, user.password)) {
      const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });

    const status = user.status;
    // const teacher_name = extractEmailPrefix(email);
    const teacher_name = email ;

    res.set("Authorization", `Bearer ${token}`);
    return res.status(200).json({ msg: "Login successful", token: token ,status,teacher_name});
    } else {
      return res.status(401).json({  msg: "Invalid email or password" });
    }
  } catch (error) {
    // console.log(error);
    return res.status(500).json({  msg: "Login failed", error });
  }
});
////////////////////////////////////////////////////////
nonAuthRouter.post("/delete_question", async function (req, res) {
  try {
  debugger;
  const questionId  = req.body.id;
  const admin = verifyAdmin(req);

  if (!admin){
     return res.status(500).json({ message: "Not Authorised" });
  }
  //////////////////////////////////// 
  const mathQuestion = await FBISE9th.findById( questionId );
      if (mathQuestion == null){
     return res.status(404).json({ message: "Item not found" });
      } else {
        if (!mathQuestion.eqs || mathQuestion.eqs.length > 0){
          return res.status(500).json({ message: "Question has content" });
        }else {
          await FBISE9th.findByIdAndRemove(questionId);
          return res.status(200).json({ message: "Question Deleted" });
        }
      }     

  } catch(error) {
    return res.status(400).json({msg : 'unknown error!'  });
  }
});

////////////////////////////////////////////////////////
module.exports = nonAuthRouter;


function extractEmailPrefix(email) {
    let atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.substring(0, atIndex);
    } else {
        return 'name not found';
    }
}


function verify(req) {
 try {
  //  debugger;
    const token = req.headers.authorization.split(" ")[1]; // Extract the token from the 'Authorization' header
    if (!token) {
      return res.status(403).json({ msg: "A token is required for authentication" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Add user to request object
    return { user: decoded.user };
  } catch (error) {
    return false;
  }
}

function verifyAdmin(req) {
 try {
  //  debugger;
    const token = req.headers.authorization.split(" ")[1]; // Extract the token from the 'Authorization' header
    if (!token) {
      return false;
    }
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    if ( decodedUser.user.status !== "admin" ){
      return false;
    }else {
      return decodedUser.user;
    }
  ///////////////////////  
  } catch (error) {
    return false;
  }
}

here is quesrtion schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spfsItem = new Schema({
  code: { // Code string
    type: String,
    required: true,
  },
  type: { // Type of content, can be 'html', 'text', or 'code'
    type: String,
    enum: ['html', 'text', 'code' , 'image','img','table','tbl'],
    required: true
  }
});

///////////////////////
const eqSchema = new Schema({
  step: { // Step number
    type: Number,
    required: true
  },
  type: { // Type of content, can be 'text' or 'code'
    type: String,
    enum: ['text', 'code'],
    required: true,
    default: 'code'
  },
  code: { // Code string
    type: String,
    required: true
  },
  showSPinFS: { // Code string
    type: Boolean,
    required: false
  },
  MPWidth: { // Code string
    type: Number,
    required: true,
    default : 8
  },
  eqStartTime: { // Time number
    type: Number,
    required: false,
    default :0
  },
  eqEndTime: { // Time number
    type: Number,
    required: false,
    default :0
  },
  fsStartTime: { // Time number
    type: Number,
    required: true,
    default :0
  },
  fsEndTime: { // Time number
    type: Number,
    required: true,
    default :0
  },
  sp:{
	type:[spfsItem] ,
	required:true ,
	default :[]
	}, 
  fs:{
	type:[spfsItem] ,
	required:true ,
	default :[]
	} 
});
const rowSchema = new Schema({
startTime : {
    type: Number,
    required:true,
	  default :0 
  },
endTime : {
    type: Number,
    required:true,
	  default :0 
  },
content : {
    type: String,
    required:true,
	  default :0 
  },
bl : {
    type: Boolean,
    required:true,
	  default :false 
  },
bt : {
    type: Boolean,
    required:true,
	  default :false 
  },
br : {
    type: Boolean,
    required:true,
	  default :false 
  },
bb : {
    type: Boolean,
    required:true,
	  default :false 
  },
type : {
    type: String,
    required:true,
     enum: ['code', 'text'],
	  default :'code' 
  },
});

const globalSchema = new Schema({
bgColor : {
    type: String,
    required:true,
	  default :"#293544" 
  },
fontSize : {
    type: Number,
    required:true,
	  default : 1 
  },
padding : {
    type: Number,
    required:true,
	  default :1 
  },
margin : {
    type: Number,
    required:true,
	  default :1 
  },
cellBorderColor : {
    type: String,
    required:true,
	  default :"#e52222" 
  },
cellFontColor : {
    type: String,
    required:true,
	  default :"white" 
  },
showGrid : {
    type: Boolean,
    required:true,
	  default :false, 
  },
gridColor : {
    type: String,
    required:true,
	  default :"#384556" 
  },
});

const gridSchema = new Schema({
  global: { 
    type: globalSchema,
    required: true
  },
  rows: { // Type of content, can be 'text' or 'code'
    type: [rowSchema],
    required: true,
    default: 'code'
  },
  sp:{
	type:[spfsItem] ,
	required:true ,
	default :[]
	}, 
  fs:{
	type:[spfsItem] ,
	required:true ,
	default :[]
	} 
});

///////////////////////////////////////////
const MathSchema = new Schema({
  board: { // Board name, can be one of the specified values
    type: String,
    enum: ['Punjab', 'Pakhtoonkhwa', 'Sind', 'Balochistan', 'FBISE'],
    required: true
  },
  class: { // Class number
    type: Number,
    required:true,
	  default :9 
  },
  chapter:{ // Chapter number 
	type:Number ,
	required:true , 
	},
	exercise:{// Exercise string 
	type:String ,
	required:true ,
	},

	questionNo:{// Question number 
	type:Number ,
	required:true ,
	},
	part:{// Part string 
	type:String ,
	required:true ,
	},
	teacherComments:{
	type:String ,
	required:false ,
	},
	adminComments:{ 
	type:String ,
	required:false ,
	},
  // unloced = starting , the admin can lock it means now it can not be edited and on final we can add time and it is checked.
	status:{
	  type: String ,
	  required:true ,
    enum: ['unlocked', 'locked', 'final'],
    required: true,
    default : 'unlocked'
	},
	free:{// Part string 
	  type: Boolean ,
	  required:true ,
    defaul : true //change it to false later
	},
	filename: {
    type: String,
    required: true,
    unique: true
    },
	filledBy: {
    type: String,
    required: false
    },
	eqs:{
	type:[eqSchema] ,
	required:true ,
	default :[]
  }, 
	grid:{
	type: gridSchema ,
	required:true ,
	default :{}
  } 
  
});

const MathQuestion = mongoose.model('Math', MathSchema,"matht");
const FBISE9th = mongoose.model('Math', MathSchema,"fbise9th");

module.exports = {MathQuestion,FBISE9th};


