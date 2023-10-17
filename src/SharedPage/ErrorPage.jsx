import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="border h-[80vh] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Error...</h1>
                <h1 className="text-5xl font-extrabold">404</h1>
                <h3 className="text-3xl font-semibold">Page not found</h3>

                <Link to='/'><button className="btn btn-primary mt-5">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;