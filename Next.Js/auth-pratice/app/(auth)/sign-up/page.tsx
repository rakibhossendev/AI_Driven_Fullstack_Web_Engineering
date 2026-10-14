'use client'

import { signUp } from "@/lib/auth-client";

interface SignUpDataType{
    name: string;
    email: string;
    password: string;
    callbackURL: string;
}

export default function SignUpPage() {

    const handleSignUp = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const getFormData = new FormData(e.currentTarget);
        const getUserData = Object.fromEntries(getFormData.entries()) as unknown as SignUpDataType;

        // console.log(getUserData)

        const {data,error} = await signUp.email({
            name: getUserData.name,
            email: getUserData.email,
            password: getUserData.password,
            callbackURL: "/profile",
        })

        console.log(error);

        console.log("After signUp ",data,error)
    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">

                {/* Header */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                        ✦
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                        Join us and start connecting with your community.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSignUp}>

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-zinc-700"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-zinc-700"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-zinc-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-zinc-950 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-900/10 active:scale-[0.99]"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-zinc-500">
                    Already have an account?{" "}
                    <a
                        href="/sign-in"
                        className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>


    )

}