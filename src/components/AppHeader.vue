<template>
  <header class="bg-primary mt-4 p-4 mb-4 rounded shadow text-white">
    <h1 class="h1">Учет сотрудников в компании Navigator</h1>
    <h2 class="h2">Общее число сотрудников: {{ employees.length }}</h2>
    <h2 class="h2">Премию получат: {{ bonus }}</h2>
    <h2 class="h2">Сотрудники на повышение: {{ promo }}</h2>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    employees: {
      type: Array,
      required: true,
    },
    bonus: {
      type: Number,
      required: true,
    },
    promo: {
      type: Number,
      required: true,
    }
  }
}
</script>