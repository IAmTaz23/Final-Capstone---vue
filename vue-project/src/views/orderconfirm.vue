<script setup>
function getForm(){
    console.log("taz")
      

      let menuField = document.getElementsByName("Asian")
      let menuSelection
        for(let i = 0; i < menuField.length; i++) {
            
            if(menuField[i].checked === true) {
            menuSelection = menuFieldField[i].value
        }
        
    }
      console.log(menuField)
    

      let emailField = document.getElementById("email")
      let email = emailField.value;
      
      alert(`Hello ${name}! Your ${menuSelection} will be ready shortly. An email will be sent to ${email} when its ready!`)
}

</script>

<template>

</template>

<style scoped>

</style>