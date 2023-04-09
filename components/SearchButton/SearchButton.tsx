export default function SearchButton() {
	return (
		<>
			<div className="flex justify-center items-center absolute top-3 right-3 w-10 h-10 mt-1 rounded-full text-base bg-red-500 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</div>
		</>
	);
}
