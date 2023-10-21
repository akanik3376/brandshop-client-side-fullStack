import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providor/Providor";
import AddToCart from "../../Components/AddToCart/AddToCart";

const MyCart = () => {

    const { user } = useContext(AuthContext)
    console.log(user?.email)
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/getCart/${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user?.email])

    console.log(data)

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">
                My Cart !!</h1>

            <div className="grid grid-cols-1 container mx-auto gap-5 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    data?.map(cartCar => <AddToCart key={cartCar._id} data={cartCar}></AddToCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;