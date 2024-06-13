export const buttonOnHover = () => ({
    initial: {
        backgroundColor: '#fff',
    },
    whileHover: {
        backgroundColor: '#f3f3f3',
    }
})

export const animateFadeUpWithDelay = (delay) => ({
    initial: {
        y: 15,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            delay: delay * 0.1,
        }
    }
})

export const animateSearchbar =  (expanded) => ({
    initial: {
        width: '50px',
    },
    animate: {
        width: expanded ? '100%' : '50px',
        transition: {
            duration: 0.5,
        }
    }
})

