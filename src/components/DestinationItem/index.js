import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  return (
    <li>
      <img
        src={destinationItem.imgUrl}
        alt={destinationItem.name}
        className="image"
      />
      <p>{destinationItem.name}</p>
    </li>
  )
}
export default DestinationItem
