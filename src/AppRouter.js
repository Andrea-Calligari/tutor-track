import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import TeacherDetails from './components/TeacherDetails';
import Home from './pages/Home';
import BookingList from './components/BookingList';
import ErrorPage from './pages/ErrorPage';
import BookingForm from './components/BookingForm';
const AppRouter = ({ teachers, onTeacherSelect, selectedTeacher, onBookingConfirm, bookings, handleDeleteBooking }) => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teachers" element={<TeacherList teachers={teachers} onTeacherSelect={onTeacherSelect} />} />
                <Route path='/teachers/details/:id' element={<TeacherDetails teachers={teachers} />} />
                <Route path="/booking" element={<BookingForm selectedTeacher={selectedTeacher} onBookingConfirm={onBookingConfirm} existingBookings={bookings} />} />
                <Route path="/booking-list" element={<BookingList bookings={bookings} onDeleteBooking={handleDeleteBooking} />}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default AppRouter
