<template>
    <div>
        <p>componente de menasgem</p>
        <div id="burger-form-container">
            <form id="burger-form" @submit="createBurger">
                <div class="imput-container">
                    <label for="name">Client name</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Type your name">
                </div>
                <div class="imput-container">
                    <label for="bread">Choose your bread</label>
                    <select name="bread" id="bread" v-model="bread">
                        <option value="">Select your bread</option>
                        
                        <option v-for="bread in breads" :key="bread.id" :value="bread.type">
                            {{ bread.type }}
                        </option>
                    </select>
                </div>
                <div class="imput-container">
                    <label for="meat">Choose your meat</label>
                    <select name="meat" id="meat" v-model="meat">
                        <option value="">Select your meat</option>
                        
                        <option v-for="meat in meats" :key="meat.id" :value="meat.type">
                            {{ meat.type }}
                        </option>
                    </select>
                </div>
                <div id="options-container" class="input-container">
                    <label id="options-title" for="options">Choose the ingredients:</label>
                    <div class="checkbox-container" v-for="option in optionsdata" :key="option.id">
                    <input type="checkbox" name="options" v-model="options" :value="option.type">
                    <span>{{ option.type }}</span>
                </div>

                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Build my burger!">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "BurgerForm",
    data(){
        return{
//data from server
            breads: null,
            meats: null,
            optionsdata: null,
//data to server
            name: null,
            bread: null,
            meat: null,
            options: [],
            msg: null
        }
    },
    methods:{
        async getIngredients(){

            const req = await fetch('http://localhost:3000/ingredients')
            const data = await req.json()

            this.breads = data.breads
            this.meats = data.meats
            this.optionsdata = data.options
        },
        async createBurger(e){
            e.preventDefault()

            const data = {
                name: this.name,
                bread: this.bread,
                meat: this.meat,
                options: Array.from(this.options),
                status: "Requested"
            }
            const dataJson = JSON.stringify(data)//transformar em texto

            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });//POSTAR no banco
            const res = await req.json()
            
            //colocar mensagem

            //apagar mensagem
            
            //limpar campos
            this.name = ""
            this.meat = ""
            this.bread = ""
            this.options = ""

            }
    },
    mounted(){
        this.getIngredients()
    }
}
</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label{
        font-weight: bold;
        margin-top: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
        display: block;
    }

    #name,select{
        padding: 5px 10px;
        width: 300px;
    }


    #options-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #options-title{
        width: 100%;
    }
    .checkbox-container{
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }
    .checkbox-container span, .checkbox-container span{
        width: auto;
    }
    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }
    .submit-btn{
        background: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover{
        background: transparent;
        color: #222;
    }

</style>