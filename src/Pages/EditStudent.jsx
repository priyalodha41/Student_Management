import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const EditStudent = () => {

    const [input,Setinput] =useState({
            name:"",email:"",course:"", gender:"",joiningDate:"",address:""
     });
    const handleChange =(e)=>{
    Setinput({...input,[e.target.name||e.target.id]:e.target.value});
    }

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        if(id){
            let students=JSON.parse(localStorage.getItem("Students")) || [];
            let editstudents =students.find((student)=>{
                return student.id == id;
            })
            Setinput(editstudents);
        }
    },[])

    const handleUpdate=((e)=>{
        e.preventDefault();
        let students=JSON.parse(localStorage.getItem("Students")) || [];
        
        let newstudents=students.map((student)=>{
            if(student.id ==id){
                return input
            }
            else{
                return student;
            }
        })  
        localStorage.setItem("Students",JSON.stringify(newstudents));
        handleToast("Student edited successfully ✏️");
        navigate('/students')
    })

     const handleToast = (message) => {
     Toastify({
      text: message,
      duration: 2000,
      gravity: "top",
      position: "right",
      backgroundColor: "#1f2937",
      close: true,
    }).showToast();
  };




  return (
     <div className="bg-white dark:bg-gray-900 h-auto">
        <div className="max-w-screen-xl py-18 mx-auto pt-10">
          <div className="flex justify-center">
                  <h1 className="text-white text-3xl font-semibold">Edit Student</h1>
            </div>
            <form className="max-w-sm mx-auto mt-10" onSubmit={handleUpdate}>
            <div className="mb-5 sm:px-0 px-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Name:</label>
                <input type="text" id="name" value={input.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
            </div>
            <div className="mb-5 sm:px-0 px-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Email:</label>
                <input type="email" id="email" value={input.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5 sm:px-0 px-5">
                <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your respective course :</label>
                <select id="course" class="bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                    dark:focus:border-blue-500" value={input.course} onChange={handleChange}>
                <option value="">Select Course</option>
                <option value="React">React</option>
                <option value="Python">Python</option>
                <option value="Data Science">Data Science</option>
                <option value="Web Development">Web Development</option>
                </select>

            </div>
            <div className="mb-5 sm:px-0 px-5"> 
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender :</label>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white" value="input.gender">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                        <input type="radio" id="male"
                        name="gender"
                        value="Male"
                        checked={input.gender === "Male"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                        focus:outline-none focus:ring-0 
                        dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label for="male" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center ps-3">
                        <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={input.gender === "Female"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                        focus:outline-none focus:ring-0 
                        dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label for="female" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                        </li>
                    </ul>

                    </div>
            <div className="mb-5 sm:px-0 px-5">
            <label htmlFor="joiningDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Admission Date :
            </label>
            <input
                type="date"
                id="joiningDate"
                name="joiningDate"
                value={input.joiningDate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
            />
            </div>
            <div className="mb-5 sm:px-0 px-5">
                 <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Address :
            </label>
                <textarea
                id="address"
                name="address"
                rows="3"
                maxLength={100}         
                value={input.address}
                onChange={handleChange}
                placeholder="Enter student address (max 100 characters)"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                resize-none" 
                ></textarea>
            </div>

         
           <div className="text-center sm:px-0 px-5 pb-10">
                 <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none
                  focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
                   dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Update</button>
           </div>

            </form>


        </div>
    </div>
  )
}

export default EditStudent