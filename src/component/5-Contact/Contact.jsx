import React, { useState,useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const inputEmail=useRef()
  const inputMsg=useRef()

  const [errors,setError]=useState([]);

  const validatForm=()=>{
    const EmailValue=inputEmail.current.value;
    const MsgValue=inputMsg.current.value;


    setError([])
    let formValid=true;
    if(EmailValue.trim()===''){
        setError(prevState=>{
          return [...prevState,'Email required']
        })
        formValid=false
    }
    else if(!EmailValue.match(/^\S+@\S+\.\S+$/)){
      setError(prevState=>{
        return [...prevState,'Email invalid']
      })
      formValid=false
  }

  if(MsgValue.trim()===''){
    setError(prevState=>{
      return [...prevState,'Message required']
    })
    formValid=false
}
 return formValid
  }

  const handleContact=(e)=>{
    if(!validatForm()){e.preventDefault()}
  }
    return (
    <div className='Contact flex'>
      
      {
      errors.length>0 ?
      <div className='error flex'>
        <strong>Error</strong>
        <ul>
            {errors.map((error,key)=>(<li key={key}>{error}</li>))}
        </ul>
      </div>
      :''
    }

      <form action="" className='flex'>
        <label htmlFor="">Email :</label>
        <input type="text" ref={inputEmail}/>

        <label htmlFor="">Message :</label>
        <textarea name="" id="" ref={inputMsg}></textarea>

        <button onClick={handleContact}>envoyer</button>

      </form>
    </div>
  )
}
