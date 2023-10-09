import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';

const Login = () => {

    const { googleLogin,signInUser} = UseAuth();
    const navigate = useNavigate()
    const handleSocialLogin = (media) => {
        media()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field value from the form
        
        const email = event.target.email.value;
        const password = event.target.password.value;

      
       

        // create user
        signInUser(email, password)
        .then(() => {
            toast.success('user Login succesfully');
            navigate('/')
        })
        .catch(error => toast.error(error.message))


    }
    return (
        <div className=''>
            <div className=" hero min-h-screen bg-base-200 -mb-20">
                <div className="hero-content flex-col lg:flex-row px-32">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold font-serif text-violet-900">Login now!</h1>
                        <p className="lg:mx-0 mx-auto py-6 font-serif text-lg font-semibold w-3/6">Please log in to access your account and continue your
                            event planning journey with us.  Let's get started!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit } className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn bg-violet-900 text-white hover:bg-violet-900">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/registration" className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                            <button onClick={() => handleSocialLogin(googleLogin)} className="btn bg-violet-900 text-white hover:bg-violet-900"><FcGoogle className='w-10 h-8'></FcGoogle>Continue with Google</button>
                        </form>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Login;