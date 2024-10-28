
const products = [
    {
        id: "1",
        nombre: "balancin",
        imagen: "../public/balancin.jpg",
        material: "madera",
        color: "multicolor",
        montessori: true,
        precio: 50000
    },
    {
        id: "2",
        nombre: "torre de aprendizaje",
        imagen: "../public/torre-aprendizaje.jpg",
        material: "madera",
        color: "marron",
        montessori: true,
        precio: 50000
    },
    {
        id: "3",
        nombre: "tobogan",
        imagen: "../public/tobogan.jpg",
        material: "madera",
        color: "celeste",
        montessori: false,
        precio: 40000
    },
    {
        id: "4",
        nombre: "sube y baja",
        imagen: "../public/sube-baja.jpg",
        material: "madera",
        color: "multicolor",
        montessori: false,
        precio: 40000
    },
    {
        id: "5",
        nombre: "rampa",
        imagen: "../public/rampa.png",
        material: "madera",
        color: "multicolor",
        montessori: true,
        precio: 50000
    },
    {
        id: "6",
        nombre: "juguete de arrastre",
        imagen: "../public/juguete-arrastre.jpg",
        material: "madera",
        color: "verde",
        montessori: false,
        precio: 40000
    },
    {
        id: "7",
        nombre: "pata pata",
        imagen: "../public/pata-pata.jpg",
        material: "madera",
        color: "multicolor",
        montessori: true,
        precio: 45000
    },
    {
        id: "8",
        nombre: "hamaca",
        imagen: "../public/hamaca.jpeg",
        material: "madera",
        color: "multicolor",
        montessori: false,
        precio: 20000
    }
    ]

const getProducts = () => {
    return new Promise ((resolve,reject) => {
        //simulador retraso de red
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
    }

export {getProducts}