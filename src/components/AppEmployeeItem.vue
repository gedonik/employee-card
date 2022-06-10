<template>
  <li class="text-black p-4 rounded d-flex justify-content-between mb-3 shadow align-items-center">
    <strong>{{ person.name }}</strong>
    <div class="item-wrapper d-flex justify-content-between align-items-center">
      <strong>{{ person.salary.toLocaleString() }}</strong>

      <div class="item-widgets">
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
    bonus: {
      type: Number,
      required: true,
    },
    promo: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      isCheckedPromo: false,
      isCheckedBonus: false,
    }
  },
  computed: {
    iconStylePromo() {
      return this.isCheckedPromo ? 'color: #3bce36' : '';
    },
    iconStyleBonus() {
      return this.isCheckedBonus ? 'color: #f39732' : '';
    }
  },
  methods: {
    iconStyleChangePromo() {
      this.isCheckedPromo = !this.isCheckedPromo;
      this.$emit('promoCheck', this.isCheckedPromo);
    },
    iconStyleChangeBonus() {
      this.isCheckedBonus = !this.isCheckedBonus;
      this.$emit('bonusCheck', this.isCheckedBonus);
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

.bi-arrow-up-square {
  &:hover {
    color: #3bce36;
  }
}

.bi-star {
  &:hover {
    color: #f39732;
  }
}

.bi-trash {
  &:hover {
    color: #ea3939;
  }
}
</style>