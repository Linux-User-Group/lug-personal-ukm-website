import Head from 'next/head';

import client from '../../lib/contentful';

export async function getStaticProps() {
	const res = await client.getEntries({
		content_type: 'event',
	});

	return {
		props: {
			events: res.items,
		},
		revalidate: 1,
	};
}

export default function Event({ events }) {
	console.log(events);
	return (
		<div>
			<Head>
				<title>Linux User Group</title>
			</Head>

			{/* hero section */}
			<section className="relative lg:h-screen flex items-center justify-center px-5 lg:px-0 pt-32 pb-20 lg:py-20">
				<img src="/assets/images/event-hero-bg.jpg" alt="" className="h-full w-full absolute bottom-0 object-cover" />
				<div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div>
				<div className="lg:w-4/5 z-10">
					<h1 className="text-4xl lg:text-5xl font-bold lg:text-center text-white">Coming Soon !!</h1>
					<h2 className="text-4xl lg:text-5xl font-bold lg:text-center text-gray-400 mt-5">Microsoft Tech Days</h2>
					<p className="lg:text-center text-white mt-10">
						The Indonesia International Conference & Expo, or commonly <br /> abbreviated as ICC, is held every year in the capital city of our <br /> country, Jakarta.
					</p>
					<h3 className="lg:text-center text-white mt-10">More Info</h3>
					<div className="flex flex-col lg:flex-row justify-center mt-4">
						<a href="#" className="text-white font-medium border-2 border-yellow-600 bg-yellow-600 rounded-md px-5 py-2">
							Purchase Tiket
						</a>
					</div>
				</div>
			</section>
			{/* hero section */}

			{/* search and category section */}
			<section className="relative flex flex-col items-center justify-center bg-black px-5 lg:px-10 py-10">
				<img src="/assets/images/about-bg.png" alt="about section background" className="absolute -top-28 transform origin-right scale-95 z-10" />
				<div className="w-full lg:w-1/2 flex items-center bg-[#222222] rounded-full px-5 z-10">
					<i className="fas fa-search text-[#C2C2C2] mr-2"></i>
					<input type="text" placeholder="Start typing to search The LUG Event" className="w-full py-2 bg-transparent focus:outline-none placeholder-[#C2C2C2] text-white" />
				</div>
				<ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8 mt-5 z-10">
					<li>
						<a href="#" className="text-yellow-600">
							All Event
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							Workshop
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							Webinar
						</a>
					</li>
					<li>
						<a href="#" className="text-white">
							Bootcamp
						</a>
					</li>
				</ul>
			</section>
			{/* search and category section */}

			{/* ongoing and all event group */}
			<div className="relative">
				<img src="/assets/images/blog-event-bg.png" alt="" className="absolute -top-5 left-0 transform origin-top-left scale-50 z-10" />
				{/* ongoing section */}
				<section className="flex justify-center bg-black px-5 lg:px-0 py-10">
					<div className="lg:w-4/5">
						<h1 className="text-3xl text-yellow-600 font-bold">On Going</h1>
						<div className="grid lg:grid-cols-3 gap-10 mt-10">
							{[1, 2, 3].map((index) => (
								<div key={index} className="relative rounded-2xl">
									<div className="absolute flex items-center space-x-2 top-4 left-4 py-1 px-2 rounded-full shadow-md bg-white">
										<img src="/assets/icons/on-going.svg" alt="on going icon" />
										<h1 className="text-sm font-medium">On Going</h1>
									</div>
									<img src="/assets/images/event-1.jpg" alt="blog thumnail" className="w-full object-cover rounded-t-2xl z-10" />
									<div className="relative bg-white p-4 rounded-b-2xl z-10">
										<span className="capitalize text-xs font-medium px-2 py-1 rounded-md text-gray-600 border border-gray-400">workshop</span>
										<a href="#" className="block font-medium text-yellow-600 hover:underline mt-2">
											IWD Workshop
										</a>
										<span className="block text-xs font-medium text-gray-800 mt-4">By : Linux User Group</span>
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
										<p className="text-sm font-medium mt-2">Northstar Travel Group acquires Burba Hotel Network's hotel investment event portfolio | Hotelier International</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* ongoing section */}

				{/* all event section */}
				<section className="relative flex flex-col items-center justify-center bg-black px-5 lg:px-0 pt-10 pb-40">
					<img src="/assets/images/blog-all-event-bg.png" alt="article section bg" className="absolute bottom-0 right-0" />
					<div className="lg:w-4/5 z-10">
						<h1 className="text-3xl text-yellow-600 font-bold">All Event</h1>
						<div className="grid lg:grid-cols-3 gap-10 mt-10">
							{events.map((event, index) => (
								<div key={index} className="relative rounded-2xl">
									<div className="absolute flex items-center space-x-2 top-4 left-4 py-1 px-2 rounded-full shadow-md bg-white">
										<img src="/assets/icons/on-going.svg" alt="on going icon" />
										<h1 className="text-sm font-medium">On Going</h1>
									</div>
									<img src={'https:' + event.fields.thumbnail.fields.file.url} alt="blog thumnail" className="w-full object-cover rounded-t-2xl z-10" />
									<div className="relative bg-white p-4 rounded-b-2xl z-10">
										<span className="capitalize text-xs font-medium px-2 py-1 rounded-md text-gray-600 border border-gray-400">workshop</span>
										<a href="#" className="block font-medium text-yellow-600 hover:underline mt-2">
											{event.fields.title}
										</a>
										<span className="block text-xs font-medium text-gray-800 mt-4">By : Linux User Group</span>
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
										<p className="text-sm font-medium mt-2">Northstar Travel Group acquires Burba Hotel Network's hotel investment event portfolio | Hotelier International</p>
									</div>
								</div>
							))}
						</div>
						<div className="flex justify-center mt-20">
							<a href="#" className="text-xl lg:text-base text-yellow-600 font-medium">
								More
							</a>
						</div>
					</div>
				</section>
				{/* all event section */}
			</div>
			{/* ongoing and all event group */}
		</div>
	);
}
