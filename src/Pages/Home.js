import React, { useState } from 'react'
import employeesData from './Data'
const Home = ({ handle }) => {

    const [rem, setrem] = useState(employeesData)
    const remove = (id) => {
        setrem(rem.filter((o, i) => id !== i))
    }
    return (
        <div>


            <h1>Employee Managemnet System</h1>

            <div className="tabledata">

                <h3>Data</h3>
                <table>


                    <tr>
                        <th className='bold' >Name</th>
                        <th className='bold'>E-mail</th>
                        <th className='bold'>Salary</th>
                        <th className='bold'>Date</th>
                        <th className='bold'>Remove/Edit</th>
                    </tr>
                    {
                        rem.length > 0 ?
                            rem.map((items, id) => {

                                return (
                                    <>
                                        <tr>
                                            <th>{items.firstName}  {items.lastName}</th>
                                            <th>{items.email}</th>
                                            <th>{items.salary}/- PKR</th>
                                            <th>{items.date}</th>
                                            <th><button onClick={() => remove(id)}>Delete</button></th>
                                        </tr>
                                    </>
                                )
                            })
                            : <h2> No data to Show</h2>
                    }

                </table>

                <div className="addbtn"><button className='add' onClick={() => handle()}>Add</button></div>
            </div>
        </div>
    )
}

export default Home
