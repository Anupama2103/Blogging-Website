import "./Header.css"

export default function Header() {
  return (
    <div className='header'> 
      <div className="headerTitles">
        <span className="headerTitleSm">Explore Here</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="./images/b2.jpg" alt="" />
    </div>
  )
}
