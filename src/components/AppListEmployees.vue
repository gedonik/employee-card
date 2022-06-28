<template>

  <div v-if="filteredEmployees.length === 0" class="mb-4 text-center">
    <strong>Сотрудники не обнаружены</strong>
  </div>

  <ul v-else class="d-flex flex-md-column mb-4 flex-column">
    <AppEmployeeItem
        v-for="person in filteredEmployees"
        :key="person.id"
        :person="person"
        @delEmployee="delEmployee(person)"
        @promoCheck="promoCheck"
        @bonusCheck="bonusCheck"
        @changeSalary="changeSalary"
    />

  </ul>
</template>

<script>
import AppEmployeeItem from "@/components/AppEmployeeItem";

export default {
  name: "AppListEmployees",
  components: {AppEmployeeItem},
  props: {
    filteredEmployees: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeSalary(id, salary) {
      this.$emit('changeSalary', id, salary);
    },
    delEmployee(person) {
      this.$emit('delEmployee', person);
    },
    promoCheck(id, isCheckedPromo) {
      this.$emit('promoCheck', id, isCheckedPromo);
    },
    bonusCheck(id, isCheckedBonus) {
      this.$emit('bonusCheck', id, isCheckedBonus);
    }
  }
}
</script>