<template>
  <div class="listProject">
      <div class="content-page">
          <div class="row contentCenter">
              <!-- <h1>Test</h1> -->
              <div class="searchBox">
                  <table class="table-grid">
                      <tr>
                          <td>
                            <b-form-input 
                            :placeholder="'Project Search ...'"
                            v-model="filter"
                            class="input-search">
                            </b-form-input>
                          </td>
                          <td>
                              <b-button class="icon-search"><font-awesome-icon :icon="['fas', 'search']"/></b-button>
                          </td>
                      </tr>
                  </table>
              </div>
          </div>
          <div class="row margin-btw-content">
              <div class="col">
                  <h4 class="float-left">Project</h4>
              </div>
              <div class="col-3">
                  <router-link :to="{name : 'ProjectAdd' }">
                      <b-button class="w-100 bt-add">+ Add New Project</b-button>
                  </router-link>
              </div>
          </div>
          <div class="row margin-btw-content">
              <div class="col-4" 
                v-for="(project, index) in filteredRows"
                :key="`project-${index}`">
                <router-link :to="{name : 'ProjectDetail' }">
                    <div class="card-project">
                        <table class="table-grid">
                            <tr>
                                <td class="float-left font-head">
                                    {{project.projectName}}
                                </td>
                            </tr>
                            <tr>
                                <td class="float-left font-body">
                                    Project ID : {{project.projectId}}
                                </td>
                            </tr>
                            <tr>
                                <td class="float-left inline-show">
                                    <div class="row px-2">
                                        <div v-for="(owner, i) in project.projectOwners"
                                            :key="`owner-${i}`">
                                            <b-avatar :id="`popover-${index}-${owner.userId}`" :size="30" class="mr-left avatar-color">{{owner.text}}</b-avatar>
                                            <b-popover
                                            :target="`popover-${index}-${owner.userId}`"
                                            :placement="'bottom'"
                                            
                                            triggers="hover focus"
                                            :content="`${owner.userName} ${owner.userLastName}`"
                                            ></b-popover>

                                        </div>
                                        <div v-for="(user, j) in project.userMaintenance"
                                            :key="`user-${j}`">
                                            
                                            <b-avatar :id="`popover2-${index}-${user.userId}`" :size="30" class="mr-left avatar-color">{{user.text}}</b-avatar>
                                            
                                            <b-popover
                                            :target="`popover2-${index}-${user.userId}`"
                                            :placement="'bottom'"
                                            
                                            triggers="hover focus"
                                            :content="`${user.userName} ${user.userLastName}`"
                                            ></b-popover>

                                        </div>
                                    </div>
                                    
                                </td>
                            </tr>
                        </table>
                        
                        <!-- {{project}} -->
                    </div>
                </router-link>
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
                        }
                    ],
                    "userMaintenance" : [
                        {
                            "userId" : "784666115",
                            "userName" : "Ai",
                            "userLastName" : "Kotoba"
                        },
                        {
                            "userId" : "152463258",
                            "userName" : "Game",
                            "userLastName" : "Baka"
                        }
                    ]
                },
                {
                    "projectId" : "111-222-333",
                    "projectName" : "Linkage Project",
                    "projectOwners" : [
                        {
                            "userId" : "109698745",
                            "userName" : "Aristeaz",
                            "userLastName" : "Fa"
                        }
                    ],
                    "userMaintenance" : [
                        {
                            "userId" : "564852369",
                            "userName" : "Pin",
                            "userLastName" : "Wanyen"
                        },
                        {
                            "userId" : "152463258",
                            "userName" : "Game",
                            "userLastName" : "Baka"
                        },
                        {
                            "userId" : "789558512",
                            "userName" : "Test",
                            "userLastName" : "User"
                        }
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
                    ],
                    "userMaintenance" : [
                        {
                            "userId" : "564852369",
                            "userName" : "Pin",
                            "userLastName" : "Wanyen"
                        }
                    ]
                }
            ],
            filter: '',
        }
    },
    beforeMount() {
        this.projects.forEach(project => {
            project.projectOwners.forEach(owner => {
                let text = `${owner.userName[0]}${owner.userLastName[0]}`;
                owner["text"] = text;
            });
            project.userMaintenance.forEach(user => {
                let text = `${user.userName[0]}${user.userLastName[0]}`;
                user["text"] = text;
            });
        });
        console.log(this.projects);
    },
    computed: {
        filteredRows() {
            return this.projects.filter(row => {
            const projectName = row.projectName.toLowerCase();
            const projectId = row.projectId.toString().toLowerCase();
            const searchTerm = this.filter.toLowerCase();

            return projectName.includes(searchTerm) ||
                projectId.includes(searchTerm);
            });
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
    display: inline-block;
    padding: 7px;
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
    padding: 5%;
}
.content-page {
    padding: 5%;
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
.font-body {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: grey;
}
.icon-search {
    background-color: #0077FF;
    color: white;
    border: none;
    border-radius: 50%;
    float: right;
}
.input-search {
    border: none;
    border-radius: 40px;
    width: 100%;
    float: left;
}
.inline-show {
    display: inline-block;
}
.mr-left {
    margin-left: 5px;
}
.avatar-color {
    background-color: #0077FF;
}
</style>