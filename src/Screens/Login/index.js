import React from 'react';
import './styles.css';

import Button from '@material-ui/core/Button';
class index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write an essay about your favorite DOM element.'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
	


<div class="col-container">
  <div class="col" style={{backgroundColor:"#fff"}}>
  <form >
					<h4>Supplier Type</h4>
					<select className="Picker">
						<option value="Accommodation">Accommodation</option>
						<option value="DMC">DMC</option>
						<option selected value="Rental">Car Rental</option>
					</select>
				</form>
				<form>
                 
                    <h4>Email</h4>
					<input
                        
						type="text"
						// onChange={this.myChangeHandler}
					/>
                    <h4>Password</h4>
					<input

						type="text"
						// onChange={this.myChangeHandler}
					/>
                    
                    
                    
				</form>
                <form >
                <Button className="ButtonProps" >Sign In</Button>
                </form>
                
               
  </div>

  <div class="col" style={{backgroundColor: "#fff"}}>
  <i class="fa fa-user" aria-hidden="true"></i>


				<form>
                 
                    <h4>Register As a Supplier</h4>
					
                    
                    
                    
				</form>
                {/* <form >
                <Button className="ButtonProps" >Sign In</Button>
                </form> */}
  </div>


</div>
		);
	}
}
export default index;
