
const AddProduct = () => {

    const handelAddCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const photo = e.target.photo.value;

        const productDetails = {
            name, price, description, rating, photo
        }
        console.log(productDetails)
        // send data to back hand data server
    }


    return (
        <div className="mt-8 mb-12 container mx-auto">


            <div className="bg-[#F4F3F0] px-24 py-5">
                <h1 className="text-2xl font-bold text-center">
                    Add New Product Hare !!
                </h1>

                <form onSubmit={handelAddCoffee} className="mt-7">
                    {/* name and Quantity*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="Car Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Car Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" placeholder="Car Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Short description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" placeholder="Short description "
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="rating" placeholder="Rating"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo URL"
                                className="input input-bordered w-full" />
                        </label>

                    </div>

                    <input type="submit" value="Add new Car" className="btn mt-4 btn-block bg-pink-600 text-white" />


                </form>


            </div >



        </div >

    );
};

export default AddProduct;