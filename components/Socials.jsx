'use client'

import {
RiYoutubeFill,
RiLinkedinFill,
RiGithubFill,
RiFacebookFill,
RiInstagramFill,
RiMailFill

} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
    
    {
        path: 'https://www.linkedin.com/in/mahad-ashraf-96868a1b7/',
        name:<RiLinkedinFill />,
    },
    {
        path: 'https://github.com/mahadashraf?tab=repositories',
        name:<RiGithubFill />,
    },
    {
        path: 'https://www.facebook.com/mahad1ashraf/',
        name:<RiFacebookFill />,
    },
    {
        path: 'mailto:mahadashraf.850@gmail.com',
        name:<RiMailFill />,
    },
]

const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles }`}>

        {icons.map((icon,index) =>{
            return <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div></Link>
        })}
    </div>
  )
}

export default Socials