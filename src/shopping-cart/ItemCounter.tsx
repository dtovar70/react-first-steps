interface Props {
    name: string;
    quantity?: number;
}

const ItemCounter = ({name, quantity}: Props) => {

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
          {name}
        </span>
        <button> +1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}

export default ItemCounter