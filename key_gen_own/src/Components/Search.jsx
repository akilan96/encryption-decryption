import React from 'react'

const Search = ({search,setSearch}) => {

  console.log(search)
  return (
    <div className=' mt-1 mr-5 float-end '>
    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" onChange={(e)=>setSearch(e.target.value)} className='w-[250px]' placeholder="Search by Machine Name ..." value={search}/>
</label>
</div>
  )
}

export default Search