import React from 'react'
import './App.css'
import { SubmitHandler, useForm } from 'react-hook-form'


interface IForm {
  'e-mail':string
  'massage':string
}

function App() {

  const {register, handleSubmit, formState} = useForm<IForm>({mode: 'onChange',})

  const onSubmit:SubmitHandler<IForm> = (data) => {
    console.log(data)
  }

  const emailError = formState.errors['e-mail']?.message

  return (
   <div className='bg-white border-blue-300 sm:container md:w-96 border-2 rounded-xl m-4 mx-auto'>
      <h1 className='text-center text-3xl text-blue-300 font-semibold'>Form</h1>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <input className='border-blue-300 border-2 rounded-md m-3 text-gray-500 bg-slate-100' 
        type='text' placeholder='Email' {...register('e-mail',
        {required:'this field is requiered',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email'
          }
        })}/>
        {emailError && <p className='text-red-700 ml-3'>{emailError}</p>}
        <textarea className='border-blue-300 border-2 rounded-md m-3 text-gray-400 bg-slate-100' placeholder='massage'></textarea>
        <button className='bg-blue-300 w-16 m-2 font-semibold rounded-md mx-auto' type='submit'>submit</button>
      </form>
   </div>
  )
}

export default App
