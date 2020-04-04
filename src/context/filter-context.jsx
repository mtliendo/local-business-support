import * as React from "react"

const FilterStateContext = React.createContext()
const FilterDispatchContext = React.createContext()

const initFilterState = {
  selectedCity: "All",
  selectedTags: [],
}

const addTag = (tagsList, tagToAdd) => [...tagsList, tagToAdd]

const removeTag = (tagsList, tagToRemove) =>
  tagsList.filter(tag => tag !== tagToRemove)

function filterReducer(state, action) {
  switch (action.type) {
    case "update_city": {
      return {
        ...state,
        selectedCity: action.payload,
      }
    }
    case "update_tags": {
      return {
        ...state,
        selectedTags: state.selectedTags.includes(action.payload)
          ? removeTag(state.selectedTags, action.payload)
          : addTag(state.selectedTags, action.payload),
      }
    }
    default: {
      console.warn(`Unhandled action type: ${action.type}`)
    }
  }
}

function FilterProvider({ children }) {
  const [state, dispatch] = React.useReducer(filterReducer, initFilterState)
  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  )
}

function useFilterState() {
  const context = React.useContext(FilterStateContext)
  if (context === undefined) {
    console.warn("useFilterState must be used within a FilterProvider")
  }
  return context ? context : initFilterState
}

function useFilterDispatch() {
  const context = React.useContext(FilterDispatchContext)
  if (context === undefined) {
    console.warn("useFilterDispatch must be used within a FilterProvider")
  }
  return context ? context : {}
}

export { FilterProvider, useFilterState, useFilterDispatch }
