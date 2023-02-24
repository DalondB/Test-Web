import Head from 'next/head'
import Navbar from 'components/Navbar'
import styles from '@/styles/Home.module.css'
import Footer from 'components/Footer'
import Link from 'next/link'


export default function Home() {

    return( 

    <div /*className = {styles.container}*/>

        <h1 className = {styles.title}>HomePage</h1>

        <p className = {styles.text}>Another test!Another test!Another test!Another test!Another test!Another test!Another test!</p>

        <Link href = "/ninjas"> <a className = {styles.btn}>See Ninja Listing</a> </Link>

    </div>
    
    )
}