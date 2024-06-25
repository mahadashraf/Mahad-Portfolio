'use client';

import Link from 'next/link';
import {Button} from './ui/button';

import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
      image: '/work/pro_pic_1.jpg',
      category: 'HTML/CSS',
      name: 'Yummy Donuts',
      description:
        'I created a fun and interactive donut website using HTML, CSS, and JavaScript. It showcases a variety of delicious donut flavors with vibrant visuals and includes features like interactive menus and a user-friendly ordering system. The website is responsive, ensuring a seamless experience on all devices.',
      link: '/',
      github: 'https://github.com/mahadashraf/Yummy-Donuts',
    },
  {
      image: '/work/pro_pic_2.jpeg',
      category: 'Full Stack',
      name: 'MERN-CRUD-App-with-User-Authentication',
      description:
    'I built a MERN stack application with user authentication and CRUD operations. It employed MongoDB for efficient data management, Node.js and Express.js for RESTful API development, and JOI for robust server-side input validation, ensuring data integrity and security.',
      link: '/',
      github: 'https://github.com/mahadashraf/MERN-CRUD-App-with-User-Authentication',
    },
  {
      image: '/work/pro_pic_3.jpg',
      category: 'HTML/CSS',
      name: 'A4People',
      description:
        'I designed and developed the "A4PEOPLE - Training and Development Solutions" website using HTML, CSS, and JavaScript. The website offers comprehensive training and development solutions, featuring a clean and professional design',
      link: '/',
      github: 'https://github.com/mahadashraf/A4People',
    },
    
  {
      image: '/work/pro_pic_4.jpg',
      category: 'React js',
      name: 'Banking Website',
      description:
        'I developed a secure bank website using React with Vite for fast bundling and Tailwind CSS for modern styling. This website offers robust banking functionalities with a clean and intuitive user interface. Leveraging Reacts component-based architecture, the site includes features like account management, transaction history, and secure login/logout mechanisms. ',
      link: '/',
      github: 'https://github.com/mahadashraf/Bank-Website',
    },
  {
      image: '/work/pro_pic_5.jpg',
      category: 'React js',
      name: 'AnzMarketing',
      description:
        'I developed the ANZ real estate website using cutting-edge technologies including React for dynamic frontend functionality, Vite for lightning-fast bundling and development, and Tailwind CSS for sleek and responsive styling.',
      link: '/',
      github: 'https://github.com/mahadashraf/AnzMarketing',
    },
  {
      image: '/work/pro_pic_6.jpg',
      category: 'Full Stack',
      name: 'LMS (Library Management System) ',
      description:
        'I engineered a comprehensive Library Management System, integrating HTML, CSS, and JavaScript for a responsive and intuitive frontend experience. On the backend, PHP was deployed alongside MySQL for robust data management, ensuring efficient storage and retrieval of library records. The system was enhanced with jQuery and Ajax to facilitate seamless user interactions such as real-time updates and dynamic content loading',
      link: '/',
      github: 'https://github.com/mahadashraf/LMS---Library-Management-System',
    },
    

];

const Work = () => {
  return (
<section className='relative mb-12 xl:mb-48'>
  <div className='container mx-auto'>
    {/* text */}
    <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
      <h2 className='section-title mb-4'>Latest Projects</h2>
      <p className='subtitle mb-8'>
      Explore my recent endeavors in web development and software engineering. Each project showcases my passion for crafting elegant solutions that meet modern challenges. From dynamic web applications to efficient backend systems, each project reflects meticulous attention to detail and a commitment to excellence. Dive into my portfolio to discover how I leverage cutting-edge technologies to create impactful solutions for diverse client needs.
      </p>
      <Link href='/projects'>
        <Button>All projects</Button>
      </Link>
    </div>

    {/* slider */}
    <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
    <Swiper className='h-[480px] ' slidesPerView={1} breakpoints={{
    640: {
        slidesPerView: 2
    }
}} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
    {/* show only the first 4 projects for the slides */}
    {projectData.slice(0,4).map((project, index) => {
        return (
            <SwiperSlide key={index}>
                <ProjectCard project={project} />
            </SwiperSlide>
        );
    })}
</Swiper>
 
    </div>

  </div>
</section>


  );
};

export default Work;
