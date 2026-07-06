function FavoriteCities({
  favorites,
  onSelect,
  onRemove,
}) {
  if (favorites.length === 0) {
    return (
      <div className="favorites">
        <h2>⭐ Favorite Cities</h2>
        <p>No favorite cities yet.</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>⭐ Favorite Cities</h2>

      <div className="favorite-grid">
        {favorites.map((city) => (
          <div className="favorite-card" key={city}>
            <button
              className="favorite-city"
              onClick={() => onSelect(city)}
            >
              {city}
            </button>

            <button
              className="favorite-delete"
              onClick={() => onRemove(city)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCities;