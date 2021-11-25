<template>
    <div class="list-contianer">
        <h1>Medal Race</h1>
        <div v-for="(item,index) in  renderData" :key="index">
            <div class="item">
                <div :style="{width:'5%'}"> index+1</div>
                <div :style="{width:'10%'}">{{item.name}}:</div>
                <div class="item-content-container">
                    <div class="item-content"
                     :style="{width:`${item.total/maxWidth}%`}"
                >
                        <div 
                        class="item-content-item" 
                        :style="{width:`${item.field1/item.total}%`,borderLeftRaduis:'50%',textAlign:'center'}">
                        {{item.field1}}
                        </div>
                        <div 
                        class="item-content-item" 
                        :style="{width:`${item.field2/item.total}%`,textAlign:'center'}">
                        {{item.field2}}
                        </div>
                        <div 
                        class="item-content-item" 
                        :style="{width:`${item.field3/item.total}%`,borderRightRaduis:'50%',textAlign:'center'}">
                        {{item.field3}}
                        </div>
                    </div>
                </div>
                <div class="item-total" >{{item.total}}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'list',
    props:{
        data:{
            type:Array,
        }
    },
    computed:{
        renderData(){
            return this.data.map(el=>
            ({name:el[0],
            field1:el[1],
            field2:el[2],
            field3:el[3],
            total:el[1]+el[2]+el[3]}))
        },
        maxWidth(){
            return Math.max(this.renderData(el=>el.total))
        }
    },
    methods: {
        
    },


}
</script>

<style scoped>
.item{
    position: relative;
    display: flex;
    width:100%;
}
.item-content{
    display: flex;
    flex-wrap: nowrap;
}
.item-content-container{
    display: flex;
    flex:1 1 auto;
    width:80%;
}
.item-total{
    float: right;
    overflow: hidden;
    width: 5%;
}
</style>