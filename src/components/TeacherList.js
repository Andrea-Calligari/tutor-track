import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherList = ({ teachers, onTeacherSelect, }) => {
    const navigate = useNavigate();

    const handleTeacherSelected = (id) => {
        if (teachers && onTeacherSelect) {
            onTeacherSelect(id);
            console.log("redirect details")
            navigate(`/teachers/details/${id}`);
        }
    }

    return (
        <div className='conatiner-sm px-8'>
            <h1 className='font-bold text-5xl p-5 text-center mb-8'>TutorTrack Teachers !</h1>
            <div className=" cursor-pointer flex flex-row flex-wrap gap-4 justify-start items-stretch">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className=" card-list w-64 h-34 text-white rounded-xl hover:-rotate-6 flex flex-col justify-between">
                        <div className="  px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">{teacher.name}</div>
                            <p className="text-white text-base">
                                {teacher.short_description}
                            </p>
                        </div>
                        <div className="  px-6 pt-4 pb-2">
                            <button className="  hover:bg-green-900  font-semibold py-2 px-4 rounded" onClick={() => handleTeacherSelected(teacher.id)}>
                                View Teacher Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherList
