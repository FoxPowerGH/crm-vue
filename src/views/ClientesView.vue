<script setup>
    import RouterLink from '@/components/UI/RouterLink.vue';

    defineProps({
        titulo: {
            type: String
        }
    })

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        <h2 class="text-4xl font-extrabold text-slate-500">{{titulo}}</h2>
    </div>
    

</template>