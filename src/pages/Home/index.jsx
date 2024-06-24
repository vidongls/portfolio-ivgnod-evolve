import { useRef } from "react";
import { useGSAP } from "../../lib/gsap";
import Home from "./Home";
import Header from "./components/Header";

const HomeLayoutContainer = () => {
	const loader = useRef(null);
	const path = useRef(null);
	const initialCurve = 200;
	const duration = 600;
	let start;

	useGSAP(() => {
		setPath(initialCurve);
		setTimeout(() => {
			requestAnimationFrame(animate);
		}, 300);
	});

	const animate = (timestamp) => {
		if (start === undefined) {
			start = timestamp;
		}
		const elapsed = timestamp - start;

		const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
		setPath(newCurve);
		loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

		if (elapsed < duration) {
			requestAnimationFrame(animate);
		}
	};

	const easeOutQuad = (time, start, end, duration) => {
		return -end * (time /= duration) * (time - 2) + start;
	};

	const loaderHeight = () => {
		const loaderBounds = loader.current.getBoundingClientRect();
		return loaderBounds.height;
	};

	const setPath = (curve) => {
		const width = window.innerWidth;
		const height = loaderHeight();
		path.current.setAttributeNS(
			null,
			"d",
			`M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`
		);
	};

	return (
		<div className="flex min-h-full flex-col">
			<Header />
			<main className="h-full">
				<Home />
			</main>
			<div ref={loader} className="fixed z-[60] h-[calc(100vh+200px)] w-full">
				<svg className="h-full w-full" fill="white">
					<path ref={path} className="stroke-black stroke-1"></path>
				</svg>
			</div>
		</div>
	);
};

export default HomeLayoutContainer;
