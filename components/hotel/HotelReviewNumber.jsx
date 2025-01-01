import { getReviewsForAHotel } from "@/database/queries";
import Link from "next/link";

export default async function HotelReviewNumber({ id }) {
    const reviews = await getReviewsForAHotel(id);

    return (
        <>
            {reviews?.length === 0 ? (
                <Link href="#" className="underline">
                    Be the first one to review
                </Link>
            ) : (
                <p className="underline">
                    {reviews.length} {`Review${reviews.length > 1 ? "s" : ""}`}
                </p>
            )}
        </>
    );
}
