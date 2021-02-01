<template>
  <div class="listProject">
    <div class="content-page">
      <div class="row contentCenter">
        <!-- <h1>Test</h1> -->
        <div class="searchBox">
          <table class="table-grid">
            <tr>
              <td>
                <input
                  :placeholder="'Project Search ...'"
                  v-model="filter"
                  class="input-search font-no-size-color px-1"
                >
                <!-- </b-form-input> -->
              </td>
              <td>
                <b-button class="icon-search"
                  ><font-awesome-icon :icon="['fas', 'search']"
                /></b-button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row margin-btw-content">
        <div class="col">
          <h4 class="float-left font-no-size-color">Projects</h4>
        </div>
        <!-- <div class="col-3">
          <router-link :to="{ name: 'ProjectAdd' }">
            <b-button class="w-100 bt-blue font-no-size-color"
              ><font-awesome-icon :icon="['fas', 'plus']" /> Add New
              Project</b-button
            >
          </router-link>
        </div> -->
      </div>
      <div class="row margin-btw-content">
        <div
          class="col-4"
          v-for="(project, index) in filteredRows"
          :key="`project-${index}`"
        >
          <router-link :to="{ name: 'ProjectDetail' }">
            <div class="card-list">
              <table class="table-grid">
                <tr>
                  <td class="float-left font-topic">
                    {{ project.projectName }}
                  </td>
                </tr>
                <tr>
                  <td class="float-left font-detail">
                    Project ID : {{ project.projectId }}
                  </td>
                </tr>
                <tr>
                  <td class="float-left">
                    <div class="row px-2">
                      <!-- <div v-if="users[index].size > 3">
                        <div v-for="(user, j) in users[index]" :key="`userMoreThan3-${j}-${index}`">
                          
                        </div>
                      </div> -->
                      <div
                        v-for="(user, i) in users[index]"
                        :key="`user-${index}-${i}`"
                      >
                        <div v-if="i < 3">
                          <div v-if="user.role === 'owner'">
                            <b-avatar
                            :id="`popover2-${index}-${user.userId}`"
                            :size="30"
                            class="mr-left avatar-owner"
                            >{{ user.text }}</b-avatar>

                          <b-popover
                            :target="`popover2-${index}-${user.userId}`"
                            :placement="'bottom'"
                            triggers="hover focus"
                            :content="`${user.userName} ${user.userLastName}`"
                          ></b-popover>
                          </div>
                          <div v-else>
                            <b-avatar
                            :id="`popover2-${index}-${user.userId}`"
                            :size="30"
                            class="mr-left avatar-user"
                            >{{ user.text }}</b-avatar>

                          <b-popover
                            :target="`popover2-${index}-${user.userId}`"
                            :placement="'bottom'"
                            triggers="hover focus"
                            :content="`${user.userName} ${user.userLastName}`"
                          ></b-popover>
                          </div>
                        </div>
                        <div v-if="i==3">
                          <b-avatar
                            :id="`popover2-${index}-else`"
                            :size="30"
                            class="mr-left avatar-more"
                            ><font-awesome-icon :icon="['fas', 'ellipsis-h']"/></b-avatar>
                            <!-- <b-popover
                            :target="`popover2-${index}-else`"
                            :placement="'bottom'"
                            triggers="hover focus"
                            :content="`${owner.userName} ${owner.userLastName}`"
                          ></b-popover> -->
                        </div>
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

  data() {
    return {
      Id: null,
      projects: [
        {
          projectId: "111-111-111",
          projectName: "Covid 19 Airport Project",
          projectOwners: [
            {
              userId: "123456789",
              userName: "Zala",
              userLastName: "Pao",
            },
          ],
          userMaintenance: [
            {
              userId: "784666115",
              userName: "Ai",
              userLastName: "Kotoba",
            },
            {
              userId: "152463258",
              userName: "Game",
              userLastName: "Kanna",
            },
          ],
        },
        {
          projectId: "111-222-333",
          projectName: "Linkage Project",
          projectOwners: [
            {
              userId: "109698745",
              userName: "Aristeaz",
              userLastName: "Fa",
            },
          ],
          userMaintenance: [
            {
              userId: "564852369",
              userName: "Pin",
              userLastName: "Wanyen",
            },
            {
              userId: "152463258",
              userName: "Game",
              userLastName: "Kanna",
            },
            {
              userId: "789558512",
              userName: "Test",
              userLastName: "User",
            },
          ],
        },
        {
          projectId: "452-125-488",
          projectName: "Error Tracking",
          projectOwners: [
            {
              userId: "109698745",
              userName: "Aristeaz",
              userLastName: "Fa",
            },
            {
              userId: "152463258",
              userName: "Game",
              userLastName: "Kanna",
            },
            {
              userId: "784666115",
              userName: "Ai",
              userLastName: "Kotoba",
            },
            {
              userId: "125488563",
              userName: "Poom",
              userLastName: "Khabbbb",
            },
          ],
          userMaintenance: [
            {
              userId: "564852369",
              userName: "Pin",
              userLastName: "Wanyen",
            },
          ],
        },
        {
          projectId: "622-542-285",
          projectName: "Test Project",
          projectOwners: [
            {
              userId: "109698745",
              userName: "Aristeaz",
              userLastName: "Fa",
            },
            {
              userId: "152463258",
              userName: "Game",
              userLastName: "Kanna",
            },
            {
              userId: "784666115",
              userName: "Ai",
              userLastName: "Kotoba",
            },
            {
              userId: "125488563",
              userName: "Poom",
              userLastName: "Khabbbb",
            },
          ],
          userMaintenance: [
            {
              userId: "564852369",
              userName: "Pin",
              userLastName: "Wanyen",
            },
          ],
        },
        {
          projectId: "622-542-285",
          projectName: "Test Project",
          projectOwners: [
            {
              userId: "109698745",
              userName: "Aristeaz",
              userLastName: "Fa",
            },
            {
              userId: "152463258",
              userName: "Game",
              userLastName: "Kanna",
            },
            {
              userId: "784666115",
              userName: "Ai",
              userLastName: "Kotoba",
            },
            {
              userId: "125488563",
              userName: "Poom",
              userLastName: "Khabbbb",
            },
          ],
          userMaintenance: [
            {
              userId: "564852369",
              userName: "Pin",
              userLastName: "Wanyen",
            },
          ],
        },
      ],
      filter: "",
      users: [],
      userMoreThan3: '',
    };
  },
  mounted(){
    let listlink = [
        {
          name: "Project Managemant",
          url: "#",
        },
      ];
    this.$store.dispatch("header/setAllLinkHeader", listlink);
  },
  beforeMount() {
    this.projects.forEach((project) => {
      let userEachProject = [];
      // console.log('test');
      project.projectOwners.forEach((owner) => {
        let text = `${owner.userName[0]}${owner.userLastName[0]}`;
        // owner["text"] = text;
        let us = {
          "userId" : owner.userId,
          "userName" : owner.userName,
          "userLastName" : owner.userLastName,
          "role" : "owner",
          "text" : text
        }
        // console.log(us);
        userEachProject.push(us);
        // console.log('user for each',userEachProject);
        // console.log('project: ',project.projectName);
      });
      project.userMaintenance.forEach((user) => {
        let text = `${user.userName[0]}${user.userLastName[0]}`;
        
        let us = {
          "userId" : user.userId,
          "userName" : user.userName,
          "userLastName" : user.userLastName,
          "role" : "user",
          "text" : text
        }

        userEachProject.push(us);
      });
      this.users.push(userEachProject);
      // console.log('users in loop: ',this.users);
    });
    // console.log('users: ',this.users);
  },
  
  computed: {
    filteredRows() {
      return this.projects.filter((row) => {
        const projectName = row.projectName.toLowerCase();
        const projectId = row.projectId.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          projectName.includes(searchTerm) || projectId.includes(searchTerm)
        );
      });
    },
  },
};
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
