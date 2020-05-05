import React, {Component} from 'react';
import FormControl from "../formControl/FormControl";
import CustomButtom from "../customButton/CustomButtom";
import "./Sign-In.style.scss"

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already hav an account.</h2>
                <span>Sing in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormControl
                        label="email"
                        type="email"
                        name="email"
                        handleChang={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormControl
                        label="password"
                        type="password"
                        name="password"
                        handleChang={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <CustomButtom type="submit">Sign In</CustomButtom>
                </form>
            </div>
        );
    }
}

export default SignIn;