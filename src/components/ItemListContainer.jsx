function ItemListContainer({greeting}){
    return(
        <section style={styles.container}> 
            <h2>{greeting}</h2>
            <p>Proximamente verás acá nuestro catálogo de productos.</p>
        </section>
    );
}

const styles={
    container:{
        padding:"2rem",
        textAling:"center",
    },
};

export default ItemListContainer;