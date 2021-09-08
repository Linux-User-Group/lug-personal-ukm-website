import Head from 'next/head';

export default function Team() {
	return (
		<div>
			<Head>
				<title>Linux User Group</title>
			</Head>

			{/* hero section */}
			<section className="lug-hero-section relative flex flex-col items-center justify-center px-5 lg:px-0 py-10 lg:py-0">
				<img src="/assets/images/hero-image.png" alt="hero image" className="absolute top-0 left-0 transform origin-top-left scale-75" />
				<img src="/assets/images/linear-bg-team-hero.png" alt="linear background" className="absolute bottom-0" />
				<div className="w-full lg:w-4/5 flex flex-col justify-center items-center">
					<img src="/assets/images/group-member-team-page.png" alt="lug member 2021" className="w-full lg:w-4/5 z-10 lg:z-auto" />
					<h1 className="text-4xl lg:text-6xl text-yellow-600 font-medium tracking-widest text-center -mt-5 lg:-mt-10 z-10">INTRODUCE</h1>
					<h1 className="text-4xl lg:text-6xl text-white font-light tracking-widest text-center -mt-5 lg:-mt-8 z-10">Our Team</h1>
					<p className="text-white tracking-wide text-center mt-2 z-10">Here we work together as a team, we won’t leave our friend behind.</p>
				</div>
			</section>
			{/* hero section */}

			{/* team section */}
			<section className="relative flex justify-center bg-white lg:bg-black px-5 lg:px-0 py-20">
				<div className="hidden lg:block absolute w-full h-2/6 bg-white bottom-0"></div>
				<img src="/assets/images/bg-team-page.png" alt="background team page" className="hidden lg:block absolute top-[-15rem]" />
				<div className="relative w-full lg:w-4/5">
					<h1 className="text-2xl text-black lg:text-white font-medium">The Team</h1>
					<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between space-y-4 lg:space-y-0">
						<p className="text-black lg:text-white font-medium text-opacity-80 mt-4">Pengurus Linux User Group Periode 2021</p>
						<a href="#" className="font-medium text-yellow-600 text-opacity-80 hover:underline">
							lebih banyak
						</a>
					</div>
					<div className="grid lg:grid-cols-4 gap-5 mt-10">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
							<div key={index} className="lug-team-card">
								<img src="/assets/images/team-1.png" alt="lug member" />
								<div className="w-full absolute bottom-5 z-10">
									<h2 className="text-lg text-center text-yellow-600 font-medium">Faris Riqilail</h2>
									<h3 className="text-sm text-center text-white text-opacity-80 font-medium">Ketua {index}</h3>
									<div className="flex justify-center space-x-5 mt-10">
										<a href="#" className="opacity-80 hover:opacity-100 transition-all duration-300">
											<img src="/assets/icons/instagram.svg" alt="instagram icon" className="transform scale-90" />
										</a>
										<a href="#" className="opacity-80 hover:opacity-100 transition-all duration-300">
											<img src="/assets/icons/linkedin.svg" alt="linkedin icon" className="transform scale-90" />
										</a>
										<a href="#" className="opacity-80 hover:opacity-100 transition-all duration-300">
											<img src="/assets/icons/dribbble.svg" alt="dribbble icon" className="transform scale-90" />
										</a>
										<a href="#" className="opacity-80 hover:opacity-100 transition-all duration-300">
											<img src="/assets/icons/github.svg" alt="github icon" className="transform scale-90" />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* team section */}
		</div>
	);
}
