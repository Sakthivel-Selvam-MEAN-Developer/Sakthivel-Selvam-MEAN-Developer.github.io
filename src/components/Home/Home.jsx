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
        imgUrl: '../public/nazi.jpg'
    }
    
    const users = [
        {
            name: 'sarayarkin',
            imgUrl: '../public/sarayarkin.jpg'
        },
        {
            name: 'earth',
            imgUrl: '../public/w-3.png'
        },
        {
            name: 'dhariaartist',
            imgUrl: '../public/dharia.jpg'
        },
        {
            name: 'kitty_art',
            imgUrl: '../public/w-2.png'
        },
        {
            name: 'danger_man',
            imgUrl: '../public/w-1.jpg'
        },
        {
            name: 'nazriyafahad',
            imgUrl: '../public/nazi.jpg'
        },
        {
            name: 'mackenziefoy',
            imgUrl: '../public/macken.jpg'
        },
        {
            name: 'honda_hrc',
            imgUrl: '../public/honda.jpg'
        },
        {
            name: 'hero_motocorp',
            imgUrl: '../public/hero.jpg'
        },
        {
            name: 'dqsalmaan',
            imgUrl: '../public/dq.jpg'
        },
        {
            name: 'billybolt',
            imgUrl: '../public/billy.jpg'
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