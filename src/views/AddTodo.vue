<template>
  <div class="todo">
      <h1>Add Todo</h1>
      <form>
        <div class="form-group">
            <label 
                for="formGroupExampleInput"
            >
                Title
            </label>
            <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput" 
                placeholder="Title..."
                v-model="item.title"
            >
        </div>
        <div class="form-group">
            <label 
                for="formGroupExampleInput2"
            >
                Description
            </label>
            <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput2" 
                placeholder="Description..."
                v-model="item.description"
            >
        </div>
        <button @click.prevent="onSubmit" type="button" class="btn btn-primary">Submit</button>
        </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'AddTodo',
    data() {
        return {
            item: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'addTodoItem'
        ]),
        onSubmit() {
            const data = {
                title: this.item.title,
                description: this.item.description
            }
            console.log(data);
            this.addTodoItem(data)
            this.item.title = '',
            this.item.description = ''
        }
    }
}
</script>

<style scoped>
.todo {
    max-width: 450px;
    display: block;
    margin: auto;
}
</style>