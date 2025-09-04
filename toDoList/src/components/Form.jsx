import {useForm} from "react-hook-form"
import React, {useState} from "react";

const Form = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
    } = useForm();

    const onSubmit=(data)=>{
        console.log("submitting the form", data);
    }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input {...register("AddToDo")}/>
            <input type="submit" />
        </div>
    </form>
    
    <div>
        
    </div>
    </div>
  )
}

export default Form
