const CurrentUserProfile = () => {
    return (
        <div className="current-user-profile mb-2">
            <div className='suggested-user d-flex justify-content-between align-items-center'>
                <div className="suggested-user-profile d-flex align-items-center">
                    <img src='../public/nazi.jpg' width={50} className='rounded-5' />
                    <div className="suggested-user-name ms-3">
                        <p className='m-0'>nazriyafahad</p>
                        <p className='suggested-text m-0'>Nazriya Nazim Fahad</p>
                    </div>
                </div>
                <div className="follow-link">
                    <a href="#" className='text-decoration-none'>Switch</a>
                </div>
            </div>
        </div>
    )
}

export { CurrentUserProfile }