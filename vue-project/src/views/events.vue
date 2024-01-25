<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

<div class="occasion">
    <h1>Whats the Occassion</h1>
</div>
    <div class="button-container">
        <div class="event">
            <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Anniversary</label>
        <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Baby Shower</label>
        <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Birthday</label>
                <!-- <button>Anniversary</button>
                <button>Baby Shower</button>
                <button>Birthday</button> -->
        </div>
            
        <div class="otherEvent">
            <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Corporate Event</label>
        <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Date Night</label>
        <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Party/Other</label>
                <!-- <button>Corporate Event</button>
                <button>Date Night</button>
                <button>Party/Other</button> -->
        </div>
    </div>
    <div class="textbox">
        <h1>How Many will be in attendance?</h1>
    
        <input type="text">
    </div>


    <div class="submit">
        <button class="submit-button"><RouterLink to="/cuisine">Submit</RouterLink></button>
    </div> 
</template>

<style scoped>

.button-container{
    display: flex;
    margin: 5px;
    gap: 450px;
    margin-top: 50px;
}
.occasion{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    
}
.event{
display: flex;
flex-direction: row;
margin-left: 450px;
border-radius: 8px;
/* justify-content: flex-end; */
flex-flow: column;
width: 200px;
row-gap: 20px;
}
.otherEvent{
    display: flex;
flex-direction: row;
margin: 5px;
border-radius: 8px;
justify-content: flex-end;
flex-flow: column;
width: 200px;
row-gap: 20px;

}

.textbox{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}
.submit{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 450px; 
}
</style>