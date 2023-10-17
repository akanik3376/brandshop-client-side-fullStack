import Banner from "../../Components/Banner/Banner";
import FeedBack from "../../Components/FeetBack/FeedBack";
import Questions from "../../Components/Questions/Questions";

const Home = () => {
    return (
        <div>

            <div className="my-8 container mx-auto">
                <Banner></Banner>
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