import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Mail = () => {
    const form = useRef(null!);
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_a8jcspn', 'template_pt9du27', form.current, 'xDCm-3rmHue7zPuBM');
        e.currentTarget.reset()
      };
  return (
    <div className='w-full'>
        <form ref={form} onSubmit={sendEmail}>
            <div className="my-2">
                <input type="text" name='user_name' placeholder='Name' className="w-full sm:w-10/12 lg:w-6/12 p-2 text-black rounded-lg" />    
            </div>
            <div className="my-2">
                <input type="email" required name='user_email' placeholder='Email' className="w-full sm:w-10/12 lg:w-6/12 p-2 text-black rounded-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="text-sm font-extralight pt-1">I will never share your email with anyone else.</div>
            </div>
            <div className="my-2">
                <textarea className='p-2 text-black rounded-lg w-full sm:w-10/12 lg:w-6/12' name='message'></textarea>
            </div>
            <button type="submit" className="rounded-l-full rounded-r-full px-4 py-2 bg-comic-red font-semibold">Send</button>
        </form>
        
    </div>
  )
}

export default Mail