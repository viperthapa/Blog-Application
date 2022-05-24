interface IBlog {
    _id: string,
    title: string,
    description: string,
    author: string,
    isPublished: boolean
    createdAt?: string
    updatedAt?: string
}

//used in component for rendering a data
interface BlogProps {
    blog: IBlog
}

//data type used at the time of response from backend
type ApiDataType = {
    message: string,
    status: string,
    blogs: IBlog[]
    blog?: IBlog
}



