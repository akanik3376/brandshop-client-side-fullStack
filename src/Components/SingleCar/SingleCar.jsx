/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";


const SingleCar = ({ car }) => {

    const { _id, brand, description, photo, price, rating, name } = car || {}
    return (
        <div>

            <div className="card card-compact  border-2 p-5">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body flex-col">
                    <h2 className="card-title">{brand}</h2>
                    <h2 className="text-xl">{name}</h2>
                    <div className="flex">
                        <p className="text-xl font-semibold"> {price}</p>
                        <p className="text-xl font-semibold flex items-center gap-3"> < AiFillStar className="text-yellow-600"></AiFillStar>{rating}</p>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions flex-grow">

                        <Link to={`/carDetails/${_id}`}> <button className="btn btn-secondary ">Details
                        </button></Link>

                        <Link to={`/update/${_id}`}> <button className="btn btn-primary ">Update</button></Link>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default SingleCar;