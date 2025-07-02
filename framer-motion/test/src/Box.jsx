import {motion} from 'framer-motion'

function Box(){
    return(
        <div>
            <motion.div className='box1'
            initial={{x:838, y:664, opacity: 0}}
            animate={{x:840, y:347, opacity: 1}}
            transition={{duration: 2}}
            >
                <p>Box 1</p>
            </motion.div>

        </div>
    )
}

export default Box