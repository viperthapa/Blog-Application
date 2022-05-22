import { Response, Request } from "express";
import { IBlog } from "../types/blog"
import * as blogService from "../services/blog"


/**
 * Get all blogs.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchAll(req: Request, res: Response): Promise<void> {
    const blogs: IBlog[] = await blogService.fetch()
    res.status(200).json({ blogs })
}

/**
 * Create a new blog.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function create(req: Request, res: Response): Promise<void> {
    const newBlog = await blogService.create(req.body)
    res.status(201).json({ message: "Blog Created Successfully", blog: newBlog })

}

/**
 * update a new blog.
 *
 * @param {Object} req
 * @param {Object} res
 */
export async function update(req: Request, res: Response): Promise<void> {
    const updateBlog = await blogService.update(req.params.id, req.body)
    res.status(200).json({ message: "Blog updated Successfully", blog: updateBlog })
}


/**
 * delete a  blog.
 *
 * @param {Object} req
 * @param {Object} res
 */
 export async function destroy(req: Request, res: Response): Promise<void> {
    const deleteBlog = await blogService.destroy(req.params.id)
    res.status(200).json({ message: "Blog has been Successfully deleted", blog: deleteBlog })
}
