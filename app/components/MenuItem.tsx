interface MenuItemProps {
    name: string;
    description: string;
    price: string;
    image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <span className="text-orange-600 font-bold text-xl">${price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}