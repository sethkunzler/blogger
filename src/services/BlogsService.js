import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log('blogs', response.data) 
    const newBlogs = response.data.map(blogPOJO => new Blog(blogPOJO))
    AppState.blogs = newBlogs
  }
}

export const blogsService = new BlogsService