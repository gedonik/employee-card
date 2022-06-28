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
      <ui-button
          :class="activeBtn === 'all' ? 'button-active' : ''"
          @click="activeAll"
      >
        Все сотрудники
      </ui-button>

      <ui-button
          :class="activeBtn === 'raise' ? 'button-active' : ''"
          @click="activeRaise"
      >
        На повышение
      </ui-button>

      <ui-button
          :class="activeBtn === 'salaryMore' ? 'button-active' : ''"
          @click="activeSalaryMore"
      >
        З/П больше 100 тыс.
      </ui-button>

      <ui-button
          :class="activeBtn === 'bonus' ? 'button-active' : ''"
          @click="activeBonus"
      >
        На премию
      </ui-button>
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
    },
    activeBtn: {
      type: String,
      required: true,
    }
  },
  methods: {
    activeAll() {
    this.$emit('changeActiveBtn', 'all')
    },
    activeRaise() {
      this.$emit('changeActiveBtn', 'raise')
    },
    activeSalaryMore() {
      this.$emit('changeActiveBtn', 'salaryMore')
    },
    activeBonus() {
      this.$emit('changeActiveBtn', 'bonus')
    }
  }
}
</script>
