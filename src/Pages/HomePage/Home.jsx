import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Catagory/Catagory";
import FeedBack from "../../Components/FeetBack/FeedBack";
import Questions from "../../Components/Questions/Questions";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>

            <div className="my-8 container mx-auto">
                <Banner></Banner>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 container mx-auto">
                {
                    data?.map(brand => <Category key={brand.id} data={brand}></Category>)
                }
            </div>

            <div className="my-8 container mx-auto">
                <FeedBack></FeedBack>
            </div>

            <div className="my-8 container mx-auto bg-[#28344d]">
                <Questions></Questions>
            </div>

        </div>
    );
};

export default Home;