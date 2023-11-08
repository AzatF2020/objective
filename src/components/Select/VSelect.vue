<template>
  <div class="select" ref="labelRef">
    <label
        class="select__label"
        :class="{'--active': intermediateValue}"
        ref="inputRef">
      <input
          class="select__input"
          placeholder="Выберите название региона"
          :value="dropdownValue"
          readonly
          @click="toggleDropDown"/>
      <span class="select__placeholder">{{placeholderValue}}</span>
    </label>
    <div
        ref="dropdownRef"
        class="select__dropdown"
        :class="{'--active': intermediateValue}"
        :style="{maxHeight: dropdownMaxHeight + 'rem'}">
      <button
          ref="dropdownButtons"
          v-for="item in data"
          :key="item.id" class="select__dropdown-btn"
          @click="getValue"
          v-once>
        {{item.title}}
      </button>
    </div>
  </div>
</template>

<script setup>
  import {ref, defineEmits} from "vue";

  const emit = defineEmits(["getValue"])
  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    placeholderValue: String,
  })

  const labelRef = ref(null);
  const dropdownRef = ref(null)
  const dropdownValue = ref("")
  const dropdownButtons = ref([])
  const dropdownMaxHeight = ref(0)

  let intermediateValue = ref(false)

  function openModal() {
    dropdownMaxHeight.value = dropdownButtons.value?.reduce((accum, element) =>
        accum + Math.floor(Number(element?.offsetHeight / 10) + 2), 0)
  }

  function closeModal() {
    dropdownMaxHeight.value = 0
  }

  function getValue(event) {
    dropdownValue.value = event.target?.textContent;
    emit("getValue", dropdownValue.value)

    closeModal()
    intermediateValue.value = !intermediateValue.value
  }

  function toggleDropDown() {
    !intermediateValue.value ? openModal() : closeModal()
    intermediateValue.value = !intermediateValue.value
  }
</script>

<style lang="scss" scoped>
.select {
  width: 30rem;
  height: max-content;
  -webkit-box-shadow: 0px 0px 22re -2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 22px -2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 22px -2px rgba(34, 60, 80, 0.2);
  border-radius: .75rem;

  &__label {
    display: block;
    width: inherit;
    padding: 1rem;
    border-radius: .75rem;
    background-color: white;
    cursor: pointer;

    position: relative;

    border-left: .15rem solid transparent;
    border-right: .15rem solid transparent;
    border-top: .15rem solid transparent;

    transition:
        border-left .4s ease,
        border-right .4s ease,
        border-top .4s ease,
        border-radius .7s ease;

    &::after {
      content: "";
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      object-fit: cover;
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      transition: .4s ease transform;
      background-image: url("src/assets/icons/arrowSelect.svg");
    }
  }

  &__label.--active {
    border-left: .15rem solid var(--select-border-color);
    border-right: .15rem solid var(--select-border-color);
    border-top: .15rem solid var(--select-border-color);
    border-radius: 0.75rem 0.75rem 0 0;

    &::after {
      transform: rotate(180deg) translateY(50%);
    }
  }

  &__placeholder {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-40%);
    color: var(--placeholder-color);
    font-size: 1.35rem;
    transition: transform .2s ease, font-size .2s ease;
  }

  &__input {
    border: none;
    background: transparent;
    cursor: pointer;

    &::placeholder {
      color: transparent;
    }

    &:not(:placeholder-shown) ~ .select__placeholder {
      transition: transform .2s ease, font-size .2s ease;
      transform: translateY(-1.6rem);
      font-size: 1rem;
      left: 1.2rem;
    }
  }

  &__dropdown {
    display: flex;
    flex-direction: column;
    max-height: 0;
    transition: max-height ease .6s, opacity ease .3s, padding-top ease .6s;
    opacity: 0;
    border: .15rem solid var(--select-border-color);
    border-radius: 0 0 0.75rem 0.75rem;
    overflow: hidden;
  }

  &__dropdown.--active {
    transition: max-height ease .6s, opacity ease 1s, padding-top ease .6s;
    opacity: 1;
  }

  &__dropdown-btn {
    padding: .75rem 1rem;
    text-align: left;
    font-size: 1.4rem;
    transition: .2s ease background-color;

    &:last-child {
      border-radius: 0 0 .75rem .75rem;
    }
    &:hover {
      background-color: #DADEFE;
    }
  }
}
</style>