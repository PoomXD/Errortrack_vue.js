<template>
    <div class="ProjectDetail col"> 
        <div class="row">
            <b-button id="Edit" variant="primary" >
            <font-awesome-icon :icon="['fas','edit']"/>
             Edit</b-button>
        </div>
        <br>
         <div id="Detail">
         <br>
        <div class="row">
            <div class="col-2" style="font-weight: bold" align="right">Project ID  : </div>
            <div class="col-2" style="font-weight: bold" align="left">{{Project_ID}} </div>
            <div class="col-4" style="font-weight: bold" align="right">Project Name  : </div>
            <div class="col-2" style="font-weight: bold" align="left">{{Project_Name}} </div>
        </div>
            <br>   
        <div class="row">
            <div class="col-2" style="font-weight: bold" align="right">Project Details  : </div>
            <div class="col-2" style="font-weight: bold" align="left">{{Project_Detail}} </div>
            <div class="col-4" style="font-weight: bold" align="right">Project Owner  :</div>
            <div class="col-2" style="font-weight: bold" align="left">{{Project_Owner}} </div>
        </div>
           <br>
        <div class="row">
            <div class="col-8" style="font-weight: bold" align="right">Member  :</div>
            <div class="col-2" style="font-weight: bold" align="left">{{Member}}</div>
        </div>
        </div> 

        <br>
        <div id="search">
            <table>
                <tr>
                <td><input id="ServiceSearch" type="text" placeholder="Service Search" v-model="keyword"></td>
                <td><b-button variant="primary" id="icon"><font-awesome-icon :icon="['fas', 'search']"/></b-button></td>
                </tr>
            </table>
        </div>
        <div class="row" id="ServiceTable">
           <b-table striped hover :items="items" :fields="fields" :keyword="keyword"></b-table>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"ProjectDetail",
    data(){
        return{
            keyword: '',
            fields: ['No', 'Service_ID', 'Service_Name','Create_Date'],
            dataArray: [
                        {No: 1, Service_ID: '123-456-789', Service_Name: 'Name Servicename',Create_Date: '11-12-2563'},
                        {No: 2, Service_ID: '987-654-321', Service_Name: 'Name Servicename',Create_Date: '11-12-2563'},
                        {No: 3, Service_ID: '123-456-789', Service_Name: 'Name Servicename',Create_Date: '11-12-2563'},
                        {No: 4, Service_ID: '987-654-321', Service_Name: 'Name Servicename',Create_Date: '11-12-2563'}
                       ],
            Project_ID:"xxx-xxxx-xxxx-xxx",
            Project_Detail:"Detail",
            Project_Name:"name",
            Project_Owner:"name lastname",
            Member:["name_lastname","name_lastname","name_lastname","name_lastname"] ,  
        }
    },
    computed: {
		items () {
			return this.keyword
                ? this.dataArray.filter(item => 
                item.Service_ID.includes(this.keyword)||
                item.Service_Name.includes(this.keyword))
				: this.dataArray
    }
}
}
</script>

<style scoped>
  #Edit{
      margin-left: 91.5%;
      width: 120px;
  }
  #search{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 20px;
    background: #fff; 
    width: 400px;
    box-shadow: 3px 3px 5px rgb(200, 200, 200);
    }
  #ServiceSearch{
    border: 1px solid rgb(255, 255, 255);
    width: 350px;
    border-radius: 20px;
    background: #fff;
  }
  #ServiceTable{
    margin-top: 1%;
    background-color: #fff;
    
  }
  #Detail{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 10px;
    background: #fff;
    height: 250px;
    box-shadow: 5px 5px 5px rgb(200, 200, 200);
  }
  #icon{
      border: 1px solid rgb(255, 255, 255);
      border-radius: 100%;
      margin: 1px;
  }
  .td{
      font-weight: bold;
  }
  
</style>