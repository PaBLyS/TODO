<template>
  <b-container fluid id="app">
    <b-row class="justify-content-between">
      <b-col cols="4">
        <b-button variant="success">Создать новый лист</b-button>
        <b-button variant="danger">Удалить Все</b-button>
      </b-col>
      <b-col cols="2">
        <b-form-input v-model="search" placeholder="Search"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <custom-list v-for="(elem, index) in list"
                      :key="index"
                      :label="elem.label"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import customList from '../src/components/customList'

export default {
  name: 'app',
  components: {customList},
  data() {
    return {
      search: ''
    }
  },
  computed: {
      list() {
        return this.$store.getters.allList
      }
  }
}
</script>

<style lang="scss">

</style>
