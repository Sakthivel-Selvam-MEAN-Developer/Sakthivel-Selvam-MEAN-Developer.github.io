import { MoreOptionsModal } from '../MoreOptions/MoreOptions'
import { Post } from '../Post/Post'
import './posts.css'

const Posts = ({ users }) => {

    const handleMoreOptions = (key) => {

    }

    return (
        <>
            <div className="posts d-flex flex-column justify-content-center align-items-center pt-3 pb-3">
                <Post users={users} />
                <MoreOptionsModal />
            </div>
        </>
    )
}

export { Posts }