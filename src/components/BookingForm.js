import React, { useState } from 'react'

const BookingForm = ({ selectedTeacher, onBookingConfirm, existingBookings }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [error, setError] = useState('');
    // console.log(existingBookings);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setError('');
    }

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
        setError('');

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isAlreadyBooked = existingBookings.find((booking) => booking.date === selectedDate && booking.time === selectedTime);
        if (isAlreadyBooked) {
            setError("Date or Time already choosed !");
        } else {
            onBookingConfirm(selectedTeacher.id, selectedDate, selectedTime);
        }
    }
    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="border rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
                            Date:
                        </label>
                        <input value={selectedDate} onChange={handleDateChange} className=" text-black shadow  border rounded w-full py-2 px-3 leading-tight " id="date" type="date" placeholder="Select a Date..." />

                    </div>
                    <div className="mb-6 ">
                        <label className='block font-bold text-sm mb-2' htmlFor='time'>
                            Ora:
                            <select id="datimete" className='text-black w-full font-normal rounded py-2 px-3 leading-tight' value={selectedTime} onChange={handleTimeChange} required>
                                <option value="">Seleziona un'ora</option>
                                {selectedTeacher.availability["hours"].map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                            <div>{error && <div className='text-red-500 text-2xl'>{error}</div>}</div>

                        </label>
                        <button  type="submit" className="p-2 px-3 border rounded bg-green-900 hover:bg-green-600">Book</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BookingForm
