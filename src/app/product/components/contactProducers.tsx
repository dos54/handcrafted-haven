
export default function ContactProducers(){
    return(
        <>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Contact Card - Prince */}
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-semibold text-gray-800">Prince</h3>
                    <a
                        href="mailto:princenwachukwu308@gmail.com"
                        className="text-blue-600 hover:underline block mt-1 break-words"
                    >
                        princenwachukwu308@gmail.com
                    </a>
                </div>

                {/* Contact Card - Nadia */}
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-semibold text-gray-800">Nadia</h3>
                    <a
                        href="mailto:nadiaaa3@gmail.com"
                        className="text-blue-600 hover:underline block mt-1 break-words"
                    >
                        nadiaaa3@gmail.com
                    </a>
                </div>

                {/* Contact Card - Steven */}
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-semibold text-gray-800">Steven</h3>
                    <a
                        href="mailto:steven@example.com"
                        className="text-blue-600 hover:underline block mt-1 break-words"
                    >
                        stevenT@example.com
                    </a>
                </div>

                {/* Contact Card - Ernest */}
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-semibold text-gray-800">Ernest</h3>
                    <a
                        href="mailto:ernestN@example.com"
                        className="text-blue-600 hover:underline block mt-1 break-words"
                    >
                        ernestN@example.com
                    </a>
                </div>

                {/* Contact Card - Vermont */}
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-semibold text-gray-800">Vermont</h3>
                    <a
                        href="mailto:vermontG@example.com"
                        className="text-blue-600 hover:underline block mt-1 break-words"
                    >
                        vermontG@example.com
                    </a>
                </div>
            </div>
        
        </>
    )
}