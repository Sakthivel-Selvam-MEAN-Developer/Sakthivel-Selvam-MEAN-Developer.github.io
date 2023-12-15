const MoreOptionsModal = () => {
    return (
        <div className="modal fade" id="moreOptions" tabIndex="-1" aria-labelledby="moreOptions" aria-hidden="true">
            <div className="modal-dialog d-flex justify-content-center align-items-center mt-0">
                <div className="modal-content bg-dark">
                    <div className="modal-header d-flex flex-column">
                        <a href="#" className='text-decoration-none'>
                            <p className="modal-title text-danger fw-bold">Report</p>
                        </a>
                    </div>
                    <div className="modal-header d-flex flex-column">
                        <a href="#" className='text-decoration-none'>
                            <p className="modal-title text-danger fw-bold">Unfollow</p>
                        </a>
                    </div>
                    <div className="modal-header d-flex flex-column">
                        <a href="#" className='text-decoration-none text-white'>
                            <p className="modal-title">Go to post</p>
                        </a>
                    </div>
                    <div className="modal-header d-flex flex-column">
                        <a href="#" className='text-decoration-none text-white'>
                            <p className="modal-title">Share to...</p>
                        </a>
                    </div>
                    <div className="modal-header d-flex flex-column">
                        <a href="#" className='text-decoration-none text-white'>
                            <p className="modal-title">Copy link</p>
                        </a>
                    </div>
                    <div className="modal-header d-flex flex-column border-0 ">
                        <a href="#" className='text-decoration-none text-white' data-bs-dismiss="modal">
                            <p className="modal-title">Cancel</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MoreOptionsModal }