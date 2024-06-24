import { useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";
import React from "react";

const Navbar = (props) => {
	const { pathname } = useLocation();
	const navList = [
		{
			href: "/",
			text: " My work",
		},
		{
			href: "/about",
			text: "About",
		},
		{
			href: "/contact",
			text: "Contact",
		},
		{
			href: "/life",
			text: "Life",
		},
	];

	return (
		<nav>
			<ul className="flex items-center gap-8">
				{navList.map((nav) => (
					<li key={nav.href}>
						<a
							href={nav.href}
							className={cn(
								"text-gray_50 py-[10px] pt-4 text-2xl font-medium transition-all duration-300 ease-linear hover:text-tertiary",
								pathname === nav.href && "border-b-2 border-b-tertiary text-tertiary"
							)}
						>
							{nav.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
