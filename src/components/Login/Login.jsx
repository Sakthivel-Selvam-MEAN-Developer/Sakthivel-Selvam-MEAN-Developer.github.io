import { useEffect } from "react"
import { useState } from "react"
import './login.css'
import { DownloadApp } from "../GetApp/DownloadApp"
import { Footer } from "../Footer/Footer"

const Login = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const images = ['/screenshot1.png', '/screenshot2.png', '/screenshot3.png', '/screenshot4.png']

    useEffect(() => {
        const interval = setInterval(() => {
            if (imageIndex === images.length - 1) {
                setImageIndex(0)
            } else {
                setImageIndex(imageIndex + 1)
            }
        }, 3000)
        return () => clearInterval(interval)
    }, [imageIndex])

    return (
        <section className="container-fluid">
            <article className="login">
                <div className="all-images">
                    <div className="faded-images">
                        <img
                            src={images[imageIndex]}
                            alt={`screenshot${imageIndex}`}
                            className='screenshot'
                        />
                    </div>
                </div>
                <div className="login-form">
                    <div className="login-by-mail">
                        <div className="instagram-title text-center">
                            <img src="/instagram.svg" alt="instagram-title" width={175} />
                        </div>
                        <div className="form">
                            <form action="#" className="d-flex flex-column align-items-center">
                                <div className="username">
                                    <div className="input">
                                        <label htmlFor="username">
                                            <input type="text" className="input-control" id='username' required />
                                            <span>Phone number, username or email address</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="password">
                                    <div className="input">
                                        <label htmlFor="password">
                                            <input type="password" className="input-control" id='password' required />
                                            <span>Password</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="login-btn">
                                    <button className="btn">Log in</button>
                                </div>
                            </form>
                        </div>
                        <div className="login-or">
                            <span><hr /></span>
                            <span>OR</span>
                            <span><hr /></span>
                        </div>
                        <div className="login-with-fb d-flex justify-content-center">
                            <button>
                                <span className="d-flex">
                                    <img src="/facebook.svg" alt="facebook-logo" width={16} />
                                </span>
                                <span>
                                    Log in with Facebook
                                </span>
                            </button>
                        </div>
                        <div className="forget-password-link">
                            <a href="#">
                                Forgetted your Password ?
                            </a>
                        </div>
                    </div>
                    <div className="signup-link">
                            <span>
                                <p>
                                    Don't have an account?
                                    <a href="/signup">Sign up</a>
                                </p>
                            </span>
                        </div>
                    <DownloadApp />
                </div>
            </article>
            <Footer />
        </section>
    )
}

export { Login }