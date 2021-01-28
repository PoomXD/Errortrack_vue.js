<template>
    <div class="ProjectDetail"> 
        <div>
            <router-link :to="{name:'ProjectEdit'}">
            <b-button class="bt-blue float-right" style="width: 90px" >
            <font-awesome-icon :icon="['fas','edit']"/> Edit</b-button></router-link>
        </div>

        <br>
        <br>
         <div id="Detail">
         <br>
        <div class="row">
            <div class="col-2 font-gen" style="font-weight: bold" align="right">Project ID  : </div>
            <div class="col-2 font-detail" align="left">{{Project_ID}} </div>
            <div class="col-4 font-gen" style="font-weight: bold" align="right">Project Name  : </div>
            <div class="col-2 font-detail" align="left">{{Project_Name}} </div>
        </div>
            <br>   
        <div class="row">
            <div class="col-2 font-gen" style="font-weight: bold" align="right">Project Details  : </div>
            <div class="col-2 font-detail" align="left">{{Project_Detail}} </div>
            <div class="col-4 font-gen" style="font-weight: bold" align="right">Project Owner  :</div>
            <div class="col-2 font-detail" align="left">{{Project_Owner}} </div>
        </div>
           <br>
        <div class="row">
            <div class="col-8 font-gen" style="font-weight: bold" align="right">Member  :</div>
            <div class="col-2 font-detail" align="left">
            <tr v-for="(Member, index) in Member" :key="`Member-${index}`">
                <td>{{ Member.name}}</td>
            </tr>
            </div>
        </div>
        </div> 

        <br>
        <div id="search">
            <table>
                <tr>
                <td><input id="ServiceSearch" type="text" placeholder=" Service Search" v-model="keyword"></td>
                <td><b-button variant="primary" id="icon"><font-awesome-icon :icon="['fas', 'search']"/></b-button></td>
                </tr>
            </table>
        </div>
        <br>
        <div class="row table-box" id="ServiceTable">
           <b-table class="table-color" striped hover :items="items" :fields="fields" :keyword="keyword">
                <template v-slot:cell(Service_ID)="data">
                    <router-link :to="{name:'Monitor'}" style="text-decoration: underline">{{ data.item.Service_ID}}</router-link>
                 </template>
           </b-table>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"ProjectDetail",
    data(){
        return{
            keyword: '',
            fields: [{key:'No',thStyle: {width: '5%'}},
                     {key:'Service_ID',thStyle: {width: '20%'}},
                     {key:'Service_Name',thStyle: {width: '30%'}},
                     {key:' ',thStyle: {width: '35%'}},
                     {key:'Create_Date',thStyle: {width: '10%',}}],
            dataArray: [
                        {No: 1, Service_ID: '123-456-789', Service_Name: 'Name Servicename1',Create_Date: '11-12-2563'},
                        {No: 2, Service_ID: '987-654-321', Service_Name: 'Name Servicename2',Create_Date: '11-12-2563'},
                        {No: 3, Service_ID: '123-456-789', Service_Name: 'Name Servicename3',Create_Date: '11-12-2563'},
                        {No: 4, Service_ID: '123-456-789', Service_Name: 'Name Servicename4',Create_Date: '11-12-2563'},
                        {No: 5, Service_ID: '987-654-321', Service_Name: 'Name Servicename5',Create_Date: '11-12-2563'},
                        {No: 6, Service_ID: '987-654-321', Service_Name: 'Name Servicename6',Create_Date: '11-12-2563'},
                       ],
            Project_ID:"xxx-xxxx-xxxx-xxx",
            Project_Detail:"Detail",
            Project_Name:"Covid 19 Airports Project",
            Project_Owner:"firstname lastname",
            Member:[{name : 'name_lastname'},{name : 'name_lastname'},{name : 'name_lastname'},{name : 'name_lastname'}],  
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
  #search{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 20px;
    background: #fff; 
    width: 400px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  #ServiceSearch{
    border: 1px solid rgb(255, 255, 255);
    width: 350px;
    border-radius: 20px;
    background: #fff;
  }
  #Detail{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 10px;
    background: #fff;
    height: 250px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  #icon{
      margin: 1px;
      border-radius: 100%;
  }



</style>