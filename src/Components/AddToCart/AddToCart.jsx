/* eslint-disable react/prop-types */

import { AiFillStar } from "react-icons/ai";

const AddToCart = ({ data }) => {
    const { _id, brand, description, photo, price, rating, name } = data || {}


    const HandelDelete = _id => {
        console.log(_id)
    }

    return (
        <div className="card card-compact  border-2 p-5 ">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body flex-col">
                <h2 className="card-title">{brand}</h2>
                <h2 className="text-xl">{name}</h2>
                <div className="flex">
                    <p className="text-xl font-semibold"> {price}</p>
                    <p className="text-xl font-semibold flex items-center gap-3"> < AiFillStar className="text-yellow-600"></AiFillStar>{rating}</p>
                </div>
                <p>{description}</p>

                <button onClick={() => HandelDelete(_id)} className="btn">Delete</button>
            </div>

        </div>
    );
};

export default AddToCart;