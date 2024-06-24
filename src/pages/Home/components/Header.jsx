import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = ({ ref }) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-22 w-full items-center justify-between bg-primary px-20 py-6" ref={ref}>
			<Logo />
			<Navbar />
		</div>
	);
};

export default Header;
