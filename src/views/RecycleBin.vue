<template>
  <div>
      <h3>Recycle Bin</h3>
      <div class="recycle-content">
      <div class="card">
        <div class="card-body" v-for="(todo, index) in getDeletedItems" :key="index">
          <h5 class="card-title">{{ todo.title }}</h5>
          <p class="card-text">{{ todo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 name: 'RecycleBin',
 computed: {
   ...mapGetters([
     'getDeletedItems'
   ])
 }
}
</script>

<style scoped>
.recycle-content {
  max-width: 700px;
  display: block;
  margin: auto;
}
</style>