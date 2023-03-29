import React, { useState } from 'react'
import './CSS/form.css'

export default function FormToFill() {

  const [user, setUser] = useState({name:"", department:"", rating:""});
  const [array, setArray] = useState([]);

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value}); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.name, user.department ,user.rating);

    const ObjData = {
      name: user.name,
      dept: user.department,
      rating: user.rating,
    }
    setArray([...array, ObjData])
  
    console.log(array);
    
  }


  return (
    <div>
      <h1 className='form_heading' style={{ color: 'black' }}>EMPLOYEE FEEDBACK FORM</h1>
      <form className='form'>

        <label>Name: </label>
        <input type={Text} name={"name"} value={user.name} onChange={handleChange} />
        
        <br/>
        <label>Department: </label>
        <input type={Text} name={"department"} value={user.department} onChange={handleChange} />
        <br/>

        <label>Rating: </label>
        <input type={Number} name={"rating"} value={user.rating} onChange={handleChange} />
        <br/>

        <button type={'submit'} onClick={handleSubmit}>Submit</button>
      </form>

      <div className='parent'>
        {array.map((item, index) => {
          console.log(item.name, index);
          return (
            <div key={index} className='child'>
             
                Name: {item.name} | Department: {item.dept} | Rating: {item.rating}
             
            </div>
          )
        })}
      </div>
    </div>
  )
}
