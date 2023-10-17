import { Link } from "react-router-dom";

const LoginPage = () => {


    const HandelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const logInfo = { email, password };
        console.log(logInfo)
    }

    return (
        <div className="hero-content flex-col lg:flex-row-reverse mt-8 mb-12 bg-[#F2F2F2]">

            <div className="md:flex gap-4">
                <img src="https://i.ibb.co/WcczcWf/img-03-1.jpg" alt="" />
                <div>
                    <div className="text-center lg:text-left mt-5">
                        <h1 className="text-5xl font-bold">LogIn:</h1>
                        <p className="py-6">Savings of up to 15% with our car rental solutions, global coverage and a dedicated customer team</p>
                    </div>
                    <form onSubmit={HandelLogin}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <h4 className="text-xl mb-3">Login with <button className="font-semibold text-violet-700 underline">Google</button></h4>
                        <h4 className="text-xl">Don`t have account? please <Link
                            to='/register' className="font-semibold text-violet-700 underline">Register</Link></h4>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;