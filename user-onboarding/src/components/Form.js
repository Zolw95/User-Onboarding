import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import '../Form.css';
import UsersList from './UsersList';
import App from '../App'
import styled from 'styled-components';

/////////////////////////
/// STYLED COMPONENTS ///
/////////////////////////


const MainHeading = styled.span`
color: #333333;
font-weight: 800;
font-size: 24px;
line-height: 1.2;
text-align: center;
display: block;
padding-bottom: 25px;
`;




/////////////////////////
///       FORM        ///
/////////////////////////

export default function Form() {


    // Initial state for the form
    const initialFormState = {
        name: "",
        email: "",
        password: "",
        terms: "",
        checked: false
    }

    // State for inputs
    const [formState, setFormState] = useState(initialFormState);

    // State for errors
    const [errors, setErrors] = useState(initialFormState);

    // State for axios post
    const [post, setPost ] = useState([]);

    // Set Button On/Off depending on Form state
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // State for server errors
    const [serverError, setServerError] = useState("");

    // State for users
    const [users, setUsers] = useState([]);

    // // State for Checkbox
    const [checkbox, setCheckBox] = useState(true);

    // Set up FORM SCHEMA for all validation - check if key value is valid
    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup.string().email("Must be a valid email address").required(),
        password: yup.string().required("Password is a required field"),
        terms: yup.boolean().oneOf([true], "Please check Terms of Service")
    });

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setIsButtonDisabled(!valid);
        });
    }, [formState]);
    //console.log("error state", errors);
    

    // CheckBox
    // useEffect(() => {
    //     formSchema.isValid(formState).then(valid => {
    //         setCheckBox(!valid);
    //     });
    // }, [formState])

    // Validation for each input
    const validateChange = e => {
        yup
        // Read the value of schema key using name of input
        .reach(formSchema, e.target.name)
        // Validate the value of input
        .validate(e.target.value)
        // If the validation passes, clear all errors
        .then(valid => {
            setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch(err => {
            setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    };

    // Submit Form Function
    const submitForm = e => {
        e.preventDefault();

        // Send POST request with object
        axios
            .post("https://reqres.in/api/users", formState) // Post Form state object
            .then(response => 
                setUsers([...users, response.data]),
                setFormState(initialFormState),
                )
            .catch(err => setServerError("Something went wrong!"))
    }



    // onChange Function - updates 
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]: 
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e); // Validates every change in every input
        setFormState(newFormData); // Update state with new data
    };

    // Checkbox Function

    // const checkBox = e => {
    //     const uncheck = {
    //         ...checkbox,
    //         [e.target.name]: e.target.type === "checkbox" ? !e.target.checked : null
    //     }
    // }

    return (
        <div className="create-account-form">
            <MainHeading>Create Account</MainHeading>
            <form onSubmit={submitForm}>
                {serverError ? <p className="error">{serverError}</p> : null}
                <label htmlFor="name">
                    {/* Name */}
                    <input
                        className="input"
                        maxlength="20" 
                        id="name"
                        type="text" 
                        name="name"
                        placeholder="Name"
                        onChange={inputChange}
                        value={formState.name}
                        data-cy="name"
                    />
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </label>
                <label htmlFor="email">
                    {/* Email */}
                    <input
                        className="input"  
                        maxlength="25"
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={inputChange}
                        value={formState.email}
                        data-cy="email"
                    />
                    {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                </label>
                <label htmlFor="password">
                    {/* Password */}
                    <input
                        minLength="8"
                        maxLength="30"
                        className="input"  
                        id="password"
                        type="password" 
                        name="password"
                        placeholder="Password"
                        onChange={inputChange}
                        value={formState.password}
                        data-cy="password"
                    />
                    {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
                </label>
                <label htmlFor="terms" className="terms">
                    Terms of Service
                    <input 
                        type="checkbox"
                        onChange={inputChange}
                        name="terms"
                        value={formState.terms}
                    />
                </label>
                <pre>{JSON.stringify(post, null, 2)}</pre>    
                <button disabled={isButtonDisabled} type="submit">
                    Sign Up
                </button>
            </form>
            <UsersList users={users} />
        </div>
    );
}
