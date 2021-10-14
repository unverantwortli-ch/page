<template>
  <div id="wrapper">
    <header>
      <h1>Unverantwortli.ch</h1>
      <p>Die Unverantwortlich-Liste hält Unternehmen, die in der Vergangenheit nicht aktiv am Responsible Disclosure Verfahren teilgenommen haben.</p>
    </header>
    <table>
      <thead>
      <tr>
        <th>Unternehmen</th>
        <th>Jahr des Vorfalles</th>
        <th>Quelle</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="fool in fools" v-bind:key="fool.name">
        <td>{{ fool.name }}</td>
        <td>{{ fool.year }}</td>
        <td><a :href="fool.proof" target="_blank">{{ fool.proof }}</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import jsYaml from 'js-yaml';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      fools: []
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    async fetchList() {
      const yaml = await axios.get('https://raw.githubusercontent.com/unverantwortli-ch/list/main/list.yml')
      this.fools = jsYaml.load(yaml.data).fools;
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

#wrapper {
}

header {
  display: block;
  text-align: center;
  padding: 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
}

h1 {
  margin-top: 0;
  margin-bottom: .25rem;
}

p {
  margin: 0;
}

table {
  border-spacing: 0;
  border: 1px solid lightgray;
  border-bottom: none;
}

table > thead th,
table > thead td {
  text-align: left;
  background: #d3d3d3;
}

table th,
table td {
  padding: .5rem;
  border-bottom: 1px solid lightgray;
}

table > tbody > tr:nth-of-type(2n) {
  background: #efefef;
}

</style>
