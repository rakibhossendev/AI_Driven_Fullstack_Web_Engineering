import { Suspense } from "react";
import ResetPasswordForm from "./reset-password-form";

export default function ResetPassword(){

    return (
        <div>   
            <h1 className="text-2xl font-bold">Reset Password</h1>

            <Suspense fallback={<p>Loading..</p>}>
                <ResetPasswordForm></ResetPasswordForm>
            </Suspense>
        </div>
    )
}