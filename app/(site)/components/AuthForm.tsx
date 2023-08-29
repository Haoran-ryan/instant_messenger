'use client';
import React, {useCallback, useState} from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";

type Variant = 'LOGIN' | 'REGISTER';
const Authform = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        }else{
            setVariant('LOGIN');
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email:'',
            password:'',
        }
    });

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);
        if(variant === 'REGISTER'){
            // axios register
        }
        if(variant === 'LOGIN'){
            // nextauth signin
        }
    };

    const socialAction = (action:string)=>{
        setIsLoading(true);

        //nextauth social signin
    }

    return(
        <div
        className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md"
        >
            <div
            className="
            bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10"
            >
                <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}

                >
                    {variant === "REGISTER" && (
                        <Input
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors}
                        />
                    )}

                    <Input
                        id="email"
                        label="Email"
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id="password"
                        label="Password"
                        register={register}
                        errors={errors}
                    />
                    <Button
                        disabled={isLoading}
                        fullWidth
                        type="submit"
                    >
                        {variant === "LOGIN" ? "Sign In" : "Register"}
                    </Button>
                </form>
                <div className='mt-6'>
                    <div className='relative'>
                        <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                        ">
                            <div
                            className='w-full border-t border-gray-300'
                            ></div>
                        </div>
                        <div className='relative flex justify-center text-sm'>
                                <span className="bg-white px-2 text-gray-500">
                                    Or continue with
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Authform;