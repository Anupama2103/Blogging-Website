import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="./images/Photo1.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          voluptate, sint, eveniet voluptas, voluptatem voluptatum, voluptatibus</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Politics</li>
          <li className="sidebarListItem">Art & Culture</li>
          <li className="sidebarListItem">Psychology</li>
          <li className="sidebarListItem">Environment</li>
          <li className="sidebarListItem">Movies</li>
          </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          


      </div>
    </div>
    </div>
  )
}
