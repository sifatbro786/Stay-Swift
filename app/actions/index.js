"use server";

import { signIn } from "@/auth";

export async function login(formData) {
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });

        return response;
    } catch (error) {
        if (error["cause"]?.["err"]?.toString().includes(" User not found")) {
            return { error: true, message: "User not found" };
        }

        return { error: true, message: "Somthing went wrong" };
    }
}
