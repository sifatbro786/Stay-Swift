import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

export default async function HotelList({ destination, checkin, checkout }) {
    const allHotels = await getAllHotels(destination, checkin, checkout);

    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {allHotels &&
                    allHotels.map((hotel) => (
                        <HotelCard
                            key={hotel?.id}
                            hotelInfo={hotel}
                            checkin={checkin}
                            checkout={checkout}
                        />
                    ))}
            </div>
        </div>
    );
}
