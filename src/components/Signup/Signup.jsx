import { Footer } from '../Footer/Footer'
import { DownloadApp } from '../GetApp/DownloadApp'
import './signup.css'
import '../Login/login.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <main className='d-flex justify-content-center align-items-center w-100'>
                <div className="signup d-flex flex-column pt-3">
                    <section className='signup-form-section'>
                        <div className="instagram-title text-center mt-5 mb-3">
                            <img src="/instagram.svg" alt="instagram-title" width={175} />
                        </div>
                        <div className="sigup-form">
                            <form action="#" className='d-flex justify-content-center flex-column'>
                                <div className="note">
                                    <p className='text-secondary fw-semibold text-center'>Sign up to see photos and videos from your friends.</p>
                                </div>
                                <div className="login-with-fb ">
                                    <button className='btn d-flex justify-content-center align-items-center'>
                                        <img src="/facebook-white.svg" alt="facebook-white" width={18} />
                                        <span className='ps-2 text-white fw-semibold fs-6'>Log in with Facebook</span>
                                    </button>
                                </div>
                                <div className="signup-or mb-3 mt-1">
                                    <span><hr /></span>
                                    <span>OR</span>
                                    <span><hr /></span>
                                </div>
                                <div className="username d-flex justify-content-center">
                                    <div className="input">
                                        <label htmlFor="username">
                                            <input type="text" className="input-control" id='username' required />
                                            <span>Mobile number or email address</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="username d-flex justify-content-center">
                                    <div className="input">
                                        <label htmlFor="username">
                                            <input type="text" className="input-control" id='username' required />
                                            <span>Fullname</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="username d-flex justify-content-center">
                                    <div className="input">
                                        <label htmlFor="username">
                                            <input type="text" className="input-control" id='username' required />
                                            <span>Username  </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="password d-flex justify-content-center">
                                    <div className="input">
                                        <label htmlFor="password">
                                            <input type="password" className="input-control" id='password' required />
                                            <span>Password</span>
                                        </label>
                                    </div>
                                </div>
                                <p className='terms text-center text-secondary'>
                                    <span>
                                        People who use our service may have uploaded your contact information to Instagram.
                                        <a href="#" className='text-decoration-none'> Learn more</a>
                                    </span>
                                    <br />
                                    <br />
                                    By signing up, you agree to our
                                    <a href="#" className='text-decoration-none'> Terms</a>,
                                    <a href="#" className='text-decoration-none'> Privacy Policy</a> and
                                    <a href="#" className='text-decoration-none'> Cookies Policy</a>.
                                </p>
                                <div className="signup-btn mb-4">
                                    <Link to={'/'}>
                                        <button className="btn">Sign Up</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className='login-link-section'>
                        <span>
                            <p>
                                Have an account?
                                <Link to={'/'}>
                                    <a href="#" className='text-decoration-none'> Log in</a>
                                </Link>
                            </p>
                        </span>
                    </section>
                    <section className='getapp-section mb-5'>
                        <DownloadApp />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export { SignUp }