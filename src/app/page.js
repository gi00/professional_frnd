// import Image from 'next/image'
import { Rubik } from 'next/font/google'
import NavBar from "@/components/login/Navbar.js";
// import styles from './page.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <NavBar />
  )
}
