import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';

const Registration = () => {
    const { googleLogin, createUser, handleUpdateprofile } = UseAuth();
    const navigate = useNavigate()
    const handleSocialLogin = (media) => {
        media()
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field value from the form
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;

        // password validation

        if (password.length < 6) {
            toast.error('password must be at least 6 carecters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters');
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Your password should have at least one special character');
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                handleUpdateprofile(name, img)
                    .then(() => {
                        toast.success('user created succesfully');
                        navigate('/')
                    })
            }

            )
            .catch(error => toast.error(error.message))



    }

    return (
        <>
            <div className="-mb-20 hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row px-32">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold font-serif text-violet-900">Sign Up now!</h1>
                        <p className="mx-auto lg:mx-0 py-6 font-serif text-lg font-semibold w-3/6"> If it's your first time here, welcome aboard! Feel free to create an account and explore the world of unforgettable events.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Full Name</span>
                                </label>
                                <input type="text" required name='name' placeholder="Full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" required name='img' placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn bg-violet-900  hover:bg-violet-900 text-white">Sign Up</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <button onClick={() => handleSocialLogin(googleLogin)} className="btn bg-violet-900 text-white hover:bg-violet-900"><FcGoogle className='w-10 h-8'></FcGoogle>Continue with Google</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Registration;