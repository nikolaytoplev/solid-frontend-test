type Props = {
  text: string,
  icon: string,
}

const MenuLink = ({ icon, text }: Props) => (
  <div className="nav__dropdown-menu-item">
    <i className="material-icons-outlined">
      {icon}
    </i>

    {text}
  </div>
)

export default MenuLink
