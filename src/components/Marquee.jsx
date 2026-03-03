const services = [
    'Web Development',
    'AI / ML',
    'Full Stack',
    'App Developer',
];

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-dark flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 2l2.09 6.26L20.18 9l-5 4.09L16.18 20 12 16.27 7.82 20l1-6.91-5-4.09 6.09-.74z" />
        </svg>
    );
}

export default function Marquee() {
    return (
        <div className="relative bg-neon py-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...services, ...services].map((service, i) => (
                    <div key={i} className="flex items-center gap-6 mx-6">
                        <StarIcon />
                        <span className="text-dark font-compagnon font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide">
                            {service}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
