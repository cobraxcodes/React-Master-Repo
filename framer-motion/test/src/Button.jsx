import { motion } from 'framer-motion'

function Button(){
    return(
        <>
        
                <motion.button  initial={{x:202, y:476, scale: 0.5}}
            animate={{x:392, y:477, scale: 1.5,}}
            transition={{duration: 2}}
            whileHover={{backgroundColor: "#7CAE7A"}}
            className='btn'>Click Me!
            </motion.button>
        </>
    )
}

export default Button