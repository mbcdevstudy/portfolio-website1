"use client";
import { LuDownload, LuMenu } from "react-icons/lu";
import LinkButton from "../LinkButton";
import Logo from "./Logo";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";

export const navLinks = [
	{url: "home", label: "Home"},
	{url: "services", label: "Services"},
	{url: "resume", label: "Resume"},
	{url: "projects", label: "Projects"},
	{url: "skills", label: "Skills"},
	{url: "testimonials", label: "Testimonials"},
	{url: "contact", label: "Contact"},

]

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<nav className="h-18 fixed z-50 w-full">
			<div className="flex items-center h-full justify-between w-[90%] mx-auto">
				{/* l<ogo */}
				<Logo />
				{/* nav-links */}
				<ul className="hidden lg:flex space-x-10">
					{navLinks.map((link) => {
						return (
							<li key={link.url}>
								<Link className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300" href={link.url}>{link.label}</Link>
							</li>
						)
					})}
				</ul>
				{/* button */}
				<div className="hidden lg:block">
				<LinkButton
					href="/documents/my.png"
					text="Download CV"
					download
					icon={LuDownload}
					iconPosition="left"
				/>
				</div>
				<button className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden">
					<LuMenu size={30}/>
				</button>
				<MobileNav navOpen={navOpen} />
			</div>
		</nav>
	)
}
