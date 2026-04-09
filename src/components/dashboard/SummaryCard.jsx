const summaryCard = ({title, value}) => {
    return (
        <div className="" style={{
            flex: 1,
            padding :"20px",
            color: "#fff",
            background: "#4a4a62",
            borderRadius: "10px"
        }}>
            <h4>{title}</h4>
            <h2>₹ {value}</h2>
        </div>
    )
};

export default summaryCard;