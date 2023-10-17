import Banner from "../../Components/Banner/Banner";
import FeedBack from "../../Components/FeetBack/FeedBack";

const Home = () => {
    return (
        <div>
            <div className="my-8">
                <Banner></Banner>
            </div>
            <div className="my-8">
                <FeedBack></FeedBack>
            </div>
        </div>
    );
};

export default Home;