<template>
  <table>
    <thead>
    <tr>
      <th>Unternehmen</th>
      <th>Jahr des Vorfalles</th>
      <th>Land des Vorfalles</th>
      <th>Quelle(n)</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="fool in fools" v-bind:key="fool.name">
      <td>{{ fool.name }}</td>
      <td>{{ fool.year }}</td>
      <td>{{ countries.getName(fool.country, "de", {select: "official"}) }}</td>
      <td>
        <Proof v-for="proof in fool.proofs" v-bind:key="proof" :proof="proof" />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import Proof from "./Proof";
import axios from "axios";
import jsYaml from "js-yaml";
import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/de.json"));

export default {
  components: {Proof},
  name: "Fools",
  data() {
    return {
      fools: [],
      countries: null
    }
  },
  mounted() {
    this.countries = countries;
    this.fetchList();
  },
  methods: {
    async fetchList() {
      const yaml = await axios.get('https://raw.githubusercontent.com/unverantwortli-ch/list/main/list.yml');
      this.fools = jsYaml.load(yaml.data).fools;
    }
  }
}
</script>

<style lang="sass" scoped>
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
@media screen and (max-width: 600px)
  th, td
    border-bottom: none !important
    display: block !important
    text-align: center !important
  tr > td:last-of-type
    border-bottom: 1px solid #d3d3d3 !important
a
  margin: 0 .125em
</style>