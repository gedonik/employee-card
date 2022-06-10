<template>
  <div class="app container-xl">
    <AppHeader :employees="employees" :bonus="bonus" :promo="promo"/>

    <AppFilters v-model="searchText"/>

    <AppListEmployees
        :employees="filteredEmployees"
        @delEmployee="delEmployee"
        :bonus="bonus"
        :promo="promo"
        @promoCheck="promoCheck"
        @bonusCheck="bonusCheck"
    />

    <AppFormAdd :employees="employees" @addEmployee="addEmployee"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFilters from "@/components/AppFilters";
import AppFormAdd from "@/components/AppFormAdd";
import AppListEmployees from "@/components/AppListEmployees";

export default {
  name: 'App',
  components: {AppListEmployees, AppFormAdd, AppFilters, AppHeader},

  data() {
    return {
      employees: [
        {id: 0, name: 'Владимир А.', salary: 95000, isCheckedBonus: false, isCheckedPromo: true, },
        {id: 1, name: 'Виктор Ш.', salary: 125000, isCheckedBonus: false, isCheckedPromo: true,},
        {id: 2, name: 'Александр Б.', salary: 150000, isCheckedBonus: false, isCheckedPromo: true,},
        {id: 3, name: 'Олег В.', salary: 85000, isCheckedBonus: false, isCheckedPromo: true,},
        {id: 4, name: 'Андрей П.', salary: 100000, isCheckedBonus: false, isCheckedPromo: true,},
      ],
      bonus: 0,
      promo: 0,
      searchText: '',
    }
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter(em => em.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  },
  methods: {
    addEmployee(employee) {
      if (employee.name !== '' && employee.salary !== '') {
        this.employees.push(employee);
        console.log(employee)
      }
    },
    delEmployee(person) {
      this.employees = this.employees.filter(em => em.id !== person.id);
    },
    promoCheck(isCheckedPromo) {
      if (isCheckedPromo === true) {
        this.promo++;
      } else {
        this.promo--;
      }
    },
    bonusCheck(isCheckedBonus) {
      if (isCheckedBonus === true) {
        this.bonus++;
      } else {
        this.bonus--;
      }
    },
  },

}
</script>

<style lang="scss">

</style>
