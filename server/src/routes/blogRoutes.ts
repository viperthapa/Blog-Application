import { Router } from "express"
import * as blog from "../controllers/blog"

const router: Router = Router()

/**
 * GET /api/blog
 */
router.get("/", blog.fetchAll)

/**
 * POST /api/blog
 */
router.post("/", blog.create)

/**
 * PUT /api/blog
 */
router.put("/:id", blog.update)

/**
 * DELETE /api/blog
 */
router.delete("/:id", blog.destroy)

export default router;