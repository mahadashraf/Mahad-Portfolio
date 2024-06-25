'use client';
import React, {useState} from "react";
import { Tabs, TabsList , TabsContent , TabsTrigger} from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";


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
const uniqueCategories = ['all projects',...new Set(projectData.map((item) => item.category))];


const Projects = () =>{
  const [categories, setCategories] = useState(uniqueCategories);
  const [category ,setCategory] = useState('all projects');
  const filteredProjects = projectData.filter(project =>{

    return category === 'all projects' ? project : project.category === category;


  });


  return (

    <section className="min-h-screen pt-12">
<div className="container mx-auto">
  <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>

{/* tabs*/}

<Tabs defaultValue={category} className="mb-24 xl:mb-48">

<TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
  {categories.map((category, index) =>{
    return (
      <TabsTrigger onClick={() => setCategory(category)}
      
      value={category}
       key={index} 
       className='capitalize w-[162px] md:w-auto'>
        {category}
      </TabsTrigger>
    );
  })}
</TabsList>
<div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
  {filteredProjects.map((project ,index) =>{
    return <TabsContent value={category} key={index}>

      <ProjectCard project={project} />
    </TabsContent>
  })}
</div>
</Tabs>


</div>

  </section>
  );
};

export default Projects;