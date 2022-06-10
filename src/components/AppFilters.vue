<template>
  <div class="bg-primary p-4 mb-4 rounded shadow">

    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control mb-3"
        type="text"
        placeholder="Найти сотрудника"
    >
    <div class="btn-group">
      <ui-button class="button-active">Все сотрудники</ui-button>
      <ui-button>На повышение</ui-button>
      <ui-button>З/П больше 100 тыс.</ui-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppFilters",
  props: {
    modelValue: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>