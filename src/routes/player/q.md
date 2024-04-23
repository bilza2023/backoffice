Lets talk about login systems in a online app.
i have created a login system for my web app. it is very simple but I am time and again told (by web tutorials) that i must use some pre-made system or use an app online to login and register my subscribers.

here are my questions :  What is considered as a good login system? 
I am using jwt to login my users.
this is

login function:
// @ts-nocheck
import {isLoginStore , isAdminStore, goto,BASE_URL,toast} from '$lib/util';
import validateString from "./validateString"
import validateEmail from "./validateEmail"

export default async function loginFn(email,password){

  // event.preventDefault();
  const emailError = validateEmail(email);
    if (emailError.status !== "ok"){
          toast.push('Not a valid email');  
      return;
    }

const passwordError = validateString(password,6,30);
    if (passwordError.status !== "ok"){
          toast.push('Not a valid password');  
      return;
    }

const response = await fetch( `${BASE_URL}/be/teacher_login` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 000`,
      },
      body: JSON.stringify( {email,password} )
    });

// const response = await ajaxPost( `${BASE_URL}/login` , {email,password});
    if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem("token", data.token);
        // localStorage.setItem("teacher_status", data.status);
        localStorage.setItem("teacher_name", data.teacher_name);
        isLoginStore.set(true);
            if (data.status == 'admin'){
              isAdminStore.set(true);
              localStorage.setItem("teacher_status", 'admin');
            }else {
              isAdminStore.set(false);
              localStorage.setItem("teacher_status", 'teacher');
            }
        goto("/");
  } else {
    isLoginStore.set(false);
    isAdminStore.set(false);
    const data = await response.json();
    toast.push(data.message);
  } 
  }

here is logout function

import {goto ,isLoginStore,isAdminStore} from '$lib/util';

export default function logout(){
    isLoginStore.set(false);
    isAdminStore.set(false);

    localStorage.removeItem("token");
    localStorage.removeItem("teacher_status");
    localStorage.removeItem("teacher_name");
    localStorage.removeItem("math_syllabus");
     
    goto('/login');
}


and here is my backend login route
backEndRouter.post("/teacher_login", async function (req, res) {
  try {
  // debugger;
    const email = req.body.email;
    const passwordPlain = req.body.password;

    // Input validation
    if (!email || !passwordPlain) {
      return res.status(400).json({ message: "Email and password are required" });
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
    return res.status(200).json({ message: "Login successful", token: token ,status,teacher_name});
    } else {
      return res.status(401).json({  msg: "Invalid email or password" });
    }
  } catch (error) {
    // console.log(error);
    return res.status(500).json({  msg: "Login failed", error });
  }
});


I know that i must not save the credentials openly in local storage and have them increpted in a cookie but other than that whats the problem ?
