import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DisplayStudent = () => {

 const [students,Setstudents] =useState([]);

 useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("Students"));
    Setstudents(data);
 },[])

const deleteStudent=((id)=>{
      let newstudents=students.filter((student)=>{
        return student.id !== id
      })

      Setstudents(newstudents);

      localStorage.setItem("Students",JSON.stringify(newstudents));
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
    
   <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-screen-xl py-25 mx-auto md:px-0 px-5">
          <div className="flex justify-between pt-10">
                  <h1 className="text-white sm:text-3xl text-xl font-semibold">Student List</h1>
                <Link to={'/add'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center
                dark:bg-blue-600 dark:hover:bg-blue-700
                 dark:focus:ring-blue-800">Add a New Student</Link>
            </div>
            
            <div className="relative shadow-md sm:rounded-lg mt-10 
                h-[70vh] 
                overflow-x-auto overflow-y-auto scroll-smooth">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Sr No.
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Name
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                     Email
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Course
                    </th>
                     <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Gender
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Joining Date
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Actions
                    <span className="sr-only">Delete</span>
                    <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>

                 {
                    students.map((student,idx)=>{
                        return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={student.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {idx+1}
                        </th>
                        <td className="px-6 py-4">
                            {student.name}
                        </td>
                        <td className="px-6 py-4">
                        {student.email}
                        </td>
                        <td className="px-6 py-4">
                          { student.course}
                        </td>
                        <td className="px-6 py-4">
                          { student.gender}
                        </td>
                        <td className="px-6 py-4">
                          { student.joiningDate}
                        </td>
                        <td className="px-6 py-4">
                          { student.address}
                        </td>
                        <td className="px-6 py-6 flex">
                        <Link to={`/editStudent/${student.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline ps-4"
                        onClick={
                          ()=>{
                            deleteStudent(student.id),
                           handleToast("Student deleted successfully 🗑️");
                          }
                        }>Delete</button>
                        </td>
                    </tr>
                    })
                 }
                
                </tbody>
            </table>
            </div>

        </div>
    </div>
  )
}

export default DisplayStudent