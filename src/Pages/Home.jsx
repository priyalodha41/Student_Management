import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-7xl h-screen">

        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left md:mt-0 mt-10">
            <h1 className="md:text-4xl font-bold mb-4 text-3xl">
              Student Course Management System
            </h1>

            <p className="text-gray-300 mb-8">
              Manage student records, course enrollments, and performance easily using this modern React application.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Link
                to="/add"
                className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add Student
              </Link>

              <Link
                to="/students"
                className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                View Students
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/images/Banner-img.png"
              alt="Student Illustration"
              className="w-full max-w-7xl"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
