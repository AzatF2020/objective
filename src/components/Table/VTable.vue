<template>
  <div class="table">
    <header class="table__header">
      <ul class="table__header-data">
        <li class="table__header-data-list" v-for="header in Object.keys(data[0])">
          <p class="table__header-text" v-memo="[header]">{{ header }}</p>
          <div class="table__header-btns">
            <button
                class="table__header-btn --increase"
                :class="{'--active': headerButtonArrowClass(header, 'increase')}"
                ref="buttonsIncrease"
                :data-value="header"
            >
              <img src="../../assets/icons/arrowSort.svg" alt="icon">
            </button>
            <button
                class="table__header-btn --decrease"
                :class="{'--active': headerButtonArrowClass(header, 'decrease')}"
                ref="buttonsDecrease"
                :data-value="header">
              <img src="../../assets/icons/arrowSort.svg" alt="icon">
            </button>
          </div>
        </li>
      </ul>
    </header>
    <div class="table__columns">
      <ul class="table__main">
        <li class="table__row" v-for="value in filteredData" :key="value.id">
          <p class="table__value" v-for="key in keys" :key="key">{{ value[key] }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
  import useTableFilter from "../../utils/hooks/useTableFilter.js";

  const props = defineProps({
    data: {
      type: Array,
      required: true,
    }
  })
  const keys = Object.keys(props?.data[0])

  const buttonsIncrease = ref([])
  const buttonsDecrease = ref([])
  const buttonValue = ref({
    value: "",
    type: ""
  })

  const dataTableWithDate = computed(() => props.data.map((item) => {
    return {...item, deadline: new Date(item.deadline).toLocaleDateString('en-GB')}
  }))

  const { filteredData } = useTableFilter(dataTableWithDate, buttonValue)

  function headerButtonArrowClass(header, type) {
    return buttonValue.value.value === header && buttonValue.value.type === type
  }

  function setButtonValue(button, type) {
    buttonValue.value = {
      value: button?.dataset.value,
      type: type
    }
  }

  onMounted(() => {
    buttonsIncrease?.value.forEach((button) => {
      button.addEventListener("click", () => setButtonValue(button, "increase"))
    })

    buttonsDecrease?.value.forEach((button) => {
      button.addEventListener("click", () => setButtonValue(button, "decrease"))
    })
  })

  onBeforeUnmount(() => {
    buttonsIncrease?.value.forEach((button) => {
      button.removeEventListener("click", () => setButtonValue(button, "increase"))
    })

    buttonsDecrease?.value.forEach((button) => {
      button.removeEventListener("click", () => setButtonValue(button, "decrease"))
    })
  })
</script>

<style lang="scss" scoped>
.table {
  border: .01rem solid black;

  &__header-data {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;

  }

  &__header-data-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: .1rem solid black;
    padding: 1rem;
  }

  &__header-text {
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  &__header-btns {
    display: flex;
    flex-direction: column;
  }

  &__header-btn {
    opacity: .4;
    transition: .4s ease opacity;
    &:hover {
      opacity: .4;
    }
    img {
      width: 1.3rem;
      height: 1.3rem;
      object-fit: cover;
    }
  }
  &__header-btn.--increase {
    transform: rotate(180deg);
  }
  &__header-btn.--increase.--active {
    opacity: 1;
  }
  &__header-btn.--decrease.--active {
    opacity: 1;
  }

  &__columns {
    height: 40rem;
    overflow: scroll;
  }

  &__main {
    display: flex;
    flex-direction: column;
  }

  &__row {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
  }

  &__value {
    padding: 1.2rem;
    border: .1rem solid black;
    font-size: 1.3rem;
    font-weight: 500;
  }
}
</style>