import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
interface PropertyLink {
  to: string
  className: string
  children: ReactNode
}
const Links = ({ to, className, children }: PropertyLink) => {
  return (
    <>
      <Link to={to} className={className}>
        {children}
      </Link>
    </>
  )
}

export default Links
