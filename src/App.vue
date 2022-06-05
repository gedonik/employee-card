<template>
  <div class="app container-xl">
    <header class="bg-primary mt-4 p-4 mb-4 rounded shadow text-white">
      <h1 class="h1">Учет сотрудников в компании Navigator</h1>
      <h2 class="h2">Общее число сотрудников: {{ employees.length }}</h2>
      <h2 class="h2">Премию получат: {{ bonus }}</h2>
    </header>

    <form class="bg-primary p-4 mb-4 rounded shadow" @submit.prevent>
      <input v-model="search" class="form-control mb-3" type="text" placeholder="Найти сотрудника">
      <div class="btn-group">
        <ui-button class="button-active">Все сотрудники</ui-button>
        <ui-button>На повышение</ui-button>
        <ui-button>З/П больше 100 тыс.</ui-button>
      </div>
    </form>

    <div v-if="employees.length === 0 || searchEmployee.length === 0" class="mb-4 text-center">
      <strong>Сотрудники не обнаружены</strong>
    </div>

    <ul v-else class="d-flex flex-md-column mb-4">
      <li v-for="person in searchEmployee" :key="person.id"
          class="text-black p-4 rounded d-flex justify-content-between mb-3 shadow align-items-center">
        <strong>{{ person.name }}</strong>
        <div class="item-wrapper d-flex justify-content-between align-items-center">
          <strong>{{ person.salary.toLocaleString() }}</strong>

          <div class="btns">
            <button class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
              </svg>
            </button>
          <button class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          </button>
          <button @click="delEmployee(person)" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash"
                 viewBox="0 0 16 16">
              <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
          </div>
        </div>
      </li>
    </ul>

    <footer class="bg-primary p-4 mb-4 rounded shadow">
      <form class="d-flex align-items-center" @submit.prevent>
        <input class="form-control input me-4" v-model="name" type="text" placeholder="Имя сотрудника">
        <input class="form-control input me-4" v-model="salary" type="text" placeholder="З/П сотрудника">
        <ui-button @click="addEmployee">Добавить</ui-button>
      </form>
    </footer>
  </div>
</template>

<script>
import UiButton from "@/components/ui/ui-button";

export default {
  name: 'App',
  components: {UiButton},
  data() {
    return {
      employees: [
        {id: 0, name: 'Владимир А.', salary: 95000},
        {id: 1, name: 'Виктор Ш.', salary: 125000},
        {id: 2, name: 'Александр Б.', salary: 150000},
        {id: 3, name: 'Олег В.', salary: 85000},
        {id: 4, name: 'Андрей П.', salary: 100000},
      ],
      search: '',
      bonus: 0,
      id: 100,
      name: '',
      salary: '',
      selected: null,
    }
  },
  methods: {
    addEmployee() {
      const newEmployee = {
        id: this.id++,
        name: this.name,
        salary: this.salary,
      }
      if (this.name !== '' && this.salary !== '') {
        this.employees.push(newEmployee);
        this.name = '';
        this.salary = null;
      }
    },
    delEmployee(person) {
      this.employees = this.employees.filter(em => em.id !== person.id);
    }
  },
  computed: {
    searchEmployee() {
      return this.employees.filter(em => em.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  }
}
</script>

<style lang="scss">
.btn {
  svg {
    transition: fill 0.3s ease-in-out;

    &:hover {
      fill: red;
    }
  }
}

.item-wrapper {
  max-width: 400px;
  width: 100%;
}

.input {
  max-width: 300px;
  width: 100%;
}
</style>
