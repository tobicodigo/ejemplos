<script>
export default {
  data() {
    return {
      title: "Hola",
      data: ['a', 'b', 'c'],
      titles: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
      buttonTitle: "Click me",
      spanText: "Mouseover me",
      isActive:false,
      postItStyle:"postit"
    };
  },
  mounted() {
    window.setTimeout(()=>{this.title="adios"},3000)
  },
  methods:{
  changeTitle() {
    this.buttonTitle = this.titles[Math.floor(Math.random() * 7)]
  },
  changeSpan() {
    this.spanText = "Thank you"
  },
  changeTextColor() {
    
  },
  changePostItColor(isActive){
    this.isActive=isActive
    
  },
}
};
</script>

<template>
  <p @mouseover="changePostItColor(true)" @mouseleave="changePostItColor(false)" :class="[isActive ? postItStyle: 'postItStyle' , 'postit']">{{this.title}}
    <ul>
  <li v-for="item in data" :key="item">{{item}}</li>
</ul>
<br>
<button @click="changeTitle">{{ buttonTitle }}</button><br>
<span @mouseover="changeSpan">{{ spanText }}</span>
   </p>
</template>

<style scoped>
.postit {
  margin: 25px;
  width: 250px;
  min-height: 250px;
  max-height: 250px;
  padding: 35px;
  background-color: rgb(184, 108, 255);
}

.postItStyle{
    background-color: #ffff88;
}
</style>
