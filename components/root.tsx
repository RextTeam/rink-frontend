import { ReactNode } from 'react'


interface Props {
  children: ReactNode
}


function Header() {
  return (
    <header>
      <h1>Rink</h1>
      <nav></nav>
    </header>
  )
}

export default function pageRoot({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
