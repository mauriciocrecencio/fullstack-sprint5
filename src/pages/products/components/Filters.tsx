import React from 'react'
import { IFilter } from '../../../interfaces/Filter'

function FilterItem({ label }: IFilter) {
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      <img className="filters__img" src="assets/filter.svg" alt="filtro" />
    </li>
  )
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
interface IPropsFilters {
  filters: IFilter[]
}

const Filters: React.FunctionComponent<IPropsFilters> = ({
  filters,
}: IPropsFilters) => (
  <section className="main__filters filters">
    <ul className="filters__list">
      {filters.map((f: IFilter) => (
        <FilterItem key={f.id} label={f.label} />
      ))}
    </ul>
  </section>
)

export default Filters
