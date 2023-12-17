import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'sarayarkin',
        imgUrl: '/sarayarkin.jpg',
    },
    {
        id: 2,
        name: 'earth',
        imgUrl: '/w-3.png',
    },
    {
        id: 3,
        name: 'dhariaartist',
        imgUrl: '/dharia.jpg',
    },
    {
        id: 4,
        name: 'kitty_art',
        imgUrl: '/w-2.png',
    },
    {
        id: 5,
        name: 'danger_man',
        imgUrl: '/w-1.jpg',
    },
    {
        id: 6,
        name: 'nazriyafahad',
        imgUrl: '/nazi.jpg',
    },
    {
        id: 7,
        name: 'mackenziefoy',
        imgUrl: '/macken.jpg',
    },
    {
        id: 8,
        name: 'honda_hrc',
        imgUrl: '/honda.jpg',
    },
    {
        id: 9,
        name: 'hero_motocorp',
        imgUrl: '/hero.jpg',
    },
    {
        id: 10,
        name: 'dqsalmaan',
        imgUrl: '/dq.jpg',
    },
    {
        id: 11,
        name: 'billybolt',
        imgUrl: '/billy.jpg',
    }
]


const postsSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        
    }
})

export default postsSlice.reducer