import 'font-awesome/css/font-awesome.min.css';
function Nav() {
    return (
      <div className="nav false">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <select className="selectpicker" data-witdh="contain" >
    <option value="fas-fa-globe">&#xf0ac; English</option>
  <option value="fas-fa-globe">&#xf0ac;  Hindi</option>
</select>
        <img
          className="nav__avatar"
          src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
          alt=""
        />
      </div>
    );
  }
  
  export default Nav;