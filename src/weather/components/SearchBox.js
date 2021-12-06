import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBox = props => {

    const [inputText, setInputText] = useState({
        title: "",
      })
     
      const onChange = e => {
        setInputText({
          ...inputText,
          [e.target.name]: e.target.value,
        })
      }
      const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
          props.searchProps(inputText.title)
          setInputText({
            title: "",
          })
        } else {
          alert("Please write item")
        }
      }
    
  return (
    <form onSubmit={handleSubmit} className="form-container SearchBox">
    <input
      type="text"
      className="input-text"
      placeholder="Search City..."
      value={inputText.title}
      name="title"
      onChange={onChange}
    />
    <button className="input-submit">
    <FaSearch color="darkcyan" size="20px" className="submit-icon" />
     </button>
  </form>
  )
}
export default SearchBox