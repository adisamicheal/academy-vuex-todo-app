<template>
  <div class="single">
      <div class="card">
        <h3>Todo TItle: {{ currentTodo.title }}</h3>
        <hr>
        <p>Descrition: {{ currentTodo.description }}</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'SingleTodo',
    computed: {
        ...mapGetters(['getTodoById']),
        currentTodo() {
            const id = this.$route.params.id
            
            // return this.$$store.getters.getTodoById(Number(id))

            // The above is same as this
            return this.getTodoById(Number(id))
        }
    }
}
</script>

<style scoped>
.single {
    max-width: 700px;
    display: block;
    margin: auto;
}
.card {
    padding: 20px;
}
</style>