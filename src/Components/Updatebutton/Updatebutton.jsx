import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatebutton = () => {
    const car = useLoaderData()

    const { _id, brand, description, photo, price, rating, name } = car || {}

    const handelUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const photo = e.target.photo.value;
        const brand = e.target.brand.value;

        const newCar = {
            name, price, description, rating, photo, brand
        }
        console.log(newCar)
        fetch(`http://localhost:5000/newCar/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Car information update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                e.target.reset()
            })
    }


    return (
        <div className="mt-8 mb-12 container mx-auto">


            <div className="bg-[#F4F3F0] px-24 py-5">
                <h1 className="text-2xl font-bold text-center">
                    Update Product Hare !!
                </h1>

                <form onSubmit={handelUpdate} className="mt-7">
                    {/* name and Quantity*/}
                    <div className="grid grid-cols-1 w-full  md:grid-cols-2">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={name} placeholder="Car Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control  ml-4">
                            <label className="label">
                                <span className="label-text">Car Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" defaultValue={price} placeholder="Car Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* supplier row */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" defaultValue={description} placeholder="description"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control  ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>






                        <div className="">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>


                        <div className="form-control  ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label defaultValue={brand} className="  w-full">
                                <select name="brand" className="select  w-full">
                                    <option value="Toyota">Toyota</option>
                                    <option value="Ford">Ford</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                </select>
                            </label>
                        </div>

                    </div>



                    <input type="submit" value="Submit" className="btn mt-4 btn-block bg-pink-600 text-white" />




                </form>


            </div >



        </div >
    );
};

export default Updatebutton;