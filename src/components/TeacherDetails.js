import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';


const TeacherDetails = ({ teachers }) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const teacher = teachers.find(teacher => teacher.id === parseInt(id));
  const handleGoHome = () => {
    navigate("/");
  }

  if (teacher) {
    return (
      <div className="container-md text-center p-8">
        <div className=" teacher-card ">
          <h1 className='font-semibold text-3xl'>
            {teacher.name}
          </h1>
          <p>
            {teacher.subject}
          </p>
          <span>
            {teacher.availability["days"]}
          </span>
          <span className=' '>
            {teacher.availability['hours']}
          </span>
          <span>
            ${teacher.price_per_lesson}
          </span>
          <span className="flex justify-center align-center gap-3">
            <button className=' bg-red-900 hover:bg-red-400 font-bold py-2 px-2 rounded border-trasparent w-40' onClick={handleGoHome}>Go Home</button>
            <button onClick={() => navigate('/booking')} className=' bg-green-800 hover:bg-green-600 font-bold py-2 px-2 rounded border-trasparent w-40' >Booking a Lesson </button>
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <ErrorPage />
    )
  }
}

export default TeacherDetails
