export default{
    name:"DashboardComponent",

    mounted() {
        onAuthStateChanged(auth, async(user)=>{
            if(!user) return this.store.dispatch("user/logout");

            await this.store.dispatch('user/login', {
                email: this.email,
                password: this.password
            })
        });
    },
}