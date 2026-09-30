'use client'
import {signUp,signIn } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import { string } from "better-auth";

export interface formDataType {
    name: string;
    email: string;
    password: string;
}


export default function SignUpPage() {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const inputFormData = Object.fromEntries(
            formData.entries()
        ) as unknown as formDataType;

        const { data: responseData, error } = await signUp.email({
            name: inputFormData.name,
            email: inputFormData.email,
            password: inputFormData.password
        })

        console.log(responseData, error);
        // console.log(error);
    };

    const handleGoogleSignIn = async() => {
        const responseData = await signIn.social({
            provider: "google",
        })

        console.log("after google signIn: ", responseData);
    }

    const handleGithubSignIn = async () => {
        const responseData = await signIn.social({
            provider: "github",
        })
        console.log("github redirection : ",responseData)
    }
    return (
        <section className="container mx-auto ">
            <div className="flex justify-center mt-50">
                <Form
                    className="flex w-96 flex-col gap-4"
                    render={(props) => <form {...props} data-custom="foo" />}
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            {/* <Check /> */}
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>

                <p className="text-center mt-5">OR</p>
            <div className="flex justify-center mt-5">
                <button onClick={handleGoogleSignIn} className="px-4 py-2 rounded cursor-pointer hover:bg-green-700 text-white border-2 border-green-500">Sign Up With Google</button>
                <button onClick={handleGithubSignIn}  className="px-4 m-3 py-2 rounded cursor-pointer hover:bg-gray-700 text-white border-2 border-green-500">Sign Up With Github</button>
            </div>
        </section>


    )
}