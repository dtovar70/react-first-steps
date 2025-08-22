const ItemCounter = () => {
  return (
    <section
        style = {{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20,
    }}>
        <span
        style={{
            fontSize: 20,
            fontWeight: 'bold',
        }}
        >
            Nintendo Swtich 2</span>
        <button> +1</button>
        <span>10</span>
        <button>-1</button>
    </section>
  )
}

export default ItemCounter