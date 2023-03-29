import React, { useState } from 'react'

function FuncCompo() {
    const [Name, setName]=useState('');
    const [Department, setDepartment]=useState('');
    const [Rating, setRating]=useState('');
    const [Data, setData]=useState([]);

    
      const handleChange =(e) => {
        setName(e.target.name === 'Name' ? e.target.value : Name);
        setDepartment(e.target.name === 'Department' ? e.target.value : Department);
        setRating(e.target.name === 'Rating' ? e.target.value : Rating);
      
  
        // setName({[e.target.Name]: e.target.value})
        // setDepartment({[e.target.Department]: e.target.value})
        // setRating({[e.target.Rating]:e.target.value})

       console.log(Name,Department,Rating);
    }


    const handleSubmit = (e)=> {
      e.preventDefault()
        const DataObj={
           Name : Name,
           Department :  Department,
           Rating : Rating,
        }
        // Data.push(DataObj)
        // setData({Data});
        setData([...Data, DataObj]);
        

        setName('');
        setDepartment('');
        setRating('');
        // console.log(Data);
    }



  return (
    <>
    <div className='container'>
      <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
      <label>Name:</label>
      <input type="text" name="Name" value={Name} placeholder='Enter your name' className="name" onChange={handleChange}/>
      <br/>

      <label>Department:</label>
      <input type="text" name="Department" value={Department} placeholder='Enter your department' className="department" onChange={handleChange}/>
       <br/>

      <label >Rating:</label>
      <input type="text" name="Rating" value={Rating} placeholder='Enter the rating' className="rating" onChange={handleChange}/>
      <br/>

      <button type='button' onClick={handleSubmit}>Submit</button>
      </div>
      
      <div className='conatiner2'>
      {Data.map((item,index) =>{
        return(
          <div className='conatiner3' key={index}>
          <h2 >
            Name:{item.Name} |
            Department:{item.Department} |
            Rating: {item.Rating}
          </h2>
          </div>
        )
      })}
       </div>
    
    </>
  )
}

export default FuncCompo