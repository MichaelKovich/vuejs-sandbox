<template>
  <div>
    <h1>Jedi!</h1>
    <div tag="div" @click="goTo(person.name)" :key="ind" v-for="(person, ind) in people">
      <div> {{person.name}} </div>
      <div> {{ person.height }} </div>
      <div> {{person.birth_year}} </div>
      <div> {{person.mass}} </div>
      <hr>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("https://swapi.co/api/people")
      .then(res => (this.people = res.data.results))
      .catch(console.log);
  },
  data() {
    return {
      people: []
    };
  },
  methods: {
    goTo(name) {
      this.$router.push(`/detail/${name}`);
    }
  }
};
</script>