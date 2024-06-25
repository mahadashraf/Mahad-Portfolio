import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs,TabsContent , TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
    User2 ,
     MailIcon, 
     HomeIcon,
     PhoneCall,
     GraduationCap,
    Calendar,
    Briefcase,
    

 } from "lucide-react"



const infoData = [
    {
        icon:<User2 size={20} />,
        text:'Mahad Ashraf',
    }
    ,
    {
        icon:<PhoneCall size={20} />,
        text:'+92 341 4427668',
    }
    ,
    {
        icon:<MailIcon size={20} />,
        text:'mahadashraf.850@gmail.com',
    },
    {
        icon:<Calendar size={20} />,
        text:'Born on 22 Aug, 2001',
    },
    {
        icon:<GraduationCap size={20} />,
        text:'Bachelors on Computer Science',
    },
    {
        icon:<HomeIcon size={20} />,
        text:'Street #26 , House 1671 , I-10/2'
    },

];

const qualificationData = [
    {
        title: 'education',
        data:[
            {
                university: 'FAST National University',
                qualification: 'Bachelors in Computer Science',
                years: '2020 - 2024',
            },
        ],
    },
];

const skillData = [
    {
        title: 'Skills',
        data:[
            {
                name: 'Python , C++ , Java , Javascript , Assembly  ',
            },
            {
                name: 'HTML5 , CSS3 , NextJS , ReactJS , Tailwind',
            },
            {
                name: 'NodeJS , PHP , Django ',
            },
            {
                name: 'MySQL, MongoDB , Postgresql',
            },
        ]
    },
    {
        title: 'Tools',
        data:[
            {
                imgPath: '/about/visual-studio-code.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/nodejs.jpg ',
            },
            {
                imgPath: '/about/Wordpress.png',
            },
            {
                imgPath: '/about/python.svg',
            },
            {
                imgPath: '/about/mongodb.svg',
            },
            {
                imgPath: '/about/Java.jpg ',
            },
            {
                imgPath: '/about/Php.png',
            },
        ]
    }
];


const About = () => {
  const getData = (arr,title) =>{
    return arr.find((item)=>item.title === title);
  };
  
    return (
    <section className="xl:h-[860px] pb-12 xl:py-24">

        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                {/* Image*/}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                    w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/pic2.png' />
                </div>
                {/* Tabs*/}
                <div className="flex-1">
                <Tabs defaultValue="personal">
                     <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                        <TabsTrigger  className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                     </TabsList>
                     {/* tabs content*/}
                    <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value='personal'>
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-4">Crafting Dynamic and Engaging Web Solutions</h3>
                                <p className="subtitle max-w-xl mx-auto xl:mx-0"> My passion lies in crafting dynamic web solutions that seamlessly blend innovation with user-centric design principles. Whether it's developing robust backend systems with Node.js or creating responsive frontends using React and Next.js, I am committed to delivering solutions that exceed client expectations.
                                </p>
                                {/* icons */}
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {infoData.map((item,index) =>{
                                        return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                            <div className="text-primary">{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                    })}
                                </div>
                                

                            </div>
                        </TabsContent>
                        <TabsContent value='qualifications'>
                            <div>
                                <h3 className="h3 mb-8 text-center xl:text-left">
                                    My Awesome Journey
                                </h3>

                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData,'education').title}
                                                </h4>
                                            </div>
                                            {/* lists*/}

                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData,'education').data.map((item,index) =>{
                                                    const {university,qualification ,years } = item;

                                                    return (
                                                        <div className="flex gap-x-8 group " key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                                <div className="w-[11px] h-[11px] rounded-full
                                                                bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                transition-all duration-500" ></div>

                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    </div>

                            </div>
                        </TabsContent>
                        <TabsContent value='skills'>

                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-8">Tools I Use</h3>
                                <div className="mb-16" >
                                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                <div className="border-b border-border mb-4"></div>
                                
                                {/* skill list*/}
                                <div>
                                    {getData(skillData,'Skills').data.map((item,index) =>{
                                        const {name} = item;

                                        return (
                                       
                                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>

                                                <div className="font-medium">{name}</div>

                                            </div>
                                        );
                                            
                                        
                                    
                                    })}
                                </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                        Tools
                                    </h4>
                                    <div className="border-b border-border mb-4 "></div>
                                    <div className="flex gap-x-8 justify-center xl:justify-start">
                                        {getData(skillData,'Tools').data.map((item,index) =>{
                                            const {imgPath} = item;
                                            return (
                                                <div key={index}>
                                                <Image src={imgPath} width={48} height={48} alt="" priority/>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </TabsContent>
                    </div>

                </Tabs>
                </div>

            </div>
        </div>

    </section>
  )
}

export default About