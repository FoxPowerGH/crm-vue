import api from "../lib/axios";

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente(data){
        return api.post('/clientes', data)
    },
    buscarCliente(id){
        return api.get('clientes/'+ id)
    },
    actualizrCliente(id, data){
        return api.patch('/clientes/'+id, data)
    },
    cambiarEstado(id, data) {
        return api.patch('/clientes/'+id, data)
    },
    eliminarCliente(id){
        console.log(id)
        return api.delete('/clientes/'+id)
    }
}