import React, { useState, useEffect } from 'react'

const BookingList = ({ bookings, onDeleteBooking }) => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    if (bookings.length > 0) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [bookings]);

  return (
    <>
      <h1 className="text-center text-5xl font-bold  ">Booking List </h1>
      <div className="container py-8 px-10 text-center mt-11 flex justify-start align-center flex-wrap gap-5">
        {
          bookings.length > 0 && bookings.map((booking, index) => (
            <div key={index} className={`w-auto shadow-xxl bg-green-500 rounded-lg overflow-hidden mb-4 cursor-pointer ${index === bookings.length - 1 && bounce ? 'animate-bounce' : ''}`}>
              <div className="px-6 py-4 flex flex-col justify-between align-center flex-wrap">
                <h2 className="font-bold text-gray-700 text-xl mb-2">{booking.name}</h2>
                <p className="text-gray-700 text-base">Data: {booking.date}</p>
                <p className="text-gray-700 text-base">Ora: {booking.time}</p>
              </div>
              <button onClick={() => onDeleteBooking(booking.booking_id)} className="mt-2 px-2 mb-3 bg-red-500 text-white rounded">Delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default BookingList
