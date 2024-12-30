import Image from "next/image";

export default function Gallery() {
    return (
        <section className="container">
            <div className="grid grid-cols-2 imageshowCase">
                <Image
                    src="/images/1.png"
                    className="h-[400px]"
                    alt="image-gallery"
                    width={624}
                    height={400}
                />

                <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
                    <Image src="/images/2.png" alt="image-gallery" width={312} height={200} />
                    <Image src="/images/3.png" alt="image-gallery" width={312} height={200} />
                    <Image src="/images/4.png" alt="image-gallery" width={312} height={200} />
                    <Image src="/images/5.png" alt="image-gallery" width={312} height={200} />
                </div>
            </div>
        </section>
    );
}
