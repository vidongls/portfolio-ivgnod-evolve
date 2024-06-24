import { gsap, useGSAP } from "../../../lib/gsap";
import { useRef } from "react";

import pinWheelUrl from "../../../assets/image/pinwheel.svg";

const Logo = (props) => {
	const container = useRef();
	const tl = useRef();

	useGSAP(
		() => {
			const logo = document.querySelector("#logo-ivgnod");
			tl.current = gsap.timeline({ paused: true }).from(logo, { opacity: 0, rotation: 360 }).to(logo, {
				rotation: 360,
				opacity: 1,
				repeat: -1,
			});
		},
		{ scope: container }
	);

	const onSpin = () => {
		tl.current.play(0);
	};

	const onSpinRevert = () => {
		tl.current.reversed(!tl.current.reversed());
	};

	return (
		<div className="relative flex flex-1 items-center gap-6" ref={container}>
			<a href={"/"} className="flex items-center">
				<img src={pinWheelUrl} alt="leminhquyen" id="logo-ivgnod" width={24} height={24} />
				<h2 className="ml-2 text-[32px] font-bold text-tertiary" onMouseEnter={onSpin} onMouseLeave={onSpinRevert}>
					Le Minh Quyen
				</h2>
			</a>
		</div>
	);
};

export default Logo;
