import { IBlog } from "../types/blog"
import { model, Schema } from "mongoose"
import { title } from "process"

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    isPublished: { type: Boolean, default: false }
}
)
export default model<IBlog>("Blog", BlogSchema)
