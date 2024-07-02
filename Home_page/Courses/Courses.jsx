
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Courses = () => {
  const [showAll, setShowAll] = useState(false);
  const token = localStorage.getItem('token');
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    axios.get("https://learn-it-zl9y.onrender.com/api/users/courses")
      .then((res) => setCourses(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  
  const userid = localStorage.getItem("userid");

  const handleCart = async (courseID) => {
    axios.post("https://learn-it-zl9y.onrender.com/api/users/addtocart", { courseID, userid })
      .then((res) => {
        toast.success("Course added successfully...");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const defaultCourseCount = 6;
  const coursesToShow = showAll ? courses : courses.slice(0, defaultCourseCount);

  const handleLoadMore = () => setShowAll(true);
  const handleSeeLess = () => setShowAll(false);

  return (
    <div className="Courses-cont container mx-auto p-4 md:w-[80vw]">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Let the journey of self-learning begin</h1>
      <div className="courses-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesToShow.map((course, index) => (
          <div key={index} className="course-card bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="course-img w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <div className="text-gray-700 mb-4">Price: <span className="text-red-600 font-semibold text-lg">{course.price}</span> Rs</div>
              <Link to={`/Courses/${course._id}`}>
                <button className="course-btn py-2 px-4 bg-purple-600 text-white rounded-md w-full mb-2 hover:bg-purple-700 transition duration-300">Get this Course</button>
              </Link>
              {token && (
                <button
                  onClick={() => handleCart(course._id)}
                  className="py-2 px-4 bg-black text-white rounded-md w-full hover:bg-red-600 transition duration-300"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {!showAll ? (
          <Link to={'/Courses'}>
             <button onClick={handleLoadMore} className="py-2 px-4 bg-purple-600 text-white text-xl rounded-md hover:bg-purple-700 transition duration-300">View More</button>
          </Link>
        ) : (
          <button onClick={handleSeeLess} className="py-2 px-4 bg-purple-600 text-white text-xl rounded-md hover:bg-purple-700 transition duration-300">See Less</button>
        )}
      </div>
    </div>
  );
};

export default Courses;
