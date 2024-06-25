import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import { Form } from 'react-hook-form';

import Forms from '@/components/Forms';

  const Contact = () => {
    
    return ( 
        <section>
      <div className='container mx-auto'>
          {/* text & illustration */}
          <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
            {/* text */}
            <div className='flex flex-col justify-center'>
              <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                <span className='w-[30px] h-[2px] bg-primary'></span>
                Say Hello 
              </div>
             <h1 className='h1 max-w-md mb-8'>Let's Work Together</h1>
             <p className='subtitle max-w-[400px]'>Looking for someone to bring your ideas to life? I'm here to help! From web development to software solutions, I offer expertise in creating tailored solutions that meet your unique needs.</p>
            </div>

          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>
          
          </div>

          </div>
          {/* info text & forom*/}
          <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
            <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
              <div className='flex items-center gap-x-8'>
                <MailIcon size={18} className='text-primary'/>
                <div>mahadashraf.850@gmail.com</div>
              </div>
              <div className='flex items-center gap-x-8'>
                <PhoneCall size={18} className='text-primary'/>
                <div>+92 341 4427668</div>
              </div>
            </div>
            <Forms />
          </div>
      </div>
        </section>
    
  );
}

export default Contact;