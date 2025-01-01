"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationForm() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);
        const fname = formData.get("fname");
        const lname = formData.get("lname");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    password,
                }),
            });

            if (response.status === 201) {
                router.push("/login");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Something went wrong");
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
    };

    return (
        <>
            {error && <div className="text-xl text-red-500 text-center">{error}</div>}

            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" />
                </div>

                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit" className="btn-primary w-full mt-4">
                    Create account
                </button>
            </form>
        </>
    );
}
