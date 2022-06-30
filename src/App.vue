<template>
  <div class="app container-xl">
    <AppHeader
        :employees="employees"
        :bonus="bonus"
        :promo="promo"
    />

    <AppFilters
        v-model="searchText"
        :activeBtn="activeBtn"
        @changeActiveBtn="changeActiveBtn"
    />

    <AppListEmployees
        :filteredEmployees="filteredEmployees"
        @delEmployee="delEmployee"
        @promoCheck="promoCheck"
        @bonusCheck="bonusCheck"
        @changeSalary="changeSalary"
    />

    <AppFormAdd
        :employees="employees"
        @addEmployee="addEmployee"
    />
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
        {id: 0, name: 'Бирюкова Л.В.', salary: 95000, isCheckedPromo: false, isCheckedBonus: false},
        {id: 1, name: 'Меркулов И.Д.', salary: 125000, isCheckedPromo: false, isCheckedBonus: false},
        {id: 2, name: 'Калинина М.Е.', salary: 150000, isCheckedPromo: false, isCheckedBonus: false},
        {id: 3, name: 'Смирнов Р.А.', salary: 85000, isCheckedPromo: false, isCheckedBonus: false},
        {id: 4, name: 'Афанасьев Е.Д.', salary: 100000, isCheckedPromo: false, isCheckedBonus: false},
      ],
      bonus: 0,
      promo: 0,
      searchText: '',
      activeBtn: 'all',
      employeesNewArr: [],
    }
  },
  computed: {
    filteredEmployees() {
      this.changeActiveBtn(this.activeBtn);
      return this.employeesNewArr.filter(em => em.name.toLowerCase().includes(this.searchText.toLowerCase()));
    },
  },
  methods: {
    changeActiveBtn(name) {
      this.activeBtn = name;

      switch (name) {
        case 'all' :
          this.employeesNewArr = this.employees.map(employee => employee);
          break;
        case 'raise' :
          this.employeesNewArr = this.employees.filter(employee => employee.isCheckedPromo === true);
          break;
        case 'salaryMore' :
          this.employeesNewArr = this.employees.filter(employee => employee.salary > 100000);
          break;
        case 'bonus' :
          this.employeesNewArr = this.employees.filter(employee => employee.isCheckedBonus === true);
          break;
      }
    },
    changeSalary(id, salary) {
      this.employees = this.employees.map(employee => employee.id === id ? {...employee, salary: salary} : employee);
    },
    addEmployee(employee) {
      if (employee.name !== '' && employee.salary !== '') {
        this.employees.push(employee);
      }
    },
    delEmployee(person) {
      person.isCheckedPromo ? this.promo-- : '';
      person.isCheckedBonus ? this.bonus-- : '';
      this.employees = this.employees.filter(employee => employee.id !== person.id);
    },
    promoCheck(id, isCheckedPromo) {
      isCheckedPromo ? this.promo-- : this.promo++;

      this.employees = this.employees.map(employee => employee.id === id ? {
        ...employee,
        isCheckedPromo: !employee.isCheckedPromo
      } : employee)
    },
    bonusCheck(id, isCheckedBonus) {
      isCheckedBonus ? this.bonus-- : this.bonus++;

      this.employees = this.employees.map(employee => employee.id === id ? {
        ...employee,
        isCheckedBonus: !employee.isCheckedBonus
      } : employee);
    },
  },
}
</script>
