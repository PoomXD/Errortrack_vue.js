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
                            class="input-search font-no-size-color">
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
                  <h4 class="float-left font-no-size-color">Projects</h4>
              </div>
              <div class="col-2">
                  <router-link :to="{name : 'ProjectAdd' }">
                      <b-button class="w-100 bt-blue font-no-size-color"><font-awesome-icon :icon="['fas', 'plus']"/>  Add New Project</b-button>
                  </router-link>
              </div>
          </div>
          <div class="row margin-btw-content">
              <div class="col-4" 
                v-for="(project, index) in filteredRows"
                :key="`project-${index}`">
                <router-link :to="{name : 'ProjectDetail' }">
                    <div class="card-list">
                        <table class="table-grid">
                            <tr>
                                <td class="float-left font-topic">
                                    {{project.projectName}}
                                </td>
                            </tr>
                            <tr>
                                <td class="float-left font-detail">
                                    Project ID : {{project.projectId}}
                                </td>
                            </tr>
                            <tr>
                                <td class="float-left">
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
            Id: null,
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
                },
                {
                    "projectId" : "622-542-285",
                    "projectName" : "Test Project",
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
                },
                {
                    "projectId" : "622-542-285",
                    "projectName" : "Test Project",
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
        },
        headers2() {
            return [
            { text: '', fixed: true, width: '100px', sortable: false }
            ].concat(this.headers)
        },
    },
}
</script>

<style>


.table-grid {
    width: 100%;
}
.font-detail {
    font-family: "Prompt";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: grey;
}

</style>