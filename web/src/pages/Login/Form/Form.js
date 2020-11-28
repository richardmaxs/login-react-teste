import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import 'pages/Login/Form/Form.css';



const PagesLoginForm = () =>{


    function onSubmit(values, actions){
      console.log('SUBMIT', values);
      alert('Sucess');
    }
     function validate(values){
         const errors = {};
        if(!values.username){
            errors.username = 'Username é obrigatório'
        }
        if(!values.password){
            errors.password = 'Passoword é obrigatório'
        }

        return errors;
    }

    return(
        <div className="login-form__container" >
            <div>
                <a href="/#" className="login-form__link">Home<span>&nbsp;/</span></a>
                <a href="/#" className="login-form__link">&nbsp;List<span>&nbsp;/</span></a>
                <a href="/#" className="login-form__link active">&nbsp;App</a>    
            </div>
            <div className="login-form__card">

                <Formik
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
                    onSubmit={onSubmit}
                    initialValues={{
                        username: '',
                        password: '',
                        checked: [],
                    }}
                    render={ ({ values, errors }) => (
                        <Form>
                            <div className="login-form__group">
                                <div className="row">
                                    <div className="col-lg-1 col-md-4">
                                        <label htmlFor="username">Username:</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                    <Field id="username" name="username" type="text" className="form-control" />
                                    {errors.username && (
                                        <span className="Login-form__required">{errors.username}</span>
                                    )}
                                    </div>
                                </div>
                            </div>
                            <div className="login-form__group">
                                <div className="row mt-4">
                                    <div className="col-lg-1 col-md-4">
                                        <label htmlFor="password">Passoword:</label>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <Field id="password" name="password" type="password" className="form-control" />
                                        {errors.password && (
                                            <span className="Login-form__required">{errors.password}</span>
                                        )}
                                        <div className="form-check mt-3">
                                            <Field type="checkbox" className="form-check-input" name="checked" id="checked" value="remember" />
                                            <label className="form-check-label" htmlFor="checked">Remember me</label>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                />                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                
            </div>
        </div>        
    );
};

export default PagesLoginForm;