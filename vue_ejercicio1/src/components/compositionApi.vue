<script setup>
import { ref, onMounted } from "vue";

const name = ref("John");
const lastName = ref("Doe");
const age = ref(55);

</script>

<template>
    Composition API:<br>
  Hola my name is: {{ name }} {{ lastName }} and I am {{ age }} years old
</template>

<style scoped></style>
