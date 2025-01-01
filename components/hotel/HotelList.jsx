import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

export default async function HotelList() {
    const allHotels = await getAllHotels();

    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {allHotels &&
                    allHotels.map((hotel) => <HotelCard key={hotel?.id} hotelInfo={hotel} />)}
            </div>
        </div>
    );
}
