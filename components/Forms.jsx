import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
// import  React, { useState } from 'react';






const Forms = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   // Example URL where your server-side script is hosted
  //   const url = 'https://example.com/api/send-email'; // Replace with your server endpoint
    
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     if (response.ok) {
  //       alert('Message sent successfully!');
  //       setFormData({ name: '', email: '', message: '' });
  //     } else {
  //       alert('Failed to send message. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     alert('Failed to send message. Please try again later.');
  //   }
  
  
  return (
    <form className='flex flex-col gap-y-4'  >
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Textarea  placeholder='Type Your Message Here' />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>lets Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Forms;
