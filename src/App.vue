<template>
  <div id="wrapper">
    <Top />
    <Fools />
    <Bottom />
  </div>
</template>

<script>
import Fools from "./Fools";
import Bottom from "./Bottom";
import Top from "./Top";

export default {
  name: 'App',
  components: {
    Fools,
    Bottom,
    Top
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
