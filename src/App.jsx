import { useState, useEffect } from 'react';
import './App.css'
import University from './components/University';

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [allUniversities, setAllUniversities] = useState([])
  useEffect(() => {
    const getData = async () => {
      if (!searchParam){
        setAllUniversities([])
      } else {
        try{
          const response = await fetch(`http://universities.hipolabs.com/search?country=${searchParam}`)
        const universities = await response.json()
          setAllUniversities(universities)
        } catch(err){
          console.log(err)
        }
      }
    }
    getData()
  }, [searchParam])

  const handleSearch = (event) => {
    event.preventDefault()
    handleSearchCampus()
  }

  const handleSearchCampus = (event) => {
    setSearchParam(event.target.value)
  }
  return (
    <>
      <form className='search__form' onSubmit={handleSearch}>
        <input type="search" placeholder='Enter country name' className='search__input' value={searchParam} onChange={handleSearchCampus} />
        <button className='search__button'>search</button>
      </form>
      
      <h2 className='guide-text'>You searched for {searchParam}. ({allUniversities.length} results)</h2>
      
      <h3>
        {
          allUniversities.length == 0 ? "No results found" : null
        }
      </h3>
      <div className="universities__container">

      {
        allUniversities && allUniversities.map((university, index) => (
          <University key={index} countryCode={university.alpha_two_code}
          universityName={university.name}
          country={university.country}
          webLink={university.domains[0]} />
        ))
      }
      </div>
    </>
  )
}

export default App
