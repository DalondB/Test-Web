/*For shapes assignment*/

import styles from '@/styles/Home.module.css'

const Shapes = () => {
    return ( 
        <body>
            <div className = {styles.one}>
                <div className = {styles.square}>
                    square
                </div>
            </div>
            <div className = {styles.two}>
                <div className = {styles.circle}>
                    circle
                </div>
            </div>
            <div className = {styles.three}>
                <div className = {styles.triangle}>
                    triangle
                </div>
            </div>
            <div className = {styles.four}>
                <div className = {styles.diamond}>
                    diamond
                </div>
            </div>
        </body>
     );
}
 
export default Shapes;