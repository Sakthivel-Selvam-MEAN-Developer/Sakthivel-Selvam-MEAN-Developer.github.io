const FollowFooter = () => {
    return (
        <div className="follow-footer pb-5 pt-4 ps-2 pe-2 d-flex flex-column">
            <footer className="m-0 d-flex">
                <div className="footer-body">
                    <ul className='d-flex justify-content-start flex-wrap list-unstyled'>
                        <li>About</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Locations</li>
                        <li>Language</li>
                        <li>Meta Verified</li>
                    </ul>
                </div>
            </footer>
            <div className="copy-right d-flex">
                <p>&copy; 2023 instagram form meta</p>
            </div>
        </div>
    )
}

export { FollowFooter }