import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TypeBlog = {
    id: string,
    title: string
    url: string
    description: string
    date: string
    editingPost?: boolean
}

export const initialState: TypeBlog[] = [
    // {
    //     id: "1",
    //     title: 'abc',
    //     url: './src/assets/ben.jpg',
    //     description: 'Moi cong viec thanh dat deu nho su kien tri va long say me',
    //     date: '2024-12-22'
    // },
]


export const blogSlice = createSlice({
    name: 'blogList',
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<TypeBlog>) => {
            state.push(action.payload)
        },
        deleteBlog: (state, action: PayloadAction<string>) => {
            const blogId = action.payload
            const foundIndex = state.findIndex(blog => blog.id = blogId)
            if (foundIndex !== -1) {
                state.splice(foundIndex, 1)
            }
        },
        editingBlog: (state, action) => {
            const blogId = action.payload
            const foundBlog = state.findIndex(blog => blog.id === blogId)
            // console.log("foundBlog: ", foundBlog);
            if (foundBlog !== -1) {
                state[foundBlog] = action.payload;
                state[foundBlog].editingPost = true;

            }
        },
    }
})

export const { addBlog, deleteBlog, editingBlog } = blogSlice.actions
const blogReducer = blogSlice.reducer
export default blogReducer