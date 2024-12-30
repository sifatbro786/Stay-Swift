import HotelCard from "./HotelCard";

export default async function HotelList() {
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                <HotelCard />
            </div>
        </div>
    );
}
