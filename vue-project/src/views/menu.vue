<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="dish-header">
    <h1>Select Your Dish: Asian</h1>
</div>
<div class="menu-container">
    <div class="menu">
        <img src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qsdncbfx/dbcd686d-ac24-481c-8ac5-cd8baab51cbb.jpg" alt="">
        <input type="radio" name="Asian" id="Dim Sum" value="Dim Sum">
        <label for="Dim Sum" >Dim Sum</label>

        <img src="https://lifemadesimplebakes.com/wp-content/uploads/2015/05/better-than-take-out-fried-rice-square-1200.jpg">
        <input type="radio" name="Asian" id="Fried Rice" value="Fried Rice">
        <label for="Fried Rice" >Fried Rice</label>

        <img src="https://www.thespruceeats.com/thmb/87wOXD2--GPS9At7gZrYeuKRwvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/korean-sriracha-kimchi-recipe-2118867-hero-011-f6964d865b6246b180ddb843cdeb132d.jpg">
        <input type="radio" name="Asian" id="kimchi" value="kimchi">
        <label for="kimchi" >kimchi</label>
    </div>
    <div class="otherMenu">
        <img src="https://www.favfamilyrecipes.com/wp-content/uploads/2023/07/Beef-Stir-Fry-in-skillet-with-plate.jpg">
        <input type="radio" name="Asian" id="Stir Fry" value="Stir Fry">
        <label for="Stir Fry" >Stir Fry</label>

        <img src="https://nomadette.com/wp-content/uploads/2022/07/Tom-Yum-Soup.jpg">
        <input type="radio" name="Asian" id="Tom Yam" value="Tom Yam">
        <label for="Tom Yam" >Tom Yam</label>

        <img src="https://cdn.media.amplience.net/i/japancentre/recipe-229-tonkatsu-deep-fried-breaded-pork-cutlet/Tonkatsu-deep-fried-breaded-pork-cutlet?$poi$&w=700&h=410&sm=c&fmt=auto">
        <input type="radio" name="Asian" id="Tonkatsu" value="Tonkatsu">
        <label for="Tonkatsu" >Tonkatsu</label>
    </div>
</div>
<div class="submit">
    <button class="submit-button"><RouterLink to="/ordersubmit">Submit</RouterLink></button>
</div>    



</template>

<style scoped>
.menu-container{
    display: flex;
    margin: 5px;
    gap: 450px;
}
.dish-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    
}
.menu{
display: flex;
flex-direction: row;
margin-left: 400px;
border-radius: 8px;
justify-content: flex-end;
flex-flow: column;
width: 200px;
row-gap: 20px;
}
.otherMenu{
    display: flex;
flex-direction: row;
margin: 5px;
border-radius: 8px;
justify-content: flex-end;
flex-flow: column;
width: 200px;
row-gap: 20px;
}

.submit{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
}
</style>