const Post = ({ users }) => {
    return (
        <>
            {users.slice(0).reverse().map(post => (
                <div className="users pt-3 pb-1" key={post.id}>
                    <section className="user-profile d-flex justify-content-between">
                        <div className="user-profile-info d-flex align-items-center">
                            <div className="user-profile-img">
                                <img src={post.imgUrl} alt="dharia" width={45} className="rounded-5" />
                            </div>
                            <div className="user-profile-details ms-3">
                                <p className="fw-bold m-0">{post.name}</p>
                                {post.location && <p className="fw-lighter m-0">{post.location}</p>}
                            </div>
                        </div>
                        <div className="user-actions d-flex align-items-center">
                            <a href="#" className='text-white d-flex justify-content-center' data-bs-toggle="modal" data-bs-target="#moreOptions">
                                <svg className='p-0 ' aria-label="More Options" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                                    <title>More Options</title>
                                    <circle cx="12" cy="12" r="1.5"></circle>
                                    <circle cx="6" cy="12" r="1.5"></circle>
                                    <circle cx="18" cy="12" r="1.5"></circle>
                                </svg>
                            </a>
                        </div>
                    </section>
                    <section className="post">
                        <div className="user-post">
                            <img src={post.postImgUrl} alt="sample" width={100} />
                        </div>
                    </section>
                    <section className="post-actions pt-1">
                        <div className="activities d-flex justify-content-between">
                            <div className="left-side d-flex">
                                <div className="like">
                                    <a href="#" className='text-white'>
                                        <svg aria-label="Like" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <title>Like</title>
                                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="comments">
                                    <svg aria-label="Comment" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <title>Comment</title>
                                        <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                                        </path>
                                    </svg>
                                </div>
                                <div className="share">
                                    <svg aria-label="Share Post" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <title>Share Post</title>
                                        <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                                        </polygon>
                                    </svg>
                                </div>
                            </div>
                            <div className="save">
                                <svg aria-label="Save" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Save</title>
                                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                                </svg>
                            </div>
                        </div>
                        <div className="likes-count ps-2">
                            <p className='m-0'>{post.likes} likes</p>
                        </div>
                        <div className="caption ps-2 pt-2">
                            <div className="user-name">
                                <span className='fw-bold m-0 pe-2'>{post.name}</span>
                                <span className='fw-normal'>{post.caption}</span>
                            </div>
                        </div>
                        <div className="comments d-flex align-items-center">
                            <textarea placeholder='Add a comment' name="comment" className='bg-transparent border-1 m-2' required></textarea>
                            <a href="#" className='text-decoration-none d-none' id='post'>
                                Post
                            </a>
                        </div>
                    </section>
                </div>
            ))}
        </>
    )
}

export { Post }