function Header() {
    return (
      <header className="banner">
        <div className="banner__contents">
        <h4 className="banner__title__up">Netflix series</h4>
          <h1 className="banner__title">True Beauty</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
          Since she was little, Lim Ju-kyung has had a complex about her appearance. 
          To hide her bare face, Ju-kyung always wears make-up. 
          Her excellent make-up skills make her pretty...
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    );
  }
  
  export default Header;