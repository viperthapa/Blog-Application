import axios, { AxiosResponse } from "axios";
const baseUrl: string = "http://localhost:5000/api/"

/**
 * Get a list of blogs.
 */
export const getBlogs = async (): Promise<AxiosResponse<ApiDataType>> => {
    const blogs: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + "/blog"
    )
    return blogs
}


/**
 * POST a  blogs.
 */
export const addTodo = async (
    formData: IBlog
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const blog: Omit<IBlog, "_id"> = {
            title: formData.title,
            description: formData.description,
            author: formData.author,
            isPublished: false,

        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/blog",
            blog
        )
        return saveTodo
    } catch (err) {
        const my_error: Error = new Error("err");
        throw my_error

    }
}


/**
 * Update a  blogs.
 */
export const updateTodo = async (
    todo: IBlog
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<IBlog, "isPublished"> = {
            isPublished: true,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/blog/${todo._id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
        const my_error: Error = new Error("err");
        throw my_error
    }
}

/**
 * Delete a  blogs.
 */
export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/blog/${_id}`
        )
        return deletedTodo
    } catch (error) {
        const my_error: Error = new Error("err");
        throw my_error
    }
}