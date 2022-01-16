<template>
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
</template>

<script>
export default {
  name: "Bottom"
}
</script>

<style lang="sass">
blockquote
  display: block
  color: gray
  margin: .5rem 2rem 2rem
footer
  display: block
  text-align: center
  padding-top: 2rem
  margin: auto
  max-width: 900px
  width: 100%
  p
    margin: .25rem 0 0 0
#hostedBy
  font-weight: bold
  font-size: .75rem
h2
  margin: 0
</style>