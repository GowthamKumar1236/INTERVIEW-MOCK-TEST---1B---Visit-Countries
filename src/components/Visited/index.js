import './index.css'

const Visited = props => {
  const {visitedCountriesDetails, onClickRemoveVisited} = props
  const {id, name, imageUrl} = visitedCountriesDetails

  const onClickRemoveBtn = () => {
    onClickRemoveVisited(id)
  }

  return (
    <li className="visited-items">
      <img className="logo" src={imageUrl} alt="thumbnail" />
      <div className="info-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default Visited
