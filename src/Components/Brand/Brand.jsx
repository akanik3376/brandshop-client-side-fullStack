import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCar from "../SingleCar/SingleCar";
import Slider from "../Slider/Slider";

const Brand = () => {
    const [cars, setCars] = useState([])

    const carData = useLoaderData()

    const { name } = useParams()

    useEffect(() => {
        const singleData = carData.filter(car => car.brand == name)
        setCars(singleData)
    }, [name, carData])


    return (
        <div>
            <div className="my-10 container mx-auto">
                <Slider></Slider>
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center text-cyan-900 my-7">Chose your brand {name} !</h1>
                <div className="container mx-auto my-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        cars?.map(car => <SingleCar key={car._id} car={car}></SingleCar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brand;