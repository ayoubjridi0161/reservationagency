import React from 'react'

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault()
  }
  return (
    <main className='pb-10 pt-36'>

    <div className='p-5  mx-auto bg-gray-200 drop-shadow-lg  w-5/6 border border-transparent rounded-md'>
        <div className='flex flex-col w-[640px] mx-auto gap-3'>
        <h1 className='self-start text-3xl font-bold font-lalezar'>Contact</h1>
        <p className='text-2xl font-gurajada '>Have a question or need help with something? simply use the form below to get in touch.</p>
        <p className='text-[11px] opacity-65'>Note: We usually reply within 24 hours (sometimes a lot sooner), but if you don&apos;t hear from us please check your spam/junk folder or reach out again from an alternate email.</p>
        <form onSubmit={submitForm} className= ' border border-transparent rounded-md text-white text-[21px] font-lalezar bg-[#555555] flex flex-col p-10' >
            <label className='mb-4' htmlFor='name'>Name</label>
            <input className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' type='text' id='name' name='name' />
            <label className='mb-4' htmlFor='email'>Email</label>
            <input className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' type='email' id='email' name='email' />
            <label className='mb-4' htmlFor='name'>Category</label>
            <select className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' name='options' id='options'>
            <option value='0'>-</option>
            <option value='general'>I have a general question</option>
            <option value='suggestion'>I have a suggestion or a feedback</option>
            <option value='abuse'>I&apos;d like to report abuse or a violation of content policy</option>
            <option value='other'>other</option> 
            </select>
            <label className='mb-4' htmlFor='subject'>Subject</label>
            <input className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' type='text' id='subject' name='subject' />
            <label className='mb-4' htmlFor='message'>Message</label>
            <textarea className='border rounded-md border-transparent bg-[#787878]' id='message' name='message'></textarea>
            <button className='border w-1/3 border-transparent bg-[#787878] rounded-md mt-4 self-center p-2 text-2xl' type='submit'>Send Message </button>
        
        </form>
        </div>
    </div>
    </main>


  )
}

export default Contact