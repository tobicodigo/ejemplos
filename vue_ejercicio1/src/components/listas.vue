<script>
export default {
  data() {
    return {
      todos: {
        monday: "school",
        tuesday: "work",
        wednesday: "shopping",
        thursday: "cinema",
        friday: "drinks",
        saturday: "drinks again",
        sunday: "sleep",
        christmas: "buying presents",
        birthday: "baking cake",
      },
      images: [
        ["spain", "germany", "france"],
        ["germany", "france", "spain"],
        ["france", "spain", "germany"],
      ],
    };
  },
  methods: {
    removeItem(arrayIndex, index) {
      this.images[arrayIndex].splice(index, 1);
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(value, day, index) in todos" :key="todo">
      {{ index + 1 }}. {{ day }}: {{ value }}
    </li>
  </ul>

  <ul
    v-for="(arrayElement, arrayIndex) in images"
    :key="arrayElement"
    id="countryList"
  >
    <li v-for="(country, index) in arrayElement" :key="country">
      <img
        :src="'../src/assets/images/' + country + '.png'"
        @click="removeItem(arrayIndex, index)"
      />
    </li>
  </ul>
</template>

<style scoped>
#countryList {
  list-style: none;
  width: 100%;
}
#countryList li {
  line-height: 30px;
  height: 50px;
  width: 50px;
  display: inline;
}
</style>
