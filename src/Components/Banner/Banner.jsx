
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QNR8ryS/pexels-photo-3593922.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h4 className="text-pink-600 font-semibold text-xl mb-4">Make up your mind</h4>
                    <h1 className="mb-5 text-5xl font-bold">Buy the care you have always dreamed</h1>
                    <p className="mb-5">Super car also referred to as an exotic is a luxury, high-performance sports car or grand tourer.
                    </p>
                    <button className="px-7 py-3 rounded bg-pink-600 font-semibold">cars listing</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;