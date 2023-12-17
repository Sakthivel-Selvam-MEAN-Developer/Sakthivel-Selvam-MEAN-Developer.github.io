import { configureStore } from '@reduxjs/toolkit'
import postsSlice from '../components/Posts/postsSlice'
import storiesSlice from '../components/Stories/storiesSlice'

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        stories: storiesSlice
    }
})