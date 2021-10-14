<template>
  <div id="wrapper">
    <header>
      <h1>Unverantwortli.ch</h1>
      <p>Die Unverantwortlich-Liste hält Unternehmen, die in der Vergangenheit nicht aktiv am Responsible Disclosure Verfahren teilgenommen haben.</p>
      <p>Das stellt eine Gefahr für die allgemeine Sicherheit und für die Melder dar.</p>
    </header>
    <table>
      <thead>
      <tr>
        <th>Unternehmen</th>
        <th>Jahr des Vorfalles</th>
        <th>Quelle(n)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="fool in fools" v-bind:key="fool.name">
        <td>{{ fool.name }}</td>
        <td>{{ fool.year }}</td>
        <td>
          <div v-for="proof in fool.proofs" v-bind:key="proof">
            <a :href="proof" target="_blank">Quelle</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <footer>
      <p>Die Daten stammen aus der <a href="https://github.com/unverantwortli-ch/list" target="_blank">Liste auf github.com</a>. Möchtest du die Liste erweitern? Erstelle einfach einen Pull request.</p>
      <p><a href="https://github.com/unverantwortli-ch/list" target="_blank">Die Liste auf github.com</a></p>
      <p><a href="https://github.com/unverantwortli-ch/page" target="_blank">Das Projekt auf github.com</a></p>
    </footer>
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
  margin: 1rem;
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
  padding: 1rem 1rem .75rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
}

footer {
  display: block;
  text-align: center;
  padding-top: 2rem;
}

footer p {
  margin: .25rem 0 0 0;
}

h1 {
  margin-top: 0;
  margin-bottom: .25rem;
}

header p {
  margin: .25rem 0;
}

table {
  border-spacing: 0;
  border: 1px solid lightgray;
  border-bottom: none;
  margin: auto;
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

a {
  color: #3737c5;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
