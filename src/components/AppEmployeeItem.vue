<template>
  <li class="text-black p-4 rounded d-flex justify-content-between flex-wrap mb-3 shadow align-items-center">
    <strong>{{ person.name }}</strong>
    <div class="item-wrapper d-flex justify-content-between align-items-center">
      <input class="align-items-center w-25 border-2"
             v-if="isEdit"
             type="text"
             v-model="salaryVal">
      <strong v-else>{{ person.salary.toLocaleString() }}</strong>


      <div class="item-widgets">
        <i v-if="!isEdit" class="bi bi-pencil-square" @click="editSalary"></i>

        <i v-else class="bi bi-save" @click="editSalary"></i>

        <i class="bi bi-arrow-up-square" :style="iconStylePromo" @click="iconStyleChangePromo"></i>

        <i class="bi bi-star" :style="iconStyleBonus" @click="iconStyleChangeBonus"></i>

        <button @click="delEmployee(person)" class="btn delete--btn">
          <i class="bi bi-trash"></i>
        </button>
      </div>

    </div>
  </li>
</template>

<script>
export default {
  name: "AppEmployeeItem",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
      salaryVal: this.person.salary,
    }
  },
  computed: {
    iconStylePromo() {
      return this.person.isCheckedPromo ? 'color: #3bce36' : '';
    },
    iconStyleBonus() {
      return this.person.isCheckedBonus ? 'color: #fccf38' : '';
    }
  },
  methods: {
    editSalary() {
      this.isEdit = !this.isEdit;
      this.$emit('changeSalary', this.person.id, parseInt(this.salaryVal));
    },
    iconStyleChangePromo() {
      this.$emit('promoCheck', this.person.id, this.person.isCheckedPromo);
    },
    iconStyleChangeBonus() {
      this.$emit('bonusCheck', this.person.id, this.person.isCheckedBonus);
    },
    delEmployee() {
      this.$emit('delEmployee');
    }
  }
}
</script>

<style lang="scss" scoped>
.item-wrapper {
  max-width: 400px;
  width: 100%;
}

.item-widgets {
  display: flex;
  align-items: center;
}

.btn {
  padding: 0;
}

.bi {
  margin-right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}

.bi-pencil-square {
  color: #f39732;
}

.bi-save {
  margin-right: 40px;
  color: #3bce36;
}

.bi-arrow-up-square {
  &:hover {
    color: #3881e5;
  }
}

.bi-star {
  &:hover {
    color: #fccf38;
  }
}

.bi-trash {
  &:hover {
    color: #ea3939;
  }
}
</style>