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
                />
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
      <div class="row margin-btw-content" id="card_contrain">
        <div
          class="col-lg-6 col-xl-4 col-12"
          v-for="(project, index) in filteredRows"
          :key="`project-${index}`"
          :id="`project-${index}`"
        >
          <router-link
            :to="{
              name: 'Detail',
              query: { projectId: project.projectId },
            }"
          >
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
                        v-for="(user, i) in project.projectUser"
                        :key="`user-${index}-${i}`"
                      >
                        <div v-if="i < 3">
                          <div v-if="user.role === 'owner'">
                            <b-avatar
                              :id="`popover2-${index}-${user.userId}`"
                              :size="30"
                              class="mr-left avatar-owner"
                              :text="getTextAvatar(user.userId)"
                              ></b-avatar
                            >

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
                              :text="getTextAvatar(user.userId)"
                              ></b-avatar
                            >

                            <b-popover
                              :target="`popover2-${index}-${user.userId}`"
                              :placement="'bottom'"
                              triggers="hover focus"
                              :content="`${user.userName} ${user.userLastName}`"
                            ></b-popover>
                          </div>
                        </div>
                        <div v-if="i == 3">
                          <b-avatar
                            :id="`popover2-${index}-else`"
                            :size="30"
                            class="mr-left avatar-more"
                            ><font-awesome-icon :icon="['fas', 'ellipsis-h']"
                          /></b-avatar>
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
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- {{projects}} -->
    <!-- {{ dataUser }} -->
  </div>
</template>

<script>
import ProjectService from '@/services/api/project.service';
import { mapState } from "vuex";

export default {
  name: "ListProject",
  methods:{
    getTextAvatar(id) {
      let text = "";
      this.dataUser.forEach((user) => {
        if (user.id === id) {
          if (user.firstName != "" && user.lastName != "") {
            text = `${user.firstName[0]}${user.lastName[0]}`;
          } else if (user.firstName != "" && user.lastName == "") {
            text = `${user.firstName[0]}`;
          } else {
            text = `Un`;
          }
        }
      });
      return text;
    },
    getListProject(userID){
      ProjectService.getListProject(userID).then(result => {
        result.forEach(data => {
          var projectUser = []
          data.userOwner.forEach(owner => {
           var user = this.dataUser.filter(u => u.id == owner.userId)
           if(user.length > 0){
            projectUser.push({
              userId: user[0].id,
              userName: user[0].firstName,
              userLastName: user[0].lastName,
              role: "owner"
            })
           }
          })
          data.userMaintenance.forEach(maintenance => {
           var user = this.dataUser.filter(u => u.id == maintenance.userId)
           if(user.length > 0){
            projectUser.push({
              userId: user[0].id,
              userName: user[0].firstName,
              userLastName: user[0].lastName,
              role: "maintenance"
            })
           }
          })
          this.projects.push({
             projectId: data.projectId,
             projectName: data.projectName,
             projectUser: projectUser,
             
           })
        })
        // this.projects = result;

      }).catch(err => {
        console.log('error : ', err)
      });
    }
  },
  data() {
    return {
      Id: null,
      projects: [],
       user: [],
      filter: "",
      users: [],
      userMoreThan3: '',
    };
  },
  mounted(){
    this.getListProject(localStorage.getItem("userId"));
    this.$store.dispatch("header/setAllLinkHeader", "ListProject");
    this.$store.dispatch("sidebar/setActiveNav", "monitor");
  },
  
  computed: {
    ...mapState({
      dataUser: (store) => store.user.users,
    }),
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
