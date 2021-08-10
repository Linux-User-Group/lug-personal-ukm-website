import Head from "next/head";

export default function Blog() {
	return (
		<div>
			<Head>
				<title>Linux User Group</title>
			</Head>

			{/* hero section */}
			<section className="relative lg:h-screen flex items-center justify-center px-5 lg:px-0 pt-32 pb-20 lg:py-20">
				<img src="/assets/images/blog-hero-bg.jpg" alt="" className="h-full w-full absolute bottom-0 object-cover" />
				<div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div>
				<div className="lg:w-4/5 z-10">
					<h1 className="text-4xl font-bold text-white mb-10">
						Where Are The Keys Skills Every <br /> Web Development Needs?
					</h1>
					<a href="#" className="block lg:inline-block text-white font-medium border-2 border-yellow-600 bg-yellow-600 rounded-md px-5 py-2">
						Read More
					</a>
				</div>
			</section>
			{/* hero section */}

			{/* search and category section */}
			<section className="relative flex flex-col items-center justify-center bg-black px-5 lg:px-10 py-10">
				<img src="/assets/images/about-bg.png" alt="about section background" className="absolute -top-28 transform origin-right scale-95 z-10" />
				<div className="w-full lg:w-1/2 flex items-center bg-[#222222] rounded-full px-5 z-10">
					<i className="fas fa-search text-[#C2C2C2] mr-2"></i>
					<input type="text" placeholder="Start typing to search The LUG Blog" className="w-full py-2 bg-transparent focus:outline-none placeholder-[#C2C2C2] text-white" />
				</div>
				<ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8 mt-5 z-10">
					<li>
						<a href="#" className="text-yellow-600">
							All Topics
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							Linux OS
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							Web Development
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							Mobile Development
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							UX Design
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							UI Design
						</a>
					</li>
				</ul>
			</section>
			{/* search and category section */}

			{/* most popular section */}
			<section className="flex justify-center bg-black px-5 lg:px-0 py-10">
				<div className="lg:w-4/5">
					<h1 className="text-3xl text-yellow-600 font-bold">Most Popular</h1>
					<div className="grid lg:grid-cols-3 gap-10 mt-10">
						{[1, 2, 3].map((index) => (
							<div key={index} className="rounded-2xl">
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
			{/* most popular section */}

			{/* article section */}
			<section className="relative flex flex-col items-center justify-center bg-black px-5 lg:px-0 pt-10 pb-40">
				<img src="/assets/images/article-bg.png" alt="article section bg" className="absolute bottom-0 right-0" />
				<div className="lg:w-4/5 z-10">
					<h1 className="text-3xl text-yellow-600 font-bold">Article</h1>
					<div className="grid lg:grid-cols-3 gap-10 mt-10">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
							<div key={index} className="rounded-2xl">
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
				<div className="w-full lg:w-4/5 border-t border-gray-400 pt-5 mt-20">
					<h1 className="text-white text-center">pagination</h1>
				</div>
			</section>
			{/* article section */}
		</div>
	);
}
