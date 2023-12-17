import { useState } from 'react'
import { Aside } from '../Aside/Aside'
import { BottomNav } from '../BottomNav/BottomNav'
import { Follow } from '../Follow/Follow'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import { NewPost } from '../NewPost/NewPost'
import { Posts } from '../Posts/Posts'
import { Stories } from '../Stories/Stories'
import { useSelector } from 'react-redux'
import './home.css'

const Home = () => {
    const [newPost, setNewPost] = useState(false)

    const currentUser = {
        name: 'Nazriya Nazim Fahad',
        username: 'nazriyafahad',
        imgUrl: '/nazi.jpg'
    }

    const users = useSelector((state) => state.posts)

    return (
        <main className='home'>
            <Nav />
            <section className='side-bar'>
                <Aside currentUser={currentUser} setNewPost={setNewPost} />
            </section>
            <section className='main'>
                <div className="main-content d-flex">
                    <section className='posts-stories mt-3 mb-3'>
                        <Stories />
                        <Posts users={users} />
                    </section>
                    <section className="follow mt-4 mb-3">
                        <Follow users={users} currentUser={currentUser} />
                    </section>
                </div>
            </section>
            <Footer />
            <section className='bottom-nav'>
                <BottomNav />
            </section>
            {newPost && <section className='addnewpost position-absolute'>
                <NewPost 
                currentUser={currentUser} 
                setNewPost={setNewPost} />
            </section>}
        </main>
    )
}

export { Home }