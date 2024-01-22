<script setup>
import router from '@/router'
import {ref} from 'vue';

const email = ref ('')
const username = ref ('')
const password = ref ('') 

function validateEmail(email) {
    var re = /\S+@\S+
}

function register() {
    const reqBody = {
        "email": email.value,
        "username": username.value,
        "password": password.value
    }

    fetch("http://localhost:3000/users",
    {
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reqBody),
        method: "POST"
    })
    .then (response => {
        if(response.status === 201) {
            alert("Account Created! Please Login to continue.")
            router.push("/")
        } else {
            alert ("Something went wrong! Please try again.")
        }
    })
    .catch (error => {
    console.log(error)
    })
    }


</script>

<template>
<div class="container"></div>
  <img id="logo" 
       src="/Users/bbarnett12/Library/CloudStorage/OneDrive-Humana/Desktop/Petcha Kutcha photos/Unknown-6.jpeg">
  <h1>Register</h1>
  <input v-model="email" type="text" placeholder="email" />
  <input v-model="username" type="text" placeholder="username" />
  <input v-model="password" type="text" placeholder="password">
  <button @click="register">Register</button>
  <RouterLink to="/">Cancel</RouterLink>
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