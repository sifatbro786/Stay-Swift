"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button
            className="px-[6px] border-[3px] border-primary rounded-md"
            onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/login` })}
        >
            Sign Out
        </button>
    );
}
