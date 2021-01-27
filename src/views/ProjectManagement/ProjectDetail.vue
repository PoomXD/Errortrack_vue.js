<template>
    <div class="ProjectDetail col"> 
        <div class="row">
            <b-button id="Edit" variant="primary" >Edit</b-button>
        </div>
        <br>

        <div id="Detail">
            <br>
        <div class="row" align="right">
            <div class="col-2">Project ID  :</div>
            <div class="col-6">Project Name  :</div>
        </div>
            <br>   
        <div class="row" align="right">
            <div class="col-2">Project Details  :</div>
            <div class="col-6">Project Owner  :</div>
        </div>
           <br>
        <div class="row" align="right">
            <div class="col-8">Member  :</div>
        </div>
        </div>

        <br>
        <div class="row">
            <input class="form-control col-3" id="ServiceSearch" type="text" placeholder="Service Search" rounded size="sm">
        </div>
        <div class="row" id="ServiceTable">
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
        <font-awesome-icon :icon="['fas', 'search']"/>
    </div>
</template>

<script>
export default {
    name:"ProjectDetail",
    data(){
        return{
            fields:['No','Serivce ID','Service Name','Create Date'],
            item: []
        }
    }
}
</script>

<style scoped>
  #Edit{
      margin-left: 97%;
  }
  #ServiceSearch{
    position: absolute;
    z-index: 10;
    margin-top: 1%;
    border: 1px solid rgb(174, 199, 255);
    border-radius: 20px;
    
  }
  #ServiceTable{
    margin-top: 5%;
    background-color: #fff;
    
  }
  #Detail{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 10px;
    background: #fff;
    height: 250px;
   
  }
  .td{
     text-align: right; 
  }
  
</style>