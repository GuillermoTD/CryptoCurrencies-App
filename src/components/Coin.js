const Coin = ({name,image,price,volume,symbol}) => {
    return (
        <div>
            <img src={image} alt="crypto" />
            <div>{name}</div>
        </div>
    )
}

export default Coin
