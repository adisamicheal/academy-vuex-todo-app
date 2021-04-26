<template>
  <div class="home">
    <h1>Welcome to the Academy Todo Vuex application</h1>
    <p>Here are a few tasks you have to do</p>
    <div class="home-content">
      <div class="card">
        <div class="card-body" v-for="(todo, index) in getTodoItems" :key="index">
          <h5 class="card-title">{{ todo.title }}</h5>
          <p class="card-text">{{ todo.description }}</p>
          <router-link :to="{ name: 'SingleTodo', params: { id: `${ todo.id }` }}" class="btn btn-primary">View</router-link>
          <a href="#" class="btn btn-danger ml-2" @click="deleteTodoItem(todo.id)">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters([
      'getTodoItems'
    ])
  },
  methods: {
    ...mapActions([
      'deleteTodoItem'
    ])
  }
}
</script>

<style scoped>
.home-content {
  max-width: 700px;
  display: block;
  margin: auto;
}
</style>
