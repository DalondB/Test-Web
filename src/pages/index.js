import Head from 'next/head'
import navigation_bar from 'components/navigation_bar'
import styles from '@/styles/Home.module.css'


export default function Home() {

    return( 

    <div>

        <navigation_bar />

        <h1>HomePage</h1>

        <p>Another test!</p>

    </div>
    
    )
}