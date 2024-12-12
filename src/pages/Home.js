import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className=' container-sm p-8'>
            <section >
                <h2>Trova il tuo insegnante ideale con TutorTrack</h2>
                <p>Prenota lezioni private con insegnanti qualificati in pochi clic</p>
                <button className='bg-transparent hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border border-green-500  rounded '><Link to="/teachers">Scopri di Più</Link></button>
            </section>
            <section >
                <h2>Benvenuti su TutorTrack</h2>
                <p>TutorTrack è la piattaforma leader per la prenotazione di lezioni private. Connettiti con insegnanti esperti in una vasta gamma di materie e competenze.</p>
                <p>Scegli il tuo insegnante, prenota una lezione e inizia ad apprendere. È semplice e veloce!</p>
            </section>
            <section >
                <h2>Perché scegliere TutorTrack?</h2>
                <div >
                    <h3>Insegnanti qualificati</h3>
                    <p>Tutti i nostri insegnanti sono verificati e altamente qualificati per garantire la migliore esperienza di apprendimento.</p>
                </div>
                <div >
                    <h3>Flessibilità</h3>
                    <p>Prenota lezioni in base ai tuoi orari e preferenze. Siamo qui per adattarci alle tue esigenze.</p>
                </div>
                <div >
                    <h3>Varietà di materie</h3>
                    <p>Offriamo lezioni in una vasta gamma di materie, dalle lingue straniere alla matematica, dalla musica alla programmazione.</p>
                </div>
            </section>
            <section>
                <h2>Cosa dicono i nostri studenti</h2>
                <div >
                    <p>"TutorTrack mi ha aiutato a migliorare le mie competenze in matematica. Gli insegnanti sono fantastici!" - Maria R.</p>
                </div>
                <div >
                    <p>"Grazie a TutorTrack ho trovato un insegnante di inglese che mi ha preparato per il mio esame IELTS." - Luca B.</p>
                </div>
            </section>


        </div>
    )
}

export default Home
