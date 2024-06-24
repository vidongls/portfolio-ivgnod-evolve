const Introduction = (props) => {
	return (
		<section className="panel flex h-screen w-full flex-col px-20 pt-[88px] bg-secondary-2">
			<p className="text-gradient mb-10 pt-20 text-4xl font-semibold leading-normal text-gradient-primary">Why Design?</p>
			<div className="relative text-left text-[80px] font-semibold leading-[100px] text-primary">
				UX Design creates something that contributes to a better future. I enjoy contributing to a product or service.
			</div>
			<div className="mt-8 inline">{/* <PenDraw /> */}</div>
		</section>
	);
};

export default Introduction;
