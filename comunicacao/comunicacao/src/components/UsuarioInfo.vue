<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button> <!-- comunicação filho/pai $emit -->
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button> <!-- comunicação filho/pai callback -->
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            // required: true
            default: 'Anonimo'
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    },
        created() {
            barramento.quandoIdadeMudar(idade => {
                this.idade = idade
            }) //qual evento eu quero escutar? + função callback
        }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
