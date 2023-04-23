interface Props {
  buttonColor: string;
}

// This button moves the scroll bar to the top of the page
export default function JumperButton({ buttonColor }: Props) {
	return (
		<>
			<a id="jumper-button" href="#body" title="Jump to Top of the Page!" className={`fixed bottom-4 right-4 p-2 text-${buttonColor}-500 bg-black bg-opacity-20 border-2 border-dashed rounded-full border-${buttonColor}-500 hover:bg-opacity-30 transition-all duration-300`}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
				</svg>
			</a>
		</>
	);
};
