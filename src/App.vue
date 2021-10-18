<template>
  <div id="wrapper">
    <header>
      <h1>Unverantwortli.ch</h1>
      <p>Die Unverantwortlich-Liste hält Unternehmen und Organisationen, die in der Vergangenheit nicht aktiv am Responsible Disclosure teilgenommen haben.</p>
      <p>Die Unternehmen und Organisationen haben den jeweiligen Melder einer Sicherheitslücke angezeigt oder verklagt.</p>
      <p>Das stellt eine Gefahr für die allgemeine Sicherheit dar, weil gutartige Hacker eine Anzeige oder Klage zu befürchten haben.</p>
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
            <a :href="proof" target="_blank">Quelle ({{ getProofInfo(proof) }})</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <footer>
      <h2>Definition: Responsible Disclosure</h2>
      <blockquote id="explanation">
        „Finden unabhängige IT-Sicherheitsexperten Schwachstellen in Computerprogrammen, sogenannte Sicherheitslücken, gibt es für sie mehrere Möglichkeiten der Offenlegung. Bei einer Responsible Disclosure oder auch Coordinated Disclosure stimmt sich der Entdecker mit den verantwortlichen Stellen ab und veröffentlicht Einzelheiten zu der Schwachstelle erst, wenn der Entwickler genügend Zeit hatte, diese zu beheben.“<br>
        ~ Quelle: <a href="https://de.wikipedia.org/wiki/Responsible_Disclosure_(IT-Sicherheit)" target="_blank">Wikipedia</a>
      </blockquote>
      <p>Die Daten stammen aus der <a href="https://github.com/unverantwortli-ch/list" target="_blank">Liste auf github.com</a>. Möchtest du die Liste erweitern? Erstelle einfach einen Pull request.</p>
      <p><a href="https://github.com/unverantwortli-ch/list" target="_blank">Die Liste auf github.com</a></p>
      <p><a href="https://github.com/unverantwortli-ch/page" target="_blank">Das Projekt auf github.com</a></p>
      <p id="hostedBy">Hosted by <a href="https://pages.github.com/" target="_blank">GitHub Pages</a></p>
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
    },
    getProofInfo(proof) {
      var a = document.createElement('a');
      a.href = proof;
      return a.hostname;
    }
  }
}
</script>

<style lang="sass">

html, body
  height: 100%
  margin: 0

body
  font-family: sans-serif
  display: flex
  #app
    width: 100%
    margin: auto
  #wrapper
    padding: 1rem
    width: 1150px
    margin: auto
    max-width: 100%
    max-width: calc(100% - 2rem)
  h1
    margin-top: 0
    margin-bottom: .25rem
  a
    color: #3737c5
    text-decoration: none
    &:hover
      text-decoration: underline
  header
    display: block
    text-align: center
    padding: 1rem 1rem .75rem
    border: 1px solid lightgray
    margin-bottom: 1rem
    p
      margin: .25rem 0
  footer
    display: block
    text-align: center
    padding-top: 2rem
    margin: auto
    max-width: 900px
    width: 100%
    p
      margin: .25rem 0 0 0
  table
    border-spacing: 0
    border: 1px solid lightgray
    border-bottom: none
    margin: auto
    width: 100%
    thead
      td,
      th
        text-align: left
        background: #d3d3d3
    tbody
      tr:nth-of-type(2n)
        background: #efefef
    td,
    th
      padding: .5rem
      border-bottom: 1px solid lightgray
  #hostedBy
    font-weight: bold
    font-size: .75rem
  h2
    margin: 0
  blockquote
    display: block
    color: gray
    margin: .5rem 2rem 2rem

</style>
