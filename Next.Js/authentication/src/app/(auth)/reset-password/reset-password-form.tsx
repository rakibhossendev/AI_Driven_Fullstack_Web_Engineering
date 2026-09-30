'use client'
import { useSearchParams } from "next/navigation"
import { Check } from "@gravity-ui/icons";
import { Button,FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { resetPassword } from "@/lib/auth-client";

interface ResetPasswordType{
    password: string;
}

export default function ResetPasswordForm() {
    const useSearchParam = useSearchParams()
    const token = useSearchParam.get("search") ?? undefined;


    const handleRestPassword = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as unknown as ResetPasswordType

        const responseData = await resetPassword({
            newPassword: userData.password,
            token
        })
    }
    return (
        <div>
            <h1>Now give me new password</h1>

            <Form className="flex w-96 flex-col gap-4" onSubmit={handleRestPassword}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    
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