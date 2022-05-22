import Blog from "../models/blog";
import { IBlog } from "../types/blog"


/**
 * Get all blogs
 *
 * @returns {Promise}
 */
export async function fetch() {
  return Blog.find();
}

/**
 * Create new blog
 *
 * @param   {Object}  blog
 * @returns {Promise}
 */
export async function create(data: IBlog) {
  const blog: IBlog = new Blog({
    title: data.title,
    description: data.description,
    author: data.author,
    isPublished: data.isPublished,
  })
  const newBlog = blog.save()
  return newBlog
}

/**
 * Update a blog
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function update(id: string, data: IBlog) {
  const updateTodo: IBlog | null = await Blog.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true }
  )
  return updateTodo
}


/**
 * delete a blog
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function destroy(id: string) {
  const deletedBlog: IBlog | null = await Blog.findByIdAndRemove(
    id
  )
  return deletedBlog
}
