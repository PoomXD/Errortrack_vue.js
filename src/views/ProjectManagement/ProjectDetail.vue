<template>
    <div class="ProjectDetail"> 
        <div id="Edit_Button">
            <router-link :to="{name:'ProjectEdit'}">
            <b-button class="bt-blue float-right" style="width: 90px;" >
            <font-awesome-icon :icon="['fas','edit']"/> Edit</b-button></router-link>
        </div>

        <br>
        <br>
         <div class="card-list row" id="cardlist">
             <div class="col-xl-6 col-md-6 col-sm-5" style="margin-top:-2%">
                <div class="row">
                    <div id="Topic" class="col-xl-4 col-md-5 font-gen" 
                    :class="{'move':mobileView}" style="font-weight: bold" align="right">Project ID  : </div>
                    <div class="col-xl-6 col-md-7 font-detail" align="left">{{Project_ID}} </div>
                </div> 
                <div class="row" style="margin-top:1%">
                    <div id="Topic" class="col-xl-4 col-md-5 font-gen" 
                    :class="{'move':mobileView}" style="font-weight: bold; margin-bottom:3%" align="right">Project Details  : </div>
                    <div class="col-xl-6 col-md-7 font-detail" 
                    :class="{'go_up':mobileView}" align="left" style="margin-bottom:3%;">{{Project_Detail}} </div>
                </div>
             </div>
             <div class="col-xl-6 col-md-6 col-sm-7 " style="margin-top:-2%">
                <div class="row">
                    <div id="Topic" class="col-xl-4 col-md-5 font-gen" 
                    :class="{'move':mobileView}" style="font-weight: bold" align="right">Project Name  : </div>
                    <div class="col-xl-5 col-md-7 font-detail" align="left">{{Project_Name}} </div>
                </div>
                <div class="row" style="margin-top:2%">
                    <div id="Topic" class="col-xl-4 col-md-5 font-gen" 
                    :class="{'move':mobileView}" style="font-weight: bold" align="right">Project Owner  : </div>
                    <div class="col-xl-8 col-md-7 font-detail" align="left">
                    <tr v-for="(Project_Owner, index) in Project_Owner" :key="`Project_Owner-${index}`">
                    <td>{{ [Project_Owner].sort().join(',') }}</td>
                    </tr>
                    </div>
                </div>
                <div class="row" style="margin-top:2%">
                    <div id="Topic" class="col-xl-4 col-md-5 font-gen" 
                    :class="{'move':mobileView}" style="font-weight: bold" align="right">Member  :</div>
                    <div class="col-xl-5 col-md-7 font-detail" align="left"> 
                    <tr v-for="(Member, index) in Member" :key="`Member-${index}`">
                    <td>{{Member.name}}</td>
                    </tr>
                    </div>
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
                    <router-link :to="{name:'TaskError'}" style="text-decoration: underline">{{ data.item.Service_ID}}</router-link>
                 </template>
           </b-table>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"ProjectDetail",
    created(){
        this.handleView();
        window.addEventListener('resize', this.handleView);
        if(this.$route.meta.showEdit == false){
            this.Member = this.User_Maintenance
        };
        
    },
    mounted(){
    this.$store.dispatch("header/setAllLinkHeader", "ProjectDetail");
    if(this.$route.meta.showEdit == false){
            document.getElementById("search").style.marginTop = "0%";
            document.getElementById("Edit_Button").style.display = "none";
            document.getElementById("cardlist").style.marginTop = "-3%";
    }
    },
    data(){
        return{
            mobileView: true,
            keyword: '',
            fields: [{key:'No',thStyle: {width: '5%'}},
                     {key:'Service_ID',thStyle: {width: '20%'}},
                     {key:'Service_Name',thStyle: {width: '65%'}},
                    //  {key:' ',thStyle: {width: '35%'}},
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
            Project_Detail:"Detail Detail Detail",
            Project_Name:"Covid 19 Airports Project",
            Project_Owner:{Owner : ['firstname lastname ','firstname lastname ']},
            Member:[{name : 'name_lastname'},{name : 'name_lastname'},{name : 'name_lastname'},{name : 'name_lastname'}],
            User_Maintenance:[{name : "xxx-xxxx-xxxx-xxx"}], 
        }
    },
    computed: {
		items () {
			return this.keyword
                ? this.dataArray.filter(item => 
                item.Service_ID.includes(this.keyword)||
                item.Service_Name.includes(this.keyword))
				: this.dataArray
    },
},
methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 770
    },
  },
}
</script>

<style scoped>
.ProjectDetail{
    padding: 1rem;
    }
  #search{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 20px;
    background: #fff; 
    width: 350px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: -4%;
    }
  #ServiceSearch{
    border: 1px solid rgb(255, 255, 255);
    width: 300px;
    border-radius: 20px;
    background: #fff;
    outline: -webkit-focus-ring-color auto 0px;
  }
  #icon{
      margin: 1px;
      border-radius: 100%;
  }
  .move {
    text-align: left;
    margin-top: 3%;
  }
  .go_up{
    margin-top: -3%;
  }


</style>