"use client"

interface FormDataType{
    name: string;
    email: string;
}

export default function AddUserForm() {
    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as unknown as FormDataType;
        
        const response = await fetch('http://localhost:5000/users',{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userData)
        })

        const result: FormDataType[] = await response.json();
        console.log("Result: ",result);
    }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">Get started by adding a new user system profile.</p>
        </div>

        <form onSubmit={handleSubmitForm} className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700 tracking-wide">
              Full Name
            </label>
            <input 
              type="text" 
              name="name" 
              placeholder="John Doe" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 bg-gray-50/50"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700 tracking-wide">
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 bg-gray-50/50"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow transition performance duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add User
          </button>
        </form>
      </div>
    </section>
  )
}
