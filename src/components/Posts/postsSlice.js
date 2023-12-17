import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: 'sarayarkin',
        imgUrl: '/sarayarkin.jpg',
        likes: 12035,
        caption: 'Some Caption from Sara',
        postImgUrl: '/sarayarkin.jpg',
        location: 'Los Angeles'
    },
    {
        id: 2,
        name: 'earth',
        imgUrl: '/w-3.png',
        likes: 978768,
        caption: 'Some Caption from Sara',
        postImgUrl: '/w-3.png'
    },
    {
        id: 3,
        name: 'dhariaartist',
        imgUrl: '/dharia.jpg',
        likes: 2334,
        caption: 'Some Caption from Sara',
        postImgUrl: '/dharia.jpg'
    },
    {
        id: 4,
        name: 'kitty_art',
        imgUrl: '/w-2.png',
        likes: 23231,
        caption: 'Some Caption from Sara',
        postImgUrl: '/w-2.png'
    },
    {
        id: 5,
        name: 'danger_man',
        imgUrl: '/w-1.jpg',
        likes: 234234,
        caption: 'Some Caption from Sara',
        postImgUrl: '/w-1.jpg'
    },
    {
        id: 6,
        name: 'nazriyafahad',
        imgUrl: '/nazi.jpg',
        likes: 7567448,
        caption: 'Some Caption from Sara',
        postImgUrl: '/nazi.jpg',
        location: 'Kerala'
    },
    {
        id: 7,
        name: 'mackenziefoy',
        imgUrl: '/macken.jpg',
        likes: 23311,
        caption: 'Some Caption from Sara',
        postImgUrl: '/macken.jpg'
    },
    {
        id: 8,
        name: 'honda_hrc',
        imgUrl: '/honda.jpg',
        likes: 22323,
        caption: 'Some Caption from Sara',
        postImgUrl: '/honda.jpg'
    },
    {
        id: 9,
        name: 'hero_motocorp',
        imgUrl: '/hero.jpg',
        likes: 434,
        caption: 'Some Caption from Sara',
        postImgUrl: '/hero.jpg'
    },
    {
        id: 10,
        name: 'dqsalmaan',
        imgUrl: '/dq.jpg',
        likes: 138278,
        caption: 'Some Caption from Sara',
        postImgUrl: '/dq.jpg'
    },
    {
        id: 11,
        name: 'billybolt',
        imgUrl: '/billy.jpg',
        likes: 18020,
        caption: 'Some Caption from Sara',
        postImgUrl: '/billy.jpg'
    }
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, postImgUrl, currentUserImg, location, likes, caption) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        imgUrl: currentUserImg,
                        postImgUrl: postImgUrl,
                        location: location,
                        likes: likes,
                        caption: caption
                    }
                }
            }
        }
    }
})

export default postsSlice.reducer
export const { addPost } = postsSlice.actions