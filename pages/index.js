import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Linux User Group</title>
			</Head>

			{/* hero section */}
			<section className="lug-hero-section relative flex flex-col items-center justify-center px-5 lg:px-0 py-20">
				<img src="/assets/images/hero-image.png" alt="hero image" className="absolute top-0 left-0 transform origin-top-left scale-75" />
				<div className="lg:w-4/5 grid lg:grid-cols-2 items-center">
					<div>
						<h1 className="text-white text-3xl lg:text-5xl font-bold leading-tight z-10">
							Hello, We Are <span className="text-yellow-600">LUG</span> <br /> Surabaya
						</h1>
						<p className="text-white text-opacity-60 mt-5">A team passionate developer and designer build a digital product</p>
						<div className="flex flex-col lg:flex-row mt-8 lg:space-x-2 space-y-4 lg:space-y-0">
							<a href="#" className="text-white font-medium border-2 border-white rounded-md px-5 py-2">
								Get Started
							</a>
							<a href="#" className="text-white font-medium border-2 border-yellow-600 bg-yellow-600 rounded-md px-5 py-2">
								Register
							</a>
						</div>
					</div>
					<div className="order-first lg:order-none justify-self-end">
						<img src="/assets/images/hero-pinguin.png" alt="hero pinguin" />
					</div>
				</div>
				<i className="fas fa-chevron-down text-4xl text-white text-opacity-30 animate-bounce mt-5 lg:mt-0"></i>
			</section>
			{/* hero section */}

			{/* about section */}
			<section className="relative flex justify-center bg-black px-5 lg:px-10 py-14">
				<img src="/assets/images/about-bg.png" alt="about section background" className="absolute -top-28 transform origin-right scale-95 z-10" />
				<div className="w-full grid lg:grid-cols-2 items-center gap-5">
					<div>
						<h1 className="text-2xl text-yellow-600 font-medium">Tentang Kami</h1>
						<p className="text-white text-opacity-80 mt-4">
							Berbagi pengetahuan tentang Sistem Operasi Linux dan <br /> Perangkat Lunak Sumber Terbuka, kami juga memberikan pelayanan <br /> kepada publik yang terdiri dari : <br /> pelatihan, migrasi, workshop, seminar, dan pengembangan <br /> perangkat lunak.
						</p>
					</div>
					<div className="h-52 lg:h-80 relative bg-gray-400 rounded-md">
						<img src="/assets/images/group-member.png" alt="lug member 2021" className="absolute bottom-0 transform origin-bottom scale-90" />
					</div>
				</div>
			</section>
			{/* about section */}

			{/* what we do section */}
			<section className="flex justify-center bg-black px-5 lg:px-10 py-10">
				<div className="relative">
					<img src="/assets/icons/plus-rotate.svg" alt="rotate icon" className="absolute top-0 right-0 transform scale-75" />
					<h1 className="text-2xl text-yellow-600 font-medium lg:text-center">Apa yang Kita Lakukan ?</h1>
					<p className="text-white text-opacity-80 mt-4 lg:text-center">
						Berbagi pengetahuan tentang Sistem Operasi Linux dan Perangkat Lunak Sumber <br /> Terbuka, Kami juga memberikan pelayanan kepada publik yang terdiri dari : <br /> pelatihan, migrasi, workshop, seminar, dan pengembangan perangkat lunak.
					</p>
					<div className="grid lg:grid-cols-4 gap-5 mt-10">
						<div className="lug-activity-card">
							<img src="/assets/images/activity-1.jpg" alt="" />
							<div className="absolute top-2/4 lg:top-1/2 z-10 px-5">
								<h1 className="text-2xl text-yellow-600 font-medium">Training</h1>
								<p className="text-white text-opacity-80 mt-4">Linux Fundamental, Linux Advanced, Web Programming, Android Programming</p>
							</div>
						</div>
						<div className="lug-activity-card">
							<img src="/assets/images/activity-2.jpg" alt="" />
							<div className="absolute top-2/4 lg:top-1/2 z-10 px-5">
								<h1 className="text-2xl text-yellow-600 font-medium">Migration</h1>
								<p className="text-white text-opacity-80 mt-4">If your institution (company / school / internet cafe / etc) want to switch the Linux Operating.....</p>
							</div>
						</div>
						<div className="lug-activity-card">
							<img src="/assets/images/activity-3.jpg" alt="" />
							<div className="absolute top-2/4 lg:top-1/2 z-10 px-5">
								<h1 className="text-2xl text-yellow-600 font-medium">Seminar</h1>
								<p className="text-white text-opacity-80 mt-4">As one form of our participation in promoting Linux, we regularly hold seminars with the theme Linux</p>
							</div>
						</div>
						<div className="lug-activity-card">
							<img src="/assets/images/activity-4.jpg" alt="" />
							<div className="absolute top-2/4 lg:top-1/2 z-10 px-5">
								<h1 className="text-2xl text-yellow-600 font-medium">Software Development</h1>
								<p className="text-white text-opacity-80 mt-4">We also accept requests for making applications be it Desktop application, Web-based applications, Mobile Application</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* what we do section */}

			{/* blog & event group */}
			<div className="relative">
				<img src="/assets/images/blog-event-bg.png" alt="blog and event background" className="absolute top-[-30rem] transform origin-left scale-75 z-10" />
				{/* blog section */}
				<section className="flex justify-center bg-black px-5 lg:px-0 py-10">
					<div className="relative lg:w-4/5">
						{/* <img src="/assets/images/ring-orange.png" alt="orange ring" className="absolute -top-10 right-0 lg:right-40 transform scale-75" /> */}
						<h1 className="text-2xl text-yellow-600 font-medium">Blog</h1>
						<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between space-y-4 lg:space-y-0">
							<p className="text-white font-medium text-opacity-80 mt-4">Seputar artikel yang dibuat oleh team Linux User Group Surabaya</p>
							<a href="#" className="font-medium text-yellow-600 text-opacity-80 hover:underline">
								lebih banyak
							</a>
						</div>
						<div className="grid lg:grid-cols-3 gap-10 mt-10">
							{[1, 2, 3].map((index) => (
								<div key={index} className="relative rounded-2xl">
									<img src="/assets/images/bubble-orange.png" alt="" className="hidden lg:block absolute -top-32 -left-32 z-10" />
									<img src="/assets/images/bubble-yellow.png" alt="" className="hidden lg:block absolute -bottom-32 -right-32 z-10" />
									<img src="/assets/images/blog-1.jpg" alt="blog thumnail" className="w-full object-cover rounded-t-2xl z-10" />
									<div className="relative bg-white p-4 rounded-b-2xl z-10">
										<a href="#" className="font-medium hover:underline">
											Laravel 6 Pemula: Membuat aplikasi absensi (Part 1)
										</a>
										<div className="flex items-center space-x-4 mt-5">
											<img src="/assets/images/author-img.png" alt="author image" />
											<div>
												<h2 className="text-sm text-gray-500">Nashir Jamali</h2>
												<h3 className="text-sm text-gray-500">Dec 22, 2019</h3>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* blog section */}

				{/* event & team group */}
				<div className="relative">
					<img src="/assets/images/event-team-bg.png" alt="event and team background" className="absolute bottom-0 w-100 h-100" />
					{/* event section */}
					<section className="flex justify-center bg-black px-5 lg:px-0 py-10">
						<div className="relative lg:w-4/5">
							<h1 className="text-2xl text-yellow-600 font-medium">Acara</h1>
							<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between space-y-4 lg:space-y-0">
								<p className="text-white font-medium text-opacity-80 mt-4">Acara kami yang luar biasa. Jangan lewatkan!</p>
								<a href="#" className="font-medium text-yellow-600 text-opacity-80 hover:underline">
									lebih banyak
								</a>
							</div>
							<div className="grid lg:grid-cols-3 gap-10 mt-10">
								{[1, 2, 3].map((index) => (
									<div key={index} className="relative rounded-2xl">
										<div className="absolute flex items-center space-x-2 top-4 left-4 py-1 px-2 rounded-full shadow-md bg-white">
											<img src="/assets/icons/on-going.svg" alt="on going icon" />
											<h1 className="text-sm font-medium">On Going</h1>
										</div>
										<img src="/assets/images/event-1.jpg" alt="blog thumnail" className="w-full object-cover rounded-t-2xl z-10" />
										<div className="relative bg-white p-4 rounded-b-2xl z-10">
											<a href="#" className="font-medium hover:underline">
												IWD Workshop
											</a>
											<div className="flex flex-col space-y-2 mt-5">
												<div className="flex items-start space-x-2">
													<img src="/assets/icons/date.svg" alt="date icon" />
													<h2 className="text-sm font-medium">03 Maret 2020 - 19 Maret 2020</h2>
												</div>
												<div className="flex items-start space-x-2">
													<img src="/assets/icons/map.svg" alt="map icon" />
													<h2 className="text-sm font-medium">Universitas Dinamika (STIKOM), Jalan Raya Kedung Baruk.</h2>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					{/* event section */}

					{/* team section */}
					<section className="flex justify-center bg-white px-5 lg:px-0 py-20">
						<div className="relative w-full lg:w-4/5">
							<h1 className="text-2xl text-black font-medium">The Team</h1>
							<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between space-y-4 lg:space-y-0">
								<p className="text-black font-medium text-opacity-80 mt-4">Pengurus Linux User Group Periode 2021</p>
								<a href="#" className="font-medium text-yellow-600 text-opacity-80 hover:underline">
									lebih banyak
								</a>
							</div>
							<div className="grid lg:grid-cols-4 gap-5 mt-10">
								{[1, 2, 3, 4].map((index) => (
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
				{/* event & team group */}
			</div>
			{/* blog & event group */}
		</div>
	);
}
