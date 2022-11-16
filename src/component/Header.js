const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="title">TO DO</div>
      <div className="theme">
        <img src="./image/icon-sun.svg" alt="theme" />
      </div>
    </div>
  )
}
Header.defaultProps = {
  title: "To-Do-List",
}

export default Header
