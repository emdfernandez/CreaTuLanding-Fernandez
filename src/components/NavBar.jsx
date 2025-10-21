import CartWidget from "./CartWidget";

function NavBar(){
    return (
        <nav style={styles.nav}>
        <div style={styles.logo}>Mi Tienda</div>
        <ul style={styles.links}>
            <li><a href="#">Juegos</a></li>
            <li><a href="#">Consolas</a></li>
            <li><a href="#">Accesorios</a></li>
            <li><a href="#">Merch</a></li>
        </ul>
        <CartWidget/>
        </nav>
    );
}

const styles ={
    nav:{
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#0d0768ff",
        color:"#fff",
    },
    logo:{
        fontSize:"1.5rem",
        fontWeight:"bold",
    },
    links:{
        listStyle:"none",
        display:"flex",
        gap:"1.5rem",
        
    },
};

export default NavBar;