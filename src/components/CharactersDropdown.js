const CharacterDropdown = (props) => {
  const { characters } = props;
  
  return (
    <div className="dropdown-container">
      {characters.map((character) => {
        return (
          <div className="dropdown-character-container">
            <img
              src={character}
              alt="Megaman"
              className="dropdown-character-img"
            />
          </div>
        )
      })}
    </div>
  );
}
 
export default CharacterDropdown;