import React from 'react'
import { FilterResultsContainer } from './style'

function FilterResults() {
  return (
    <FilterResultsContainer>
        <h3>Filtro</h3>
        <form>
            <label className='checkbox__container'>
                Lorem
                <input type="checkbox" />
                <span className='checkbox__checkmark'></span>
            </label>
            <label className='checkbox__container'>
                Lorem
                <input type="checkbox" />
                <span className='checkbox__checkmark'></span>
            </label>
            <label className='checkbox__container'>
                Lorem
                <input type="checkbox" />
                <span className='checkbox__checkmark'></span>
            </label>
            <label className='checkbox__container'>
                Lorem
                <input type="checkbox" />
                <span className='checkbox__checkmark'></span>
            </label>
            <label className='checkbox__container'>
                Lorem
                <input type="checkbox" />
                <span className='checkbox__checkmark'></span>
            </label>
            <label className='checkbox__container'>
                Lorem
                <input type="checkbox" />
                <span className='checkbox__checkmark'></span>
            </label>
            <button>Filtrar</button>
        </form>
    </FilterResultsContainer>
  )
}

export default FilterResults