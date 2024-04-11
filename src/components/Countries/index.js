import './index.css'

const Countries = props => {
  const {countryDetails, onClickVisit} = props
  const {name, isVisited, id} = countryDetails

  const visitedInfo = isVisited ? 'visited' : 'visit'

  const onClickVisitBtn = () => {
    onClickVisit(id)
  }

  return (
    <li className="list-items">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="visit">{visitedInfo}</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onClickVisitBtn}>
          {visitedInfo}
        </button>
      )}
    </li>
  )
}

export default Countries
