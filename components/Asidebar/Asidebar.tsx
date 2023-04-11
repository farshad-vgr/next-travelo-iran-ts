import { CloseButton } from "../index";

interface Props {
  isAside: boolean;
	setIsAside: (b: boolean) => void;
}

export default function Asidebar({ isAside, setIsAside }: Props) {
	return (
		<>
			<div onClick={() => setIsAside(false) } className={`absolute top-0 ${isAside ? "left-0" : "-left-full"} w-full h-full bg-gray-500 bg-opacity-50 transition-all duration-500`}></div>
			<aside className={`absolute top-0 ${isAside ? "right-0" : "-right-52"} w-52 h-full bg-gray-500 transition-all duration-700`}>
				<CloseButton setIsAside={setIsAside} />
			</aside>
		</>
	);
}
