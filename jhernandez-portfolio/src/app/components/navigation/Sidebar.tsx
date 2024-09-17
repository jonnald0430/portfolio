"use client"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(true)
    return (
    <div className="absolute h-screen w-80">
        <div className="flex text-6xl h-[88px] items-center w-full pl-5 absolute">
            <GiHamburgerMenu className="cursor-pointer" onClick={() => {setOpen(!open)}}></GiHamburgerMenu>
        </div>    
        <div className={open ? "flex bg-red-500 flex-col h-full w-80 justify-between items-center" : "hidden"}>
            <div></div>
            <div className="flex-col flex text-4xl font-bold gap-4">
                <Link href="">About</Link>
                <Link href="">Projects</Link>
                <Link href="">CV</Link>
                <Link href="">Blog</Link>
            </div>
            <div className="flex items-center h-[88px] gap-3 text-4xl">
                <Link href=""><FaLinkedin/></Link>
                <Link href=""><FaGithub/></Link>
                <Link href=""><FaDiscord/></Link>
            </div>
        </div>
    </div>
    );
}
