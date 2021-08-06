import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="lg:flex items-center justify-between fixed top-0 left-0 right-0 z-50 space-y-2 bg-[#282828] px-5 lg:px-10 py-4">
			<div className="flex items-center justify-between">
				<a href="#">
					<img src="/assets/images/logo.png" alt="linux user group logo" className="transform scale-90" />
				</a>
				<i className={`lg:hidden text-white text-opacity-80 cursor-pointer fas ${!isOpen ? "fa-bars" : "fa-times"}`} onClick={() => setIsOpen(!isOpen)}></i>
			</div>
			<div className={`${!isOpen ? "hidden" : ""} lg:flex items-center lg:space-x-4 space-y-4 lg:space-y-0`}>
				<ul className="lg:flex lg:space-x-5 space-y-2 lg:space-y-0">
					<li>
						<a href="#" className="capitalize font-medium text-opacity-80 hover:text-opacity-95 text-white">
							home
						</a>
					</li>
					<li>
						<a href="#" className="capitalize font-medium text-opacity-80 hover:text-opacity-95 text-white">
							blog
						</a>
					</li>
					<li>
						<a href="#" className="capitalize font-medium text-opacity-80 hover:text-opacity-95 text-white">
							event
						</a>
					</li>
					<li>
						<a href="#" className="capitalize font-medium text-opacity-80 hover:text-opacity-95 text-white">
							team
						</a>
					</li>
					<li>
						<a href="#" className="capitalize font-medium text-opacity-80 hover:text-opacity-95 text-white">
							contact
						</a>
					</li>
				</ul>
				<div className="flex items-center gap-2 border-t-2 lg:border-0 border-white border-opacity-50 pt-2 lg:pt-0">
					<div className="w-0.5 h-5 hidden lg:block bg-white bg-opacity-80"></div>
					<a href="#">
						<img src="/assets/icons/instagram.svg" alt="instagram icon" className="transform scale-75 opacity-80 hover:opacity-95 cursor-pointer" />
					</a>
					<a href="#">
						<img src="/assets/icons/medium.svg" alt="medium icon" className="transform scale-75 opacity-80 hover:opacity-95 cursor-pointer" />
					</a>
				</div>
			</div>
		</header>
	);
}
