export const buttonOnHover = () => ({
    initial: {
        backgroundColor: '#fff',
    },
    whileHover: {
        backgroundColor: '#f3f3f3',
    }
})

export const animateFadeUp = (delay) => ({
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