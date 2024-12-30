import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "StaySwift",
    description: "This is a small hotel bookings website.",
};

export default async function AuthLayout({ children }) {
    await dbConnect();

    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Navbar sideMenu={false} />
                <main>{children}</main>
            </body>
        </html>
    );
}
