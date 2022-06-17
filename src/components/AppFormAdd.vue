<template>
  <footer class="bg-primary p-4 mb-4 rounded shadow">
    <form class="d-flex align-items-center" @submit.prevent>
      <input class="form-control footer-input me-4" v-model="name" type="text" placeholder="Имя сотрудника">
      <input class="form-control footer-input me-4" v-model="salary" type="text" placeholder="З/П сотрудника">
      <ui-button class="add-btn" @click="addEmployee" :style="activeBtn">Добавить</ui-button>
    </form>
  </footer>
</template>

<script>
export default {
  name: "AppFormAdd",
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      salary: '',
      id: 5,
    }
  },
  computed: {
    activeBtn() {
      return this.name !== '' && this.salary !== '' ? 'opacity: 1' : '';
    }
  },
  methods: {
    addEmployee() {
      const newEmployee = {
        name: this.name,
        salary: this.salary,
        id: this.id++,
        isCheckedBonus: false,
        isCheckedPromo: false
      }

      this.$emit('addEmployee', newEmployee);
      this.name = '';
      this.salary = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.add-btn {
  opacity: 0.6;
}

.footer-input {
  max-width: 300px;
  width: 100%;
}
</style>