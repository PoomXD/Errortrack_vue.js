<template>
    <div class="ProjectDetail"> 
        <br>
         <div class="card-list row" style="margin-top:-2%">
             <div class="col-6" style="margin-top:-2%">
                <div class="row">
                    <div class="col-4 font-gen" style="font-weight: bold" align="right">Project ID  : </div>
                    <div class="col-6 font-detail" align="left">{{Project_ID}} </div>
                </div>
                <div class="row" style="margin-top:2%">
                    <div class="col-4 font-gen" style="font-weight: bold" align="right">Project Details  : </div>
                    <div class="col-6 font-detail" align="left">{{Project_Detail}} </div>
                </div>
             </div>
             <div class="col-6" style="margin-top:-2%">
                <div class="row">
                    <div class="col-4 font-gen" style="font-weight: bold" align="right">Project Name  : </div>
                    <div class="col-5 font-detail" align="left">{{Project_Name}} </div>
                </div>
                <div class="row" style="margin-top:2%">
                    <div class="col-4 font-gen" style="font-weight: bold" align="right">Project Owner  : </div>
                    <div class="col-8 font-detail" align="left">
                    <tr v-for="(Project_Owner, index) in Project_Owner" :key="`Project_Owner-${index}`">
                    <td>{{ [Project_Owner].sort().join(',') }}</td>
                    </tr>
                </div>
                </div>
                <div class="row" style="margin-top:2%">
                    <div class="col-4 font-gen" style="font-weight: bold" align="right">Member  :</div>
                    <div class="col-5 font-detail" align="left">{{User_Maintenance}}</div>
                </div>
             </div>
        </div> 

        <div id="search" style="margin-top:5%;">
            <table>
                <tr>
                    <td><input id="ServiceSearch" type="text" placeholder=" Service Search" v-model="keyword"></td>
                    <td><b-button class="icon-search" variant="primary"><font-awesome-icon :icon="['fas', 'search']"/></b-button></td>
                </tr>
            </table>
        </div>
        <div class="row table-box" id="ServiceTable" style="margin-top:1%">
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
    mounted(){
        let listlink = [
        {
          name: "Project Managemant",
          url: "../project/list",
        },
        {
            name: "Project Detail",
            url:"#"
        },
      ];
    this.$store.dispatch("setAllLinkHeader", listlink);
    },
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
            Project_Detail:"Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail",
            Project_Name:"Covid 19 Airports Project",
            Project_Owner:{Owner : ['firstname lastname','firstname lastname']},
            User_Maintenance:"xxx-xxxx-xxxx-xxx",  
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
    border: 1px solid rgb(181, 197, 220);
    border-radius: 20px;
    background: #fff; 
    width: 380px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  #ServiceSearch{
    border: 1px solid rgb(255, 255, 255);
    width: 323px;
    margin: 5px;
    border-radius: 20px;
    background: #fff;
    outline: -webkit-focus-ring-color auto 0px;
  }
</style>