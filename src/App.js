import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { createContext, useState } from 'react';
import Add from './Pages/Add';
import employeesData from './Pages/Data';
const data = createContext()
function App() {

  const [ishome, setishome] = useState(true)
  const [isabout, setisabout] = useState(false)



  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [femail, setemail] = useState('')
  const [sal, setsal] = useState('')
  const [date, setdate] = useState('')

  const [click, setclick] = useState()
  const [click2, setclick2] = useState()
  const [click3, setclick3] = useState()
  const [click4, setclick4] = useState()
  const [click5, setclick5] = useState()

  console.log(fname)
  const gotohome = () => {
    setisabout(false)
    setishome(true)
    setclick(fname)
    setclick2(lname)
    setclick3(femail)
    setclick4(date)
    setclick5(sal)

    const l = employeesData.length + 1;


    employeesData.push({
      firstName: fname,
      lastName: lname,
      email: femail,
      salary: sal,
      date: date

    })


  }

  const handle = () => {
    setishome(false)
    setisabout(true)
  }
  return (
    <>
      <data.Provider value={{ fname, lname, femail, sal, date, setdate, setemail, setlname, setfname, setsal, click, click2, click3, click4, click5 }}>
        {
          ishome && !isabout &&
          <Home handle={handle}></Home>


        }
        {
          !ishome && isabout &&
          <Add gotohome={gotohome}></Add>
        }

      </data.Provider>

    </>
  );
}

export default App;
export { data }
