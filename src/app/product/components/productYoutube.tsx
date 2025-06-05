import "@/app/product/product.css"

export default function ProductYoutube(){
    
    return(
        <>
            {/* Advert youtube */}
            <div className="py-2 px-0 md:px-10 md:pb-10 md:pt-2">              
                <iframe
                    className="w-full h-60 md:h-[500px]"
                    src="https://www.youtube.com/embed/yrssC_y1yuM?autoplay=1&mute=1&loop=1&playlist=yrssC_y1yuM&controls=0"
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                <small>Product Tutorials</small>
            </div><hr />

        </>
    )
}