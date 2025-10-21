function CartWidget(){
    return(
        <div style={styles.widget}>
            <span role="img" aria-label="carrito">🛒</span>
            <span style={styles.counter}>0</span>
        </div>
    );
}

const styles={
    widget:{
        display:"flex",
        alignItems:"center",
        gap: "0.5rem",
        backgroundColor:"#444",
        padding:"0.5rem 1rem",
        borderRadius:"10px",
    },
    counter:{
        fontWeight:"bold",
        color:"#fff",
    },
};

export default CartWidget;