<script setup>
import {reactive, ref} from 'vue';
import  router from '@/router'

let email = ref('')
let password = ref('')

function login() {
  router.push("/events")

//   const reqBody = {
//     "email": email.value,
//     "password": password.value
//   }

//   fetch("http://localhost:3000/login", 
//   {
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(reqBody),
//     method: "POST"
// })
// .then (response => {
//     return response.json()
// })
// .then (json => {
  
//   console.log(json)
//   console.log(email.value)
// })
}
</script>

<template>
  <div class="container">
    <h1>Top Off Eatery</h1>
  <img id="logo" src="/Users/bbarnett12/Library/CloudStorage/OneDrive-Humana/Desktop/Petcha Kutcha photos/Unknown-6.jpeg">
  <input v-model="email" type="text" placeholder="email">
  <input v-model="password" type="text" placeholder="password">
  <button @click="login">login</button>
  <RouterLink to="/register">Register</RouterLink>
  </div>
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
  height: 15rem;
  
  widows: 6rem;
}
</style>
