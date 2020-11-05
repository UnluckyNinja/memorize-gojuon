<template>
  <FreePlay />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import FreePlay from './components/FreePlay.vue'

@Options({
  components: {
    FreePlay,
  },
})
export default class App extends Vue {}
</script>
