import { Action } from '@remix-run/router';
import React, { useReducer } from 'react'

const Register = () => {
    const initialState = {
        email: "",
        password: "",
        gridRadios: "",
        checkbox: false,

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };
                case "TOGGLE":
                    return {
                        ...state,
                        checkbox:!initialState?.checkbox,
                       
                    };
                // TOGGLE
            default:
                return state;
        }

    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return (
        <form onSubmit={submit}>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                        name='email'
                        type="text"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Email"
                        onBlur={(e) => dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value }
                        })}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input
                        name='password'
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="Password"
                        onBlur={(e) => dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value }
                        })}
                    />
                </div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input
                                onClick={(e) => dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                defaultValue="option1"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                onClick={(e) => dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input
                                onClick={(e) => dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value }
                                })}
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios3"
                                defaultValue="option3"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input onClick={() => dispatch({
                            type: "TOGGLE",
                           
                        })} name='checkbox' className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                            Example checkbox
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button disabled={!state?.checkbox} type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </div>
            </div>
        </form>

    )
}

export default Register