import Image from "next/image";

export default function Gallery({ gallery }) {
    const newGallery = [...gallery];
    newGallery.shift();

    return (
        <section className="container">
            <div className="grid grid-cols-2 imageshowCase">
                <Image
                    src={gallery[0]}
                    className="h-[400px]"
                    alt="Main-Gallery-Image"
                    width={624}
                    height={400}
                />

                <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
                    {newGallery.map((image) => (
                        <Image
                            key={image}
                            src={image}
                            className="h-[400px]"
                            alt="Sub-Gallery-Pics"
                            width={312}
                            height={200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
