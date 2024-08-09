import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from 'react-icons/ri';
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-orange-500 tracking-[4px]">Web Developer</div>
            <h1 className="h1 mb-4">Hello, my name is Mahad Ashraf </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Ambitious computer scientist with a passion for technology, fast learner, adept at teamwork, excellent communication skills, and strong
              organizational abilities. Eager to take on new challenges and contribute enthusiastically to any team.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href='/contact'>
                <Button className='gap-x-2'>Contact me <Send size={18} /></Button>
              </Link>        
              <Button variant="secondary" className='gap-x-2'>
                <a href="/MahadA-Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
                <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/pic.png'/>
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
