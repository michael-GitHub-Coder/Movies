const Card = ({imageUrl}) =>{

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-500">
       <img className="w-full" src={imageUrl} alt="Card image" />
    </div>
}
export default Card