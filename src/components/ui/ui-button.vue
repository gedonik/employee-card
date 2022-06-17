<template>
  <button class="button btn btn-outline-white text-white border-light" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ui-button"
}
</script>

<style lang="scss" scoped>
.button {
  &:hover {
    color: #000 !important;
    background-color: #fff;
  }
}

.button-active {
  color: #000 !important;
  background-color: #fff;
}

@media (max-width: 650px) {
  .button {
    font-size: 12px;
  }
}
</style>