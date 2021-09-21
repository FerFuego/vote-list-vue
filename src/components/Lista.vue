<template>
    <div class="container mb-5">
        <ul class="list-group">
            <li 
                v-for="(tecno, index) in tecnologies"
                :key="tecno.index"
                @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{tecno.name}} <a v-bind:href="(tecno.url)" target="_blank" class="text-default">{{ tecno.url }}</a>
                <span class="badge bg-primary rounded-pill">{{ tecno.cant }}</span>
            </li>
        </ul> 
        <button class="btn btn-primary btn-xs mt-2 w-100" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
    name: 'Lista',
    computed: {
        ...mapState(['tecnologies'])
    },
    methods: {
        ...mapMutations(['aumentar','reiniciar'])
    }
}
</script>
