<script setup>
        import { FormKit } from '@formkit/vue';
        import { useRouter } from 'vue-router';
        import ClienteService from '../services/ClienteService';
        import RouterLink from '@/components/UI/RouterLink.vue';


        const router = useRouter()
        
        defineProps({
            titulo: {
                type: String
            }
        })

        const handleSubmit = (data) => {
            data.estado = 1
            ClienteService.agregarCliente(data)
                .then(respuesta => {
                    // console.log(respuesta)
                    // Redireccionar
                    router.push({ name: 'listado-clientes' })
                })
                .catch(error => console.log(error))
        }

</script>

<template>

<div>
    <div class="flex justify-end">
        <RouterLink to="listado-clientes">
                Volver
        </RouterLink>
    </div>
    
    <h2 class="text-4xl font-extrabold text-slate-500">Agregar Cliente</h2>

    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w2/3 py-20 px-6">
            <FormKit
                type="form"
                submit-label="Agregar Cliente"
                incomplete-message="No se pudo enviar, revisar los mensajes"
                @submit="handleSubmit"
            >
                <FormKit
                    type="text"
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre del Cliente"
                    validation="required"
                    :validation-messages="{ required: 'El Nombre es obligatorio'}"
                />            

                <FormKit
                    type="text"
                    label="Apellido"
                    name="apellido"
                    placeholder="Apellido del Cliente"
                    validation="required"
                    :validation-messages="{ required: 'El Apellido es obligatorio'}"
                />            

                <FormKit
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Email del Cliente"
                    validation="required|email"
                    :validation-messages="{ required: 'El Email es obligatorio',
                        email: 'Coloca un email válido' }"
                />  

                <FormKit
                    type="text"
                    label="Teléfono"
                    name="telefono"
                    placeholder="Teléfono: XXX-XXX-XXXX"
                    validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ matches: 'El Formato no es válido'
                    }"
                />  

                <FormKit
                    type="text"
                    label="Empresa"
                    name="empresa"
                    placeholder="Empresa del Cliente"
                />  
                
                <FormKit
                    type="text"
                    label="Cargo"
                    name="cargo"
                    placeholder="Cargo del Cliente"
                />  

            </FormKit>
        </div>
    </div>


</div>


</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>