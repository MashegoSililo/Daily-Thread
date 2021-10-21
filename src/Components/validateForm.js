import React from 'react'

const ValidateForm = (values)=> {
    const required = ['!', '@', '#', '$','%','^', '&', '*', '(', ')', '?' ]
    let error = {};
    if(!values.fullName){
        error.fullName="Name is required."
    }
    if(!values.username){
        error.username="username is required."
    }
    if(!values.email){
        error.email="Email is required."
    } else if( values.email.search('@') === -1 || values.email.search('.') === -1) {
        error.email = "Invalid. Please provide a valid email address"

    }
    if(!values.password){
        error.password="Password is required."
    } else if (values.password.length < 8){
        error.password('Your password must be more than 8 characters')
    }
    else if (values.password.search(required.map(char => char)) === -1){
        error.password('Your password must contain special characters. eg: @ ! # &')

    }
    if(!values.confirmPassword){
        error.confirmPassword="You are required to confirm your password."
    } else if (values.password !== values.confirmPassword){
        error.confirmPassword('This is not your password')
    }
    return <div>Form valid</div>
}

export default ValidateForm;