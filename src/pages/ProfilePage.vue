<template>
  <h1>This is the Profile Page</h1>
</template>


<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger.js";

export default {
setup(){
  onMounted(() => {
    logger.log("Profile page was mounted correctly")
  })
return{}
}
}
</script>


<style lang="scss" scoped>

</style>