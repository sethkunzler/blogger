<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Blogs</h1>
      </div>
    </section>
    <section v-for="blog in blogs" :key="blogs.id" class="row rounded bg-light blog-post m-3 shadow">
      <div class="col-md-6">
        <div class="card-body">
          <div>
            <h6>{{ blog.creator.name }}</h6>
            <img class="creator-picture" :src="blog.creator.picture" :alt="blog.creator.name">
          </div>
          <div>
            <h5 class="card-title">{{ blog.title }}</h5>
            <p class="card-text">{{ blog.body }}</p>
            <p class="card-text"><small class="text-body-secondary">{{ blog.createdAt.toLocaleDateString() + '  ' + blog.createdAt.toLocaleTimeString() }}</small></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 text-center p-2">
        <img :src="blog.imgUrl" class="img-fluid rounded blog-img" :alt="blog.title">
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from "vue"
import { blogsService } from '../services/BlogsService.js'
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"

export default {
setup(){
  async function getBlogs() {
    try {
      await blogsService.getBlogs()
    } catch (error) {
      Pop.error(error)
    }
  }
  onMounted(() => {
    logger.log('on mounted works') 
    getBlogs()
  })
return{
  blogs: computed(() => AppState.blogs)
}
}
}
</script>


<style lang="scss" scoped>
.blog-post {
  border: 2px solid black;
}
.creator-picture {
  height: 8vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.blog-img {
  height: 40vh;
}
</style>