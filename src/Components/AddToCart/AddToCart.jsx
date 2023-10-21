/* eslint-disable react/prop-types */

import { AiFillStar } from "react-icons/ai";
import Swal from "sweetalert2";

const AddToCart = ({ data }) => {

    const { _id, brand, description, photo, price, rating, name } = data || {}


    const HandelDelete = _id => {


        fetch(`https://tecnology-server-beth1yehc-anik-ghoshs-projects.vercel.app/getCart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Data delete successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
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