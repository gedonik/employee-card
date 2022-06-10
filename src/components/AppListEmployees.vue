<template>

  <div v-if="employees.length === 0" class="mb-4 text-center">
    <strong>Сотрудники не обнаружены</strong>
  </div>

  <ul v-else class="d-flex flex-md-column mb-4">
    <AppEmployeeItem
        v-for="person in employees"
        :key="person.id"
        :person="person"
        @delEmployee="delEmployee(person)"
        :bonus="bonus"
        :promo="promo"
        @promoCheck="promoCheck"
        @bonusCheck="bonusCheck"
    />

  </ul>
</template>

<script>
import AppEmployeeItem from "@/components/AppEmployeeItem";

export default {
  name: "AppListEmployees",
  components: {AppEmployeeItem},
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
  },
  methods: {
    delEmployee(person) {
      this.$emit('delEmployee', person);
    },
    promoCheck(isCheckedPromo) {
      this.$emit('promoCheck', isCheckedPromo);
    },
    bonusCheck(isCheckedBonus) {
      this.$emit('bonusCheck', isCheckedBonus);
    }
  }
}
</script>

<style scoped>

</style>