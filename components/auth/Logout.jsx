"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
    return (
        <button
            onClick={() => {
                signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` });
            }}
        >
            Sign Out
        </button>
    );
};

export default Logout;
