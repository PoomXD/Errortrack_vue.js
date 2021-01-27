<template>
  <div class="listProject">
      <div class="content-page">
          <div class="row contentCenter">
              <!-- <h1>Test</h1> -->
              <b-form-input 
              :id="searchBar" 
              :type="text"
              :placeholder="'Project Search ...'"
              class="searchBox">
              </b-form-input>
          </div>
          <div class="row margin-btw-content">
              <div class="col">
                  <h4 class="float-left">Project</h4>
              </div>
              <div class="col-3">
                  <b-button class="w-100 bt-add">+ Add New Project</b-button>
              </div>
          </div>
          <div class="row margin-btw-content">
              <div class="col-4" 
                v-for="project in projects"
                :key="project">
                <div class="card-project">
                    <table class="table-grid">
                        <tr>
                            <td class="float-left font-head">
                                {{project.projectName}}
                            </td>
                            <td class="float-right">
                                <button class="bt-invisible"><font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']"/></button>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- {{project}} -->
                </div>
              </div>
               
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: "list-project",
    data () {
        return {
            projects: [
                {
                    "projectId" : "111-111-111",
                    "projectName" : "Covid 19 Airport Project",
                    "projectOwners" : [{
                            "userId" : "123456789",
                            "userName" : "Zala",
                            "userLastName" : "Pao"
                        },
                        {
                            "userId" : "152463258",
                            "userName" : "Game",
                            "userLastName" : "Baka"
                        },
                        {
                            "userId" : "784666115",
                            "userName" : "Ai",
                            "userLastName" : "Kotoba"
                        },
                    ]
                },
                {
                    "projectId" : "111-222-333",
                    "projectName" : "Linkage Project",
                    "projectOwners" : [{
                            "userId" : "123456789",
                            "userName" : "Zala",
                            "userLastName" : "Pao"
                        },
                        {
                            "userId" : "109698745",
                            "userName" : "Aristeaz",
                            "userLastName" : "Fa"
                        },
                    ]
                },
                {
                    "projectId" : "452-125-488",
                    "projectName" : "Error Tracking",
                    "projectOwners" : [{
                            "userId" : "109698745",
                            "userName" : "Aristeaz",
                            "userLastName" : "Fa"
                        },
                        {
                            "userId" : "152463258",
                            "userName" : "Game",
                            "userLastName" : "Baka"
                        },
                        {
                            "userId" : "784666115",
                            "userName" : "Ai",
                            "userLastName" : "Kotoba"
                        },
                        {
                            "userId" : "125488563",
                            "userName" : "Poom",
                            "userLastName" : "Khabbbb"
                        },
                    ]
                }
            ]
        }
    },
}
</script>

<style>
.searchBox {
    background: #FFFFFF;
    border: 0.75px solid #BACFE7;
    box-sizing: border-box;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 32.5px;
    width: 40%;
}
.contentCenter {
    justify-content: center;
}
.margin-btw-content{
    margin-top: 2%;
}
.float-left {
    /* float: left; */
    justify-content: left;
}
.float-right {
    /* float: left; */
    justify-content: right;
}
.card-project {
    background: #FFFFFF;
    border: 0.5px solid #BACFE7;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 3%;
}
.content-page {
    padding: 3%;
}

.bt-add {
    background: #0077FF;
    border-radius: 6px;
}
.font-head {
    /* font-family: Prompt; */
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: #000000;
}
.table-grid {
    width: 100%;
}
.bt-invisible {
    background-color: transparent;
    color: #000000;
    border: none;
}
</style>