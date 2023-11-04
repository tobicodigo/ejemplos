<script>
export default {
  data() {
    return {
      name: "John",
    };
  },
  beforeMount() {
    console.log("beforeMount and the name is: ", this.name);
  },
  mounted() {
    console.log("mounted and the name is: ", this.name);
  },
  beforeCreate() {
    console.log("beforeCreate and the name is: ", this.name);
  },
  created() {
    console.log("created and the name is: ", this.name);
  },

  beforeUpdate() {
    console.log("mounted and the name is: ", this.name);
  },
  updated() {
    console.log("mounted and the name is: ", this.name);
  },
  beforeUnmount() {
    console.log("mounted and the name is: ", this.name);
  },
  unmounted() {
    console.log("unmounted and the name is: ", this.name);
  },
  errorCaptured() {
    console.log("errorCaptured and the name is: ", this.name);
  },
  renderTracked() {
    console.log("renderTracked and the name is: ", this.name);
  },
  renderTriggered() {
    console.log("renderTriggered and the name is: ", this.name);
  },
  activated() {
    console.log("activated and the name is: ", this.name);
  },
  deactivated() {
    console.log("deactivated and the name is: ", this.name);
  },
};
</script>

<template>
  Vue's Lifecycle is really interesting!
</template>


<style scoped></style>