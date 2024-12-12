import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AppRouter from './AppRouter';
import NavBar from './components/NavBar';
import BookingForm from './components/BookingForm';
import Summary from './pages/Summary';
import Loading from './components/Loading';


function App() {
  const [teachers, setTeacherList] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  const [finalConfirmed, setFinalConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/teachers.json");
        const data = response.data;
        const [teachersResponse, bookingsData] = await Promise.all([response, data]);
        const teachersData = teachersResponse.data;
        setTeacherList(teachersData);
        setBookings(bookingsData);
        const storedTeacher = localStorage.getItem('selectedTeacher');
        if (storedTeacher) {
          const parsedTeacher = JSON.parse(storedTeacher);
          const completeTeacher = data.find(teacher => teacher.id === parsedTeacher.id);
          if (completeTeacher) {
            setSelectedTeacher(completeTeacher)
          }
        }
        const storedBooking = localStorage.getItem('bookings');
        if (storedBooking) {
          setBookings(JSON.parse(storedBooking));
        }
      } catch (error) {
        console.log("error data", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);

        }, 3000)
      }
    };
    fetchData();
  }, []);

  useEffect(() => {

    if (finalConfirmed) {
      navigate(`/booking-list`);
      setFinalConfirmed(false);
      setStep(1);
    }
  }, [finalConfirmed, navigate, selectedTeacher]);

  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter(booking => booking.booking_id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  }

  const handleTeacherSelect = (id) => {
    const teacherSelect = teachers.find(teacher => teacher.id === parseInt(id));
    setSelectedTeacher(teacherSelect);
    localStorage.setItem('selectedTeacher', JSON.stringify(teacherSelect));
  }

  const handleBookingConfirm = (teacherId, date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep(3);
  }
  const handleEdit = () => {
    setStep(2);
  }

  const handleFinalConfirm = () => {
    const newBooking = {
      booking_id: bookings.length + 1,
      teacher_id: selectedTeacher.id,
      name: selectedTeacher.name,
      date: selectedDate,
      time: selectedTime,
      status: "confirmed"
    }

    const upDateBookings = ([...bookings, newBooking])
    setBookings(upDateBookings);
    localStorage.setItem('bookings', JSON.stringify(upDateBookings));
    setFinalConfirmed(true)
  };

  return (

    <div className="App">
      <NavBar />
      <main>
        {isLoading ? (<Loading onLoading={setIsLoading} />) : (
          <>
            {step === 1 && teachers && <AppRouter teachers={teachers} onTeacherSelect={handleTeacherSelect} selectedTeacher={selectedTeacher} onBookingConfirm={handleBookingConfirm} bookings={bookings} handleDeleteBooking={handleDeleteBooking} />}

            {step === 2 && selectedTeacher && (
              <BookingForm selectedTeacher={selectedTeacher} onBookingConfirm={handleBookingConfirm} existingBookings={bookings} />
            )}
            {step === 3 && selectedTeacher && (
              <Summary
                selectedTeacher={selectedTeacher}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onConfirm={handleFinalConfirm}
                onEdit={handleEdit}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
