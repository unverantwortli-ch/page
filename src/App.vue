<template>
  <div id="wrapper">
    <TopBar />
    <FoolsTable />
    <BottomBar />
  </div>
</template>

<script>
import FoolsTable from "./FoolsTable";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

export default {
  name: 'App',
  components: {
    FoolsTable,
    BottomBar,
    TopBar
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
</style>
