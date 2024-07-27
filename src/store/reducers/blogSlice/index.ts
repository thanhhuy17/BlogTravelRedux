import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TypeBlog = {
    id: string
    title: string
    url: string
    description: string
    date: string
}

export const initialState: TypeBlog[] = [
    // {
    //     id: "1",
    //     title: 'abc',
    //     url: './src/assets/ben.jpg',
    //     description: 'Moi cong viec thanh dat deu nho su kien tri va long say me',
    //     date: '2024-12-22'
    // },
    // {
    //     id: "2",
    //     title: 'abc',
    //     url: './src/assets/ben.jpg',
    //     description: 'Moi cong viec thanh dat deu nho su kien tri va long say me',
    //     date: '2024-09-06'
    // },
    // {
    //     id: "3",
    //     title: 'absgdefghsrtedhaec',
    //     url: './src/assets/ben.jpg',
    //     description: 'Moi cong viec thanh dat deu nho su kien tri va long say me',
    //     date: '2024-07-26'
    // },
    // {
    //     id: "4",
    //     title: 'absgdefghsrtedhaec',
    //     url: './src/assets/ben.jpg',
    //     description: 'Moi cong viec thanh dat deu nho su kien tri va long say me',
    //     date: '2024-07-26'
    // },

]


export const blogSlice = createSlice({
    name: 'blogList',
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<TypeBlog>) => {
            state.push(action.payload)
        }
    }
})

export const { addBlog } = blogSlice.actions
const blogReducer = blogSlice.reducer
export default blogReducer