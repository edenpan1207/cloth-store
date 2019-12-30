import React, {Component} from 'react';
import Forminput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './sign-in.scss';

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Forminput 
            type="email" 
            name="email" 
            label="email"
            value={this.state.email} 
            handleChange={this.handleChange} 
            required
          />

          <Forminput 
            type="password" 
            name="password" 
            label="password"
            value={this.state.password} 
            handleChange={this.handleChange} 
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>      
        </form>
      </div>
    )
  }
}

export default SignIn;