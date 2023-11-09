import {computed} from "vue";

export default function useTableFilter(dataTableWithDate, buttonValue) {
  const filteredData = computed(() => {
    let tableData = dataTableWithDate.value
    const {value, type} = buttonValue.value
    
    switch (value) {
      case "id":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => a.id - b.id)
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => b.id - a.id)
        }
      case "number":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => a.number - b.number)
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => b.number - a.number)
        }
      case "developer":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => a.developer.localeCompare(b.developer))
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => b.developer.localeCompare(a.developer))
        }
      case "date":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
        }
      case "type":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => a.developer.localeCompare(b.developer))
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => b.developer.localeCompare(a.developer))
        }
      case "floor":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => a.number - b.number)
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => b.number - a.number)
        }
      case "square":
        if(type === "increase") {
          return tableData = dataTableWithDate.value.sort((a, b) => {
            a = a.square.toString().split(".")
            b = b.square.toString().split(".")
            return a[0] - b[0] || a[1] - b[1]
          })
        } else {
          return tableData = dataTableWithDate.value.sort((a, b) => {
            a = a.square.toString().split(".")
            b = b.square.toString().split(".")
            return b[0] - a[0] || b[1] - a[1]
          })
        }
      default:
        return tableData
    }
  })
  
  return {
    filteredData
  }
}