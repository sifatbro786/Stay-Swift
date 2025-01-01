import { auth } from "@/auth";
import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/database/queries";

export default async function HotelDetailsPage({ params: { id } }) {
    const hotelInfo = await getHotelById(id);

    return (
        <>
            <Summary hotelInfo={hotelInfo} />
            <Gallery gallery={hotelInfo?.gallery} />
            <Overview overview={hotelInfo?.overview} />
        </>
    );
}
