import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
    const car = useLoaderData()
    console.log(car)
    const { brand, description, photo, price, rating, name } = car || {}
    return (
        <div className="container mx-auto my-10 flex gap-10">
            <img className="w-[50%]" src={photo} alt="" />
            <div className="flex flex-col flex-grow space-y-4">
                <h4 className="text-2xl">{name}</h4>
                <h4 className="font-semibold">{brand}</h4>
                <p>{description}</p>
                <p>{price}</p>
                <p>{rating}</p>

                <button className="btn">Add to cart</button>
            </div>

        </div>
    );
};

export default CarDetails;