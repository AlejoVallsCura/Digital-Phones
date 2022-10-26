//Función auxiliar para generar la orden.
const ordenGenerada = (login, email, tel, cart) => {
    return {
        buyer: {
            nombre: login,
            email: email,
            telefono: tel,
        },
        items: cart
        ,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;