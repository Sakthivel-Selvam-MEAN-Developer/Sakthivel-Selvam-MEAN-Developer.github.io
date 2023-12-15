import { useState } from 'react'
import { Aside } from '../Aside/Aside'
import { BottomNav } from '../BottomNav/BottomNav'
import { Follow } from '../Follow/Follow'
import { Footer } from '../Footer/Footer'
import { Nav } from '../Nav/Nav'
import { NewPost } from '../NewPost/NewPost'
import { Posts } from '../Posts/Posts'
import { Stories } from '../Stories/Stories'
import './home.css'

const Home = () => {
    const [newPost, setNewPost] = useState(false)

    const currentUser = {
        name: 'Nazriya Nazim Fahad',
        username: 'nazriyafahad',
        imgUrl: '/nazi.jpg'
    }
    
    const users = [
        {
            name: 'sarayarkin',
            imgUrl: '/sarayarkin.jpg',
            likes: 12035,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'earth',
            imgUrl: '/w-3.png',
            likes: 978768,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'dhariaartist',
            imgUrl: '/dharia.jpg',
            likes: 2334,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'kitty_art',
            imgUrl: '/w-2.png',
            likes: 23231,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'danger_man',
            imgUrl: '/w-1.jpg',
            likes: 234234,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'nazriyafahad',
            imgUrl: '/nazi.jpg',
            likes: 7567448,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'mackenziefoy',
            imgUrl: '/macken.jpg',
            likes: 23311,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'honda_hrc',
            imgUrl: '/honda.jpg',
            likes: 22323,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'hero_motocorp',
            imgUrl: '/hero.jpg',
            likes: 434,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'dqsalmaan',
            imgUrl: '/dq.jpg',
            likes: 138278,
            caption: 'Some Caption from Sara'
        },
        {
            name: 'billybolt',
            imgUrl: '/billy.jpg',
            likes: 18020,
            caption: 'Some Caption from Sara'
        }
    ]

    return (
        <main className='home'>
            <Nav />
            <section className='side-bar'>
                <Aside currentUser={currentUser} setNewPost={setNewPost} />
            </section>
            <section className='main'>
                <div className="main-content d-flex">
                    <section className='posts-stories mt-3 mb-3'>
                        <Stories users={users} />
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
                <NewPost currentUser={currentUser} setNewPost={setNewPost} />
            </section>}
        </main>
    )
}

export { Home }