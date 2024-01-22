<script setup>
import {reactive, ref} from 'vue';
import { RouterLink } from 'vue-router'

let email = ref('')
let password = ref('')

function login() {
  const reqBody = {
    "email": email.value,
    "password": password.value
  }

  fetch("http://localhost:3000/login", 
  {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(reqBody),
    method: "POST"
})
.then (response => {
    return response.json()
})
.then (json => {
  console.log(json)
})
}
</script>

<template>
  <div class="container"></div>
  <img id="logo" src="/Users/bbarnett12/Library/CloudStorage/OneDrive-Humana/Desktop/Petcha Kutcha photos/Unknown-6.jpeg">
  <input v-model="email" type="text" placeholder="email">
  <input v-model="password" type="text" placeholder="password">
  <button @click="login">login</button>
  <RouterLink to="/register">Register</RouterLink>

</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100vh;
}
#logo{
  height: 6rem;
  widows: 6rem;
}
</style>
