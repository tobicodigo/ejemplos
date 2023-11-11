<template>

<img v-if="country===1" src="../assets/images/spain.png" id="image">
<img v-else-if="country===2" src="../assets/images/germany.png" id="image">
<img v-else="country===3" src="../assets/images/france.png" id="image">

<br>
<button @click="setCountry(1)">spain</button><br>
<button @click="setCountry(2)">germany</button><br>
<button @click="setCountry(3)">france</button><br>

<span v-show="!showInput" id="textSpan" @click="convertToInput">Click to edit</span>
<input v-show="showInput" type="text" value="text">

</template>


<script setup>
import { ref } from "vue";
const country=ref(1)
const showInput=ref(false)

function setCountry(theCountry) {
    country.value = theCountry
}

function convertToInput() {
    showInput.value=true
}

</script>





<style scoped>

#image {
    width: 100px;
    height: 100px;
}

button {
    width: 70px;
    height: 50px;
}

</style>