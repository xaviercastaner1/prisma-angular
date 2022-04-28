const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', (req, res)=> {
    res.send('Hello World')
})

//Crear un registro
app.post(`/product`, async(req, res)=>{
    const { name, description, category } = req.body
    const result = await prisma.product.create({
        data: {
            name, description, category
        }
    })
    res.json(result)
})

//Mostrar todos los registros
app.get(`/products`, async(req, res)=>{
    const products = await prisma.product.findMany()
    res.json(products)
})


//Mostrar un solo registro
app.get(`/product/:id`, async (req, res) => {
    const { id } = req.params
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        },
    })
    res.json(product)
})


//Actualizar un registro
app.put(`/product/:id`, async(req, res)=>{
    const {id} = req.params
    const { name, description, category } = req.body
    const product = await prisma.product.update({
        where: {id: Number(id)},
        data: { name, description, category }
    })
    res.json(product)
})


//Eliminar un registro
app.delete(`/product/:id`, async(req, res)=>{
    const {id} = req.params
    const product = await prisma.product.delete({
        where: {id: Number(id)}
    })
    res.json(product, 'Eliminado')
})




//Crear un registro
app.post(`/category`, async (req, res) => {
    const { name } = req.body
    const result = await prisma.category.create({
        data: {
            name
        }
    })
    res.json(result)
})

//Mostrar todos los registros
app.get(`/categories`, async (req, res) => {
    const categories = await prisma.category.findMany()
    res.json(categories)
})


//Mostrar un solo registro
app.get(`/category/:id`, async (req, res) => {
    const { id } = req.params
    const category = await prisma.category.findUnique({
        where: {
            id: Number(id)
        },
    })
    res.json(category)
})


//Actualizar un registro
app.put(`/category/:id`, async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const category = await prisma.category.update({
        where: { id: Number(id) },
        data: { name }
    })
    res.json(category)
})


//Eliminar un registro
app.delete(`/category/:id`, async (req, res) => {
    const { id } = req.params
    const category = await prisma.category.delete({
        where: { id: Number(id) }
    })
    res.json(category, 'Eliminado')
})



app.listen(3000, ()=>
    console.log(`Server ready at: htt://localhost:3000`)
)