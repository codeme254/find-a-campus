const University = ({ countryCode, universityName, country, webLink }) => {
  const universityNameArray = universityName.split(" ");
  const simpleCode = `${universityNameArray[0]} ${universityNameArray[1]}`;

  const formattedWebLink = webLink.includes("://")
    ? webLink
    : `http://${webLink}`;
  return (
    <div className="university">
      <div className="university__header">
        <div className="university__code">{countryCode}</div>
        <h2 className="university__name">{universityName}</h2>
      </div>
      <div>
        <p className="country__location">Location: {country}</p>
      </div>
      <a className="campus__link" target="_blank" href={formattedWebLink}>
        Official site for {simpleCode}
      </a>
    </div>
  );
};
export default University;
