<template>
  <section class="home">
    <ul class="home__container">
      <li class="home__column">
        <h2 class="home__title">Select Components</h2>
        <div class="home__selects">
          <v-select
              @get-value="getRegionValue"
              :data="selectRegions"
              :placeholder-value="'Выберите название региона'"/>
          <v-select
              @get-value="getAnimalValue"
              :data="selectAnimals"
              :placeholder-value="'Выберите название зверя'"/>
        </div>
      </li>
      <li class="home__column">
        <h2 class="home__title">Table component</h2>
        <VTable :data="tableData"/>
      </li>
    </ul>
  </section>
</template>

<script setup>
import VSelect from "../../components/Select/VSelect.vue";
import VTable from "../../components/Table/VTable.vue";
import {selectRegions, selectAnimals, tableData} from "../../utils/api/data.js";

function getAnimalValue(value) {
  console.log(value, "- Animal")
}

function getRegionValue(value) {
  console.log(value, "- Region")
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 5rem;
  width: 100%;
  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 10rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  &__selects {
    display: flex;
    column-gap: 3rem;
  }
}
</style>