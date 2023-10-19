import Swal from "sweetalert2";

const AddProduct = () => {

    const handelAddCoffee = e => {
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
        // send data to back hand data server

        fetch('http://localhost:5000/newCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="mt-8 mb-12 container mx-auto">


            <div className="bg-[#F4F3F0] px-24 py-5">
                <h1 className="text-2xl font-bold text-center">
                    Add New Product Hare !!
                </h1>

                <form onSubmit={handelAddCoffee} className="mt-7">
                    {/* name and Quantity*/}
                    <div className="grid grid-cols-1 w-full  md:grid-cols-2">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="Car Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control  ml-4">
                            <label className="label">
                                <span className="label-text">Car Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" placeholder="Car Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* supplier row */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text"> Short description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" placeholder="Short description "
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control  ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="rating" placeholder="Rating"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>






                        <div className="">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" placeholder="Photo URL"
                                    className="input input-bordered w-full" />
                            </label>

                        </div>


                        <div className="form-control  ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="  w-full">
                                <select name="brand" className="select  w-full">
                                    <option value="">Select Rating</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </label>
                        </div>

                    </div>



                    <input type="submit" value="Add new Car" className="btn mt-4 btn-block bg-pink-600 text-white" />




                </form>


            </div >



        </div >

    );
};

export default AddProduct;