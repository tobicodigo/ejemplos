<script setup>
import formulario from './components/formulario.vue';
import listas from './components/listas.vue';
import condicionales1 from './components/condicionales1.vue';
import reactivity from './components/reactivity.vue';
import lifecycle from './components/lifecycle.vue';
import optionsApi from './components/optionsApi.vue';
import compositionApi from './components/compositionApi.vue';

</script>

<template>

<formulario></formulario>
<br><br><br><br>
<listas></listas>
<br><br><br><br>
<condicionales1></condicionales1>
<br>
<br><br>

<reactivity></reactivity>
<br><br>
<lifecycle></lifecycle>
<br><br>
<optionsApi></optionsApi>
<br><br>
<compositionApi></compositionApi>
<br><br>

</template>

<style scoped>
formulario {
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
