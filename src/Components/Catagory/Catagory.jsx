/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({ data }) => {


    const { name, image } = data || {}
    // const { id } = useParams()

    return (
        <Link to={`/brand/${name}`}>

            <div className=" shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} className="rounded-xl h-40 w-full " />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">Brand: {name}</h2>

                </div>
            </div>

        </Link>
    );
};

export default Category;