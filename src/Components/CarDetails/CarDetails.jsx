import { AiFillStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
    const car = useLoaderData()
    console.log(car)
    const { brand, description, photo, price, rating, name } = car || {}
    return (
        <div className="bg-slate-600 container mx-auto my-10">
            <h1 className="my-5 pt-5 text-center text-2xl font-semibold text-green-900">SHOPE NOW !</h1>
            <div className="container mx-auto my-10 flex gap-10 p-5">
                <img className="w-[50%]" src={photo} alt="" />
                <div className="flex flex-col flex-grow space-y-4 ">
                    <h4 className="text-2xl font-semibold">{name}</h4>
                    <h4 className="text-2xl font-semibold">{brand}</h4>
                    <p>{description}</p>
                    <p className="text-xl font-semibold">{price}</p>
                    <p className="flex gap-2 items-center"> < AiFillStar className="text-yellow-600"></AiFillStar>{rating}</p>

                    <button className="btn">Add to cart</button>
                </div>

            </div>
        </div >
    );
};

export default CarDetails;