import { Link } from "react-router-dom";

const Register = () => {

    const HandelRegister = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const logInfo = { name, email, password };
        console.log(logInfo)
    }

    return (

        <div className="hero min-h-screen  bg-[#F2F2F2] mt-8 mb-12 p-5">


            <div className=" flex-shrink-0 w-full max-w-sm ">
                <h1 className="text-4xl font-bold text-center mt-3">Register</h1>
                <form onSubmit={HandelRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <h4 className="text-xl">Don`t have account? please <Link
                        to='/login' className="font-semibold text-violet-700 underline">Login</Link></h4>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Register;