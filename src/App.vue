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
        <th>Land des Vorfalles</th>
        <th>Quelle(n)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="fool in fools" v-bind:key="fool.name">
        <td>{{ fool.name }}</td>
        <td>{{ fool.year }}</td>
        <td>{{ fool.country }}</td>
        <td>
            <a v-for="proof in fool.proofs" v-bind:key="proof" :href="proof" target="_blank" :title="getProofInfo(proof)">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
               preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                  <path d="M8522 12789 c-216 -28 -436 -122 -604 -259 -40 -32 -701 -688 -1469
                  -1457 -1498 -1501 -1456 -1455 -1543 -1644 -85 -184 -111 -311 -111 -539 0
                  -159 3 -185 28 -282 68 -260 167 -425 386 -643 l111 -110 435 435 c239 239
                  435 439 435 445 0 5 -35 45 -77 87 l-78 78 1328 1328 1327 1327 1432 -1433
                  1433 -1432 -1327 -1327 -1328 -1328 -78 78 c-42 42 -82 77 -87 77 -6 0 -206
                  -196 -445 -435 l-435 -435 110 -111 c282 -284 536 -403 885 -416 281 -10 512
                  55 750 211 59 39 368 342 1473 1445 769 768 1427 1432 1461 1476 249 318 327
                  718 216 1115 -27 97 -105 259 -171 357 -77 113 -3069 3105 -3182 3182 -98 66
                  -260 144 -357 171 -163 45 -358 60 -518 39z"/>
                  <path d="M7454 9202 c-28 -10 -73 -37 -100 -59 -27 -23 -878 -871 -1890 -1885
                  -2041 -2042 -1880 -1870 -1878 -2008 0 -52 6 -76 28 -116 20 -37 229 -252 759
                  -781 648 -647 738 -733 782 -749 70 -27 157 -25 220 5 41 19 389 362 1921
                  1895 1523 1523 1876 1880 1895 1921 35 73 33 172 -5 241 -37 68 -1461 1492
                  -1523 1523 -61 31 -146 36 -209 13z"/>
                  <path d="M3690 7995 c-101 -19 -229 -60 -319 -101 -189 -87 -140 -40 -1677
                  -1578 -1196 -1196 -1440 -1444 -1483 -1511 -206 -316 -262 -679 -161 -1045 27
                  -97 125 -296 191 -385 30 -40 698 -715 1568 -1586 1614 -1614 1562 -1565 1751
                  -1659 424 -213 938 -159 1315 136 108 84 2837 2819 2903 2909 64 87 142 243
                  176 353 44 140 59 259 53 417 -8 204 -41 335 -127 510 -63 128 -150 242 -289
                  380 l-111 110 -435 -435 c-239 -239 -435 -439 -435 -445 0 -5 35 -45 77 -87
                  l78 -78 -1328 -1328 -1327 -1327 -1432 1433 -1433 1432 1327 1327 1328 1328
                  78 -78 c42 -42 82 -77 87 -77 6 0 206 196 445 435 l435 435 -110 111 c-223
                  224 -414 336 -675 394 -103 23 -370 29 -470 10z"/>
                </g>
              </svg>
            </a>
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
      <p><a href="https://github.com/unverantwortli-ch/list" target="_blank">Die Liste</a> | <a href="https://github.com/unverantwortli-ch/page" target="_blank">Das Projekt</a> auf github.com</p>
      <p>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">
          <img alt="Creative Commons License" style="border-width:0" src="ccby4.png" />
        </a><br />
        This work is licensed under a <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
      </p>
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
    svg
      height: 1em
      width: 1em
      g
        fill: #3737c5
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
@media screen and (max-width: 600px)
  th, td
    border-bottom: none !important
    display: block !important
    text-align: center !important
  tr > td:last-of-type
    border-bottom: 1px solid #d3d3d3 !important
</style>
