import React,{Component} from "react"
import { BsSearch } from 'react-icons/bs'
import PropTypes from "prop-types"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export class Searchbar extends Component  {
  state = {
    value: '',
 
  }
  handleChange = (e) => {
    this.setState({ value: e.currentTarget.value.toLowerCase().trim() })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const { value } = this.state
    if (value.length=== 0) {
      toast.warn('please enter something')
    }
    if (value.length > 0) {

      await this.props.onSubmit({ value })

    }
 e.target.reset()
  }

  render()
  {
    return (<header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <BsSearch/>
      <span className="SearchForm-button-label">Search</span>
    </button>

        <input
        name="value"
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.handleChange}
    />
  </form>
</header>)
    
}
}
Searchbar.propTypes = {
  onChange: PropTypes.func,
  onSubmit:PropTypes.func.isRequired
}