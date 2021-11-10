import Head from 'next/head';

export default function contact() {
	return (
		<div>
			<Head>
				<title>Linux User Group</title>
			</Head>

			{/* hero section */}
			<section className="lug-hero-section-contact w-screen h-screen relative flex items-center justify-center">
				<div className="absolute inset-0 bg-black opacity-50 z-10"></div>
				<img src="/assets/images/contact-map.png" alt="" className="absolute w-full h-full object-cover" />
				<div className="z-20">
					<h1 className="text-white text-2xl lg:text-3xl font-bold leading-tight text-center">
						You can follow the map path to get <br /> to the place
					</h1>
					<div className="flex justify-center mt-8">
						<a href="#" className="text-white font-medium border-2 border-yellow-600 bg-yellow-600 rounded-md px-5 py-2">
							Get Direction
						</a>
					</div>
				</div>
			</section>
			{/* hero section */}

			{/* contact section */}
			<section className="bg-black py-10">
				<div className="relative lg:w-4/5 mx-auto px-5">
					<img src="/assets/images/contact-bg.png" alt="contact bg" className="hidden lg:block absolute top-0" />
					<h1 className="text-2xl text-yellow-600 font-medium text-center">Contact Us</h1>
					<div className="lg:w-4/6 mx-auto grid lg:grid-cols-3 gap-y-4 lg:gap-y-0 justify-items-center mt-10">
						<div className="flex flex-col items-center">
							<img src="/assets/icons/email-orange.svg" alt="lug-icon-email-orang" className="w-8 h-8" />
							<h1 className="text-white mt-4">Lug@dinamika.ac.id</h1>
						</div>
						<div className="flex flex-col items-center">
							<img src="/assets/icons/instagram-orange.svg" alt="lug-icon-instagram-orange" className="w-8 h-8" />
							<h1 className="text-white mt-4">Lug_surabaya</h1>
						</div>
						<div className="flex flex-col items-center">
							<img src="/assets/icons/whatsapp-orange.svg" alt="lug-icon-whatsapp-orange" className="w-8 h-8" />
							<h1 className="text-white mt-4">
								+6282231455064 (Qonitah) <br /> +62141389277 (Titi)
							</h1>
						</div>
					</div>
					<div>
						<h1 className="text-2xl text-yellow-600 font-medium mt-20">Ask us anything</h1>
						<form className="mt-5">
							<div className="mb-4">
								<label htmlFor="name" className="relative text-white capitalize block mb-2 w-max">
									your name
									<span className="text-xl font-bold absolute -top-1 -right-3 text-red-500">*</span>
								</label>
								<input type="text" id="name" placeholder="Enter Your Name" className="w-full bg-gray-100 bg-opacity-20 placeholder-[#8692A6] text-[#8692A6] rounded-md focus:outline-none py-2 px-4" />
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="relative text-white capitalize block mb-2 w-max">
									email address
									<span className="text-xl font-bold absolute -top-1 -right-3 text-red-500">*</span>
								</label>
								<input type="text" id="email" placeholder="Enter Email Address" className="w-full bg-gray-100 bg-opacity-20 placeholder-[#8692A6] text-[#8692A6] rounded-md focus:outline-none py-2 px-4" />
							</div>
							<div className="mb-4">
								<label htmlFor="phone_number" className="relative text-white capitalize block mb-2 w-max">
									phone number
									<span className="text-xl font-bold absolute -top-1 -right-3 text-red-500">*</span>
								</label>
								<input type="text" id="phone_number" placeholder="Enter Phone Number" className="w-full bg-gray-100 bg-opacity-20 placeholder-[#8692A6] text-[#8692A6] rounded-md focus:outline-none py-2 px-4" />
							</div>
							<div className="mb-4">
								<label htmlFor="message" className="relative text-white capitalize block mb-2 w-max">
									your message
									<span className="text-xl font-bold absolute -top-1 -right-3 text-red-500">*</span>
								</label>
								<textarea id="message" placeholder="Enter Your Message" cols="30" rows="10" className="w-full bg-gray-100 bg-opacity-20 placeholder-[#8692A6] text-[#8692A6] rounded-md focus:outline-none py-2 px-4"></textarea>
							</div>
							<button type="submit" className="text-white font-medium border-2 border-yellow-600 bg-yellow-600 rounded-md px-10 py-2">
								Send Now
							</button>
						</form>
					</div>
				</div>
			</section>
			{/* contact section */}
		</div>
	);
}
