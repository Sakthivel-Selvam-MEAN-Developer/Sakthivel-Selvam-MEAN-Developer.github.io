import { useState } from 'react'
import './newpost.css'
import { useDispatch } from 'react-redux'
import { addPost } from '../Posts/postsSlice'

const NewPost = ({ currentUser, setNewPost }) => {

    const [next, setNext] = useState(false)
    const dispatch = useDispatch()
    const [caption, setCaption] = useState('')
    const [location, setLocation] = useState('')
    const [postImgUrl, setpostImgUrl] = useState('')

    const handleImageChange = (e) => {
        setpostImgUrl(URL.createObjectURL(e.target.files[0]))
    }
    const handleRemoveImage = () => {
        if (next) {
            if (confirm('Are you sure you go to Back?'))
                setNext(false)
        } else if (postImgUrl == '') {
            if (confirm('Are you sure you want to Discard the Post?'))
                setNewPost(false)
        } else if (postImgUrl != '') {
            if (confirm('Are you sure you want to Delete the File?'))
                setpostImgUrl('')
        }
    }

    const handleAddNewPost = (e) => {
        e.preventDefault()
        setNext(true)
        if (document.getElementById('add-post').innerText == 'Share') {
            const likes = Math.floor(Math.random() * 100000)
            setNewPost(false)
            dispatch(
                addPost(currentUser.username, postImgUrl, currentUser.imgUrl, location, likes, caption)
            )
        }

    }

    return (
        <div className="new-post-main" id='new-post-main'>
            <div className={`d-flex justify-content-center ${next ? 'new-post-caption' : 'newpost'}`}>
                <div className="new-post-body w-100 d-flex flex-column justify-content-start align-items-center">
                    <div className="modal-header p-2 w-100 d-flex justify-content-between">
                        <div className="back-link ps-2">
                            <a href="#" className='text-decoration-none' onClick={() => handleRemoveImage()}>Back</a>
                        </div>
                        <div className="header">
                            <p className='mb-1 fw-semibold'>Create new post</p>
                        </div>
                        <div className="next-link pe-2">
                            <a href="#" id='add-post' className={`text-decoration-none ${postImgUrl == '' ? ' disabled-a' : ''}`} onClick={(e) => handleAddNewPost(e)}>
                                {next ? 'Share' : 'Next'}
                            </a>
                        </div>
                    </div>
                    <div className="select d-flex w-100 h-100">
                        {postImgUrl == '' ? (
                            <div className="select-file w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-icon">
                                    <svg aria-label="Icon to represent media such as images or videos" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96">
                                        <title>Icon to represent media such as images or videos</title>
                                        <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div className="title">
                                    <h5 className='fw-normal mt-2 mb-2'>Select photos and videos here</h5>
                                </div>
                                <div className="select-file-input mt-3 mb-2">
                                    <label htmlFor="uploadFile" className='btn btn-primary'>
                                        Select From Computer
                                        <input type="file" id='uploadFile' className='d-none' accept='image/*' onChange={e => handleImageChange(e)} />
                                    </label>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="selected-file-preview w-100 h-100 d-flex align-items-center" >
                                    <img src={postImgUrl} alt="image" className='w-100 h-100 object-fit-cover ' />
                                </div>
                                {next && (
                                    <div className="caption d-flex flex-column">
                                        <div className="current-user-profile d-flex align-items-center">
                                            <div className="user-image">
                                                <img src={currentUser.imgUrl} alt="image" width={50} className='rounded-5' />
                                            </div>
                                            <div className="suggested-user-name ms-3">
                                                <p className='m-0'>{currentUser.username}</p>
                                                <p className='suggested-text m-0'>{currentUser.name}</p>
                                            </div>
                                        </div>
                                        <div className="caption-content d-flex">
                                            <textarea name="caption" id="caption" className='w-100' placeholder='Write a caption...' onInput={(e) => setCaption(e.target.value)}></textarea>
                                        </div>
                                        <div className="add-emojis d-flex justify-content-between ps-1 pe-1">
                                            <div className="emoji">
                                                <svg aria-label="Emoji" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                                                    <title>Emoji</title>
                                                    <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                                </svg>
                                            </div>
                                            <div className="caption-length">
                                                <span>{caption.length}</span>
                                            </div>
                                        </div>
                                        <div className="location d-flex justify-content-between align-items-center">
                                            <input type="text" id='location' placeholder='Add location' className='w-100 pe-2' onInput={(e) => setLocation(e.target.value)} />
                                            <div className="location-icon d-flex align-items-center justify-content-center">
                                                <svg aria-label="Add Location" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16">
                                                    <title>Add Location</title>
                                                    <path d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { NewPost }