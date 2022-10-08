<template>
    <div id="contenido">
        <h1>Registrate</h1>
        <h2>Registrate para obtener beneficios</h2>
        <form @submit.prevent="Register()">
            <div id="row-form">
                <div id="colum-form">
                    <h3>Nombre Completo</h3>
                    <input />
                </div>
                <div id="colum-form">
                    <h3>Direccion</h3>
                    <input />
                </div>
            </div>
            <div id="row-form">
                <div id="colum-form">
                    <h3>Correo electronico</h3>
                    <input type="email" id="email" name="email" v-model="email" />
                </div>
                <div id="colum-form">
                    <h3>Numero de contacto</h3>
                    <input />
                </div>
            </div>
            <div id="row-form">
                <div id="colum-form">
                    <h3>Contraseña</h3>
                    <input type="password" id="password" name="password" v-model="password" />
                </div>
                <div id="colum-form">
                    <h3>Confirma tu contraseña</h3>
                    <input />
                </div>
            </div>
            <div id="izq">

                <button id="retro" @click="registro">Cancelar</button>
                <button id="ir" type="submit">Registrarse</button>
            </div>
        </form>
    </div>
</template>

<script>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            password: '',
            error: null,
            store: useStore(),
            router: useRouter(),
        }
    },
    methods: {
        async Register() {
            try {
                await this.store.dispatch('user/Register', {
                    email: this.email,
                    password: this.password
                })
                this.router.push('/ingreso')
                this.$swal({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#a5dc86',
                    icon: 'success',
                    title: 'Usuario registrado'

                });

            }
            catch (err) {
                this.error = err.message
                console.log(this.error)
                this.$swal({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#f27474',
                    icon: 'error',
                    title: 'Registro no realizado'

                });
            }
        },
        registro() {
            this.router.push('/ingreso')
        }

    }
}
</script>

<style>
div#row-form {

    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

div#colum-form {
    display: flex;
    flex-direction: column;
    width: 45%;
}
</style>