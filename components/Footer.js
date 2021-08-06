export default function Footer() {
	return (
		<footer className="bg-black px-5 lg:px-10 py-10">
			<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-5 lg:space-y-0">
				<div className="col-span-2">
					<img src="/assets/images/logo.png" alt="linux user group logo" className="transform scale-90" />
					<p className="text-white mt-4">
						Pengembang tim yang bersemangat dan <br /> desainer membangun produk digital
					</p>
				</div>
				<div className="w-full lg:w-auto flex justify-between lg:justify-start lg:space-x-20">
					<div>
						<h1 className="text-xl font-medium text-yellow-600">Pages</h1>
						<ul className="mt-4 space-y-2">
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									halaman
								</a>
							</li>
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									blog
								</a>
							</li>
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									acara
								</a>
							</li>
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									tim
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="text-xl font-medium text-yellow-600">Ikuti</h1>
						<ul className="mt-4 space-y-2">
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									instagram
								</a>
							</li>
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									medium
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="text-xl font-medium text-yellow-600">Kontak</h1>
						<ul className="mt-4 space-y-2">
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									instagram
								</a>
							</li>
							<li>
								<a href="#" className="capitalize text-white text-opacity-80 hover:underline transition-all duration-300">
									medium
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
