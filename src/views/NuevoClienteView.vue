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
        <RouterLink to="inicio">
                Volver
        </RouterLink>
    </div>
    
    <h2 class="text-4xl font-extrabold text-slate-500">Agregar Cliente</h2>
</div>


</template>