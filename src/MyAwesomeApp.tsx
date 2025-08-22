import type { CSSProperties } from "react";

export function MyAwesomeApp() {

    const name = 'José Dario';
    const surname = 'Tovar Rodríguez';
    const favoritesGames = ['Counter Strike', 'Call of Duty', 'League of Legends'];
    const isActive = true;

    const  address = {
        street: 'Calle 123',
        number: 456,
        city: 'Ciudad Ejemplo',
        country: 'País Ejemplo'
    }

    const myStyles: CSSProperties = {
        color: 'blue',
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '20px' 
    }

    return(
        <>
            <h1>{name}</h1>
            <h3>{surname}</h3>
            <p> {favoritesGames.join(', ')}</p>

            <h1>{isActive ? 'Active' : 'No activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>    
    )
}