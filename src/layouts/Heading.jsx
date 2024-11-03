

const Heading = ({title,subtitle}) => {
    return (
        <div className="mt-10 text-center space-y-1">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm font-medium text-gray-600 ">{subtitle}</p>
        </div>
    );
};

export default Heading;