
const FeedBack = () => {
    return (

        <div className=" container">
            <h1 className="text-2xl text-center mb-4 font-bold mt-12">Our Future Cars</h1>
            {/* <img className="p-5" src="https://i.ibb.co/YRYm36R/img-01.jpg" alt="" /> */}
            <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="m-4 hover:text-red-700">
                    <div className="card-body">
                        <h2 className="text-2xl">2024 Shevrolet Corvette Stingray Red</h2>

                    </div>
                    <figure><img src="https://i.ibb.co/YRYm36R/img-01.jpg" alt="Shoes" /></figure>
                </div>

                <div className="m-4 hover:text-red-700">
                    <div className="card-body">
                        <h2 className="text-2xl ">2024 Audi New Generation P00234
                        </h2>

                    </div>
                    <figure><img src="https://i.ibb.co/2Pynhn3/img-02.jpg" alt="Shoes" /></figure>
                </div>



                <div className="m-4  hover:text-red-700">
                    <div className="card-body">

                        <h2 className="text-2xl ">2024 Shevrolet Corvette Stingray Z51</h2>
                    </div>
                    <figure><img src="https://i.ibb.co/cyk8Jz6/img-03.jpg" alt="Shoes" /></figure>
                </div>

                <div className="m-4  hover:text-red-700">
                    <div className="card-body">
                        <h2 className="text-2xl ">2020 Audi New Generation P00004</h2>

                    </div>
                    <figure><img src="https://i.ibb.co/1Xd8Trh/img-04.jpg" alt="Shoes" /></figure>
                </div>

                <div className="m-4 hover:text-red-700">
                    <div className="card-body">

                        <h2 className="text-2xl ">2024 Shevrolet Corvette Stingray Z51</h2>
                    </div>
                    <figure><img src="https://i.ibb.co/vdJKMJr/img-05.jpg" alt="Shoes" /></figure>
                </div>

                <div className="m-4 hover:text-red-700">
                    <div className="card-body">
                        <h2 className="text-2xl ">2024 Shevrolet Corvette Stingray Z51</h2>

                    </div>
                    <figure><img src="https://i.ibb.co/zQd1yW4/img-06.jpg" alt="Shoes" /></figure>
                </div>
            </div>

        </div>

    );
};

export default FeedBack;