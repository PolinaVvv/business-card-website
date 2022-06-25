import { Link } from 'react-scroll'

export default function Menu2({ link, text }) {
  return (
    <li style={{ cursor: 'pointer', listStyleType: 'none' }}>
      <Link
        activeClass='active'
        to={link}
        // spy={true} //выделение Link при достижении целевой позиции scroll
        smooth={true} //анимация прокрутки
        duration={500} //время анимации прокрутки
      >
        {text}
      </Link>
    </li>
  )
}
