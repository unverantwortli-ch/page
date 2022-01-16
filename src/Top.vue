<template>
  <header>
    <h1>Unverantwortli.ch</h1>
    <p>Die Unverantwortlich-Liste hält Unternehmen und Organisationen, die in der Vergangenheit nicht aktiv am Responsible Disclosure teilgenommen haben.</p>
    <p>Die Unternehmen und Organisationen haben den jeweiligen Melder einer Sicherheitslücke angezeigt oder verklagt.</p>
    <p>Das stellt eine Gefahr für die allgemeine Sicherheit dar, weil gutartige Hacker eine Anzeige oder Klage zu befürchten haben.</p>
  </header>
</template>

<script>
export default {
  name: "Top"
}
</script>

<style lang="sass">
h1
  margin-top: 0
  margin-bottom: .25rem
header
  display: block
  text-align: center
  padding: 1rem 1rem .75rem
  border: 1px solid lightgray
  margin-bottom: 1rem
  p
    margin: .25rem 0
</style>