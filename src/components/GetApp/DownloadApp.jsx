const DownloadApp = () => {
    return (
        <div className="download-app mt-2 flex-wrap d-flex flex-column w-100 justify-content-center align-items-center">
            <div className="title">
                <p>Get the app.</p>
            </div>
            <div className="getApp d-flex">
                <div className="download-using-playstore me-2">
                    <a href="#">
                        <img src="/get-app-in-google-play-store.png" alt="playstore" width={130} />
                    </a>
                </div>
                <div className="download-using-microsoft">
                    <a href="#">
                        <img src="/get-app-in-microsoft-store.png" alt="microsoft" width={110} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export { DownloadApp }