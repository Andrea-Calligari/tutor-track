import React from 'react'

const Summary = ({ selectedTeacher, selectedDate, selectedTime, onConfirm, onEdit }) => {
    return (
        <div className='summary'>
            <h2 className='font-bold text-3xl'> Riepilogo Prenotazione</h2>
            <p>Insegnante: {selectedTeacher.name}</p>
            <p>Materia: {selectedTeacher.subject}</p>
            <p>Data: {selectedDate}</p>
            <p>Ora: {selectedTime}</p>
            <div className='flex justify-center align-center gap-4'>
                <button className=' bg-green-800 hover:bg-green-600 font-bold py-2 px-2 rounded border-trasparent w-40' onClick={onConfirm}>Conferma</button>
                <button className=' bg-red-900 hover:bg-red-400 font-bold py-2 px-2 rounded border-trasparent w-40' onClick={onEdit}>Modifica</button>
            </div>
        </div>
    )
}

export default Summary
