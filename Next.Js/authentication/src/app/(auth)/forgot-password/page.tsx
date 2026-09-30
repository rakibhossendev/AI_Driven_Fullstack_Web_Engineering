"use client";
import { requestPasswordReset } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button,FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";

interface ForgotPasswordType{
    email: string;
}

export default function ForgotPassword() {
    const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries()) as unknown as ForgotPasswordType;
      
    //   console.log("before submit user data: ",userData);

      const responseData = await requestPasswordReset({
        email: userData.email,
        redirectTo: "/reset-password"
      }) 

      toast.success("An email is send your email. Please check");
      console.log("Send data", responseData)
    }


    return (
        <div>
            <h1 className="text-2xl font-bold">Forgot Password</h1>

            <Form className="flex w-96 flex-col gap-4" onSubmit={handleForgotPassword}>
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
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    )
}