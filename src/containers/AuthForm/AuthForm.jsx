import React from 'react';
import {AuthFormWrapper} from "./styled";
import {Button} from "../../styles";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn} from "../../store/auth/actions";
import {useForm} from "react-hook-form";


const AuthForm = () => {
        const {register, handleSubmit, setError, clearErrors, formState: {errors}} = useForm();

        const onSubmit = (data) => {
            if (data.username === process.env.REACT_APP_USER_LOGIN && data.password === process.env.REACT_APP_USER_PASSWORD) {
                dispatch(signIn())
                history.push("/tickets")
            } else {
                setTimeout(() => {
                    setError("username", {type: "manual"})
                    clearErrors()
                }, 500);
            }
        }


        const history = useHistory();
        const dispatch = useDispatch()


        return (
            <AuthFormWrapper>
                <h1>Hello, traveler</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Username" {...register("username")}/>
                    <input placeholder="Password" type="password" {...register("password")}/>
                    {errors.username && <span>Wrong username or login!</span>}
                    <div>
                        <Button type="submit">Sign in</Button>
                        <a href="https://google.com/" target="_blank" rel="noreferrer">Need help?</a>
                    </div>
                </form>
            </AuthFormWrapper>
        );
    }
;


export default AuthForm;
