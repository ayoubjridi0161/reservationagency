import { useRef,useState } from 'react'
import { sendContactForm } from '../utils/apiFunctions'
import { TiTick } from "react-icons/ti";
const Contact = () => {
  const name = useRef()
  const email = useRef()
  const Category = useRef()
  const subject = useRef()
  const message = useRef()
  const [formStatus, setResponse] = useState()
  const submitForm = (e) => {
    e.preventDefault()
    const formData = {
      name: name.current.value,
      email: email.current.value,
      Category: Category.current.value,
      subject: subject.current.value,
      message: message.current.value
    }
    console.log(formData)
     setResponse(sendContactForm(formData))
  }
  return (
    <main className='pb-10 pt-36'>
      {
        formStatus == 201 ? 
        <div id="toast-default" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
    <TiTick />
    </div>
    <div className="ms-3 text-sm font-normal">Set yourself free.</div>
    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
  </div>
   : null

      }

    <div className='p-5  mx-auto bg-gray-200 drop-shadow-lg  w-5/6 border border-transparent rounded-md'>
        <div className='flex flex-col w-[640px] mx-auto gap-3'>
        <h1 className='self-start text-3xl font-bold font-halant'>Contact</h1>
        <p className='text-2xl font-gurajada '>Have a question or need help with something? simply use the form below to get in touch.</p>
        <p className='text-[11px] opacity-65'>Note: We usually reply within 24 hours (sometimes a lot sooner), but if you don&apos;t hear from us please check your spam/junk folder or reach out again from an alternate email.</p>
        <form onSubmit={submitForm} className= ' border border-transparent rounded-md text-white text-[21px] font-halant bg-[#555555] flex flex-col p-10' >
            <label className='mb-4' htmlFor='name'>Name</label>
            <input onChange={e => {e.currentTarget.focus}} ref={name} className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' type='text' id='name' name='name' />
            <label className='mb-4' htmlFor='email'>Email</label>
            <input onChange={e => {e.currentTarget.focus}} ref={email} className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' type='email' id='email' name='email' />
            <label className='mb-4' htmlFor='name'>Category</label>
            <select onChange={e => {e.currentTarget.focus}} ref={Category} className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' name='options' id='options'>
            <option value='0'>-</option>
            <option value='general'>I have a general question</option>
            <option value='suggestion'>I have a suggestion or a feedback</option>
            <option value='abuse'>I&apos;d like to report abuse or a violation of content policy</option>
            <option value='other'>other</option> 
            </select>
            <label className='mb-4' htmlFor='subject'>Subject</label>
            <input onChange={e => {e.currentTarget.focus}} ref={subject} className=' border rounded-md border-transparent bg-[#787878] h-12 mb-6 w-[560px] px-4' type='text' id='subject' name='subject' />
            <label className='mb-4' htmlFor='message'>Message</label>
            <textarea onChange={e => {e.currentTarget.focus}} ref={message} className='border rounded-md border-transparent bg-[#787878]' id='message' name='message'></textarea>
            <button className='border w-1/3 border-transparent bg-[#787878] rounded-md mt-4 self-center p-2 text-2xl' type='submit'>Send Message </button>
        
        </form>
        </div>
    </div>
    </main>


  )
}

export default Contact