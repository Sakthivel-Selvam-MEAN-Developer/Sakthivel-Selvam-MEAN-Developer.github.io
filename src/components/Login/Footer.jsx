import './login.css'

const Footer = () => {
    const footer_body = ['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Instagram Lite', 'Threads', 'Contact uploading and non-users', 'Meta Verified']

    return (
        <footer className='footer d-flex flex-column mb-5'>
            <div className="footer-body d-flex justify-content-center flex-wrap">
                {footer_body.map(footer_value => (
                    <a href="#" className='ms-2 mb-2 me-2'>
                        {footer_value} 
                    </a>
                ))}
            </div>
            <div className="copyright d-flex flex-wrap justify-content-center mt-3">
                <p className='ms-2 mb-2 me-2'>English (UK)</p>
                <p className='ms-2 mb-2 me-2'>&copy; 2023 Instagram from Meta</p>
            </div>
        </footer>
    )
}

export { Footer }