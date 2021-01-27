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
        <div class="row" align="right">
            <div class="col-2" style="font-weight: bold">Project ID  :</div>
            <div class="col-6" style="font-weight: bold">Project Name  :</div>
        </div>
            <br>   
        <div class="row" align="right">
            <div class="col-2" style="font-weight: bold">Project Details  :</div>
            <div class="col-6" style="font-weight: bold">Project Owner  :</div>
        </div>
           <br>
        <div class="row" align="right">
            <div class="col-8" style="font-weight: bold">Member  :</div>
        </div>
        </div>

        <br>
        <div id="search">
            <table>
                <tr>
                <td><input class="form-control" id="ServiceSearch" type="text" placeholder="Service Search"></td>
                <td><b-button variant="primary" id="icon"><font-awesome-icon :icon="['fas', 'search']"/></b-button></td>
                </tr>
            </table>
        </div>
        <div class="row" id="ServiceTable">
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"ProjectDetail",
    data(){
        return{
            fields:['No','Serivce_ID','Service_Name','Create_Date'],
            items: [{No: 1, Serivce_ID: '123-456-789', Service_Name: 'Name Servicename',Create_Date: '11-12-2563'},
                    {No: 2, Serivce_ID: '123-456-789', Service_Name: 'Name Servicename',Create_Date: '11-12-2563'}]
        }
    }
}
</script>

<style scoped>
  #Edit{
      margin-left: 91.5%;
      width: 120px;
  }
  #icon{
      margin-top: 5px;
      margin-right: 78%;
  }
  #search{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 20px;
    background: #fff; 
    width: 400px;
    }
  #ServiceSearch{
    border: 1px solid rgb(255, 255, 255);
    width: 350px;
    border-radius: 20px;
    background: #fff;
  }
  #ServiceTable{
    margin-top: 3%;
    background-color: #fff;
    
  }
  #Detail{
    border: 1px solid rgb(174, 199, 255);
    border-radius: 10px;
    background: #fff;
    height: 250px;
    box-shadow: black;
  }
  #icon{
      border: 1px solid rgb(255, 255, 255);
      border-radius: 50%;
      margin: 1px;
  }
  .td{
      font-weight: bold;
  }
  
</style>