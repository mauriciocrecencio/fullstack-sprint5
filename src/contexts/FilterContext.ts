import React from 'react'

const FilterContext = React.createContext<{
  filter: string
  setFilter: (filterTerm: string) => void
}>(null!)

export default FilterContext
