<template>
  <div class="elem">
    <span v-if="status">{{label}}</span>
    <input v-else type="text" v-model="label">
    <b-button-group>
      <b-button variant="warning" v-if="status" @click="status = false">Редактирувать</b-button>
      <b-button variant="success" v-else @click="save()">Сохранить</b-button>
      <b-button variant="danger">Удалить</b-button>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    name: 'customList',
    props: {
      label: String
    },
    data() {
      return {
        status: true
      }
    },
    methods: {
      save() {
        this.status = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .elem {
    padding: 20px;
    margin-top: 10px;
    border: 1px solid #808080;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>