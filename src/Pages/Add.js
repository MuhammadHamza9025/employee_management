import React, { useContext } from 'react'
import { data } from '../App'

const Add = ({ gotohome }) => {

    const { fname, lname, femail, sal, date, setdate, setemail, setfname, setlname, setsal
    } = useContext(data)
    return (
        <>
            <h1>Add New Employees</h1>
            <div className='inputfileds'>
                <input type="text" placeholder='First Name' onChange={(e) => setfname(e.target.value)} value={fname} required />
                <input type="text" placeholder='Last Name' onChange={(e) => setlname(e.target.value)} />
                <input type="email" placeholder='E-mail Address' onChange={(e) => setemail(e.target.value)} />
                <input type="number" placeholder='Salary..' onChange={(e) => setsal(e.target.value)} />
                <input type="date" placeholder='' onChange={(e) => setdate(e.target.value)} />
            </div>

            <button onClick={gotohome}>Add New Entry </button>
        </>
    )
}

export default Add
