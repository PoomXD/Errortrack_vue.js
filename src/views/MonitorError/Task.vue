<template>
  <div>
    <div class="p-5 background-container">
      <div class="row">
        <div class="col-xl col-lg-12">
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Project Name :</p>
            </div>
            <div class="col-8">
              <p class="font-weight-light font-detail"> {{ serviceDetail.projectName }} </p>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Project Owner :</p>
            </div>
            <div class="col-8">
              <p v-for="(user,index) in serviceDetail.projectOwner"
              :key="`userOwner-${index}`"
              class="font-weight-light font-detail">
              {{ getNameUser(user.userId) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Service ID :</p>
            </div>
            <div class="col-8">
              <p class="font-weight-light font-detail">{{ serviceDetail.serviceId }}</p>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Service Name :</p>
            </div>
            <div class="col-8">
              <p class="font-weight-light font-detail">{{ serviceDetail.serviceName }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">User Maintenance :</p>
            </div>
            <div class="col-8">
              <p v-for="(user,index) in serviceDetail.userMainten"
              :key="`userMainten-${index}`"
              class="font-weight-light font-detail">
              {{ getNameUser(user.userId) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5 background-container mt-5">
      <div class="row">
        <div class="col-xl-4 col-lg-5 col-sm-8 align-middle font-gen">
          <h5>สถานะ Service Error</h5>
        </div>
        <div class="col-xl-8 col-lg-7 col-sm-4">
          <div class="d-flex justify-content-end">
            <b-form-group v-slot="{ ariaDescribedby }" class="display-task font-gen">
              <b-form-checkbox-group
                size="lg"
                id="checkbox-group-1"
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="flavour-1"
              ></b-form-checkbox-group>
            </b-form-group>

            <b-dropdown
              text="Filter"
              variant="primary"
              class="m-2 display-dropdow-task font-gen"
            >
              <b-dropdown-form>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group
                    size="lg"
                    id="checkbox-group-2"
                    v-model="selected"
                    :options="options"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-2"
                  ></b-form-checkbox-group>
                </b-form-group>
              </b-dropdown-form>
            </b-dropdown>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xl-3 col-lg-6"
          v-for="(task, index) in filteredRows"
          :key="index"
        >
          <b-card class="card-list" v-b-modal="`modalPopover${task.errId}`">
            <b-card-title class="font-gen ">{{ task.errDetail }}</b-card-title>
            <b-card-text class="cut-text font-weight-light font-detail">
              {{ task.errParameter }}
            </b-card-text>
            <div class="d-flex justify-content-end">
              <div
                class="status-waiting rounded-pill"
                v-if="task.errStatus == status[0].text"
              >
                <p class="fw-bold m-0 text-center white-space ">
                  {{ task.errStatus }}
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-todo rounded-pill"
                v-if="task.errStatus == status[1].text"
              >
                <p class="fw-bold m-0 text-center white-space">
                  {{ task.errStatus }}
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-doing rounded-pill"
                v-if="task.errStatus == status[2].text"
              >
                <p class="fw-bold m-0 text-center white-space">
                  {{ task.errStatus }}
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-testing rounded-pill"
                v-if="task.errStatus == status[3].text"
              >
                <p class="fw-bold m-0 text-center white-space">
                  {{ task.errStatus }}
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p> 
              </div>
              <div
                class="status-done rounded-pill"
                v-if="task.errStatus == status[4].text"
              >
                <p class="fw-bold m-0 text-center white-space">
                  {{ task.errStatus }}
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
            </div>
            <b-modal :id="`modalPopover${task.errId}`" title="Error Something" size="xl">
              <ModalForTask :indexError="task.errId"></ModalForTask>
            </b-modal>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalForTask from "./ModalForTask.vue";
import ServiceService from '@/services/api/service.service';
import ProjectService from '@/services/api/project.service';
import ErrorService from '@/services/api/error.service';
import { mapState } from "vuex";

export default {
  name: "TaskError",
  computed: {
    ...mapState({
      dataUser: (store) => store.user.users,
      status: (store) => store.errorStatus.status
    }),
    filteredRows() {
      return this.listError.filter((row) => {
        row;
        return this.selected.includes(row.errStatus);
      });
    },
  },
  components:{
    ModalForTask
  },
  methods: {
    getService(servId){
      ServiceService.getService(servId).then(result => {
        console.log('service : ', result);
        this.serviceDetail.serviceId = result.serviceId;
        this.serviceDetail.serviceName = result.serviceName;

        ProjectService.getProject(result.projectId).then(res => {
          console.log('project get by Id : ',res);
          this.serviceDetail.projectName = res.projectName;
          this.serviceDetail.projectOwner = res.userOwner;
          this.serviceDetail.userMainten = res.userMaintenance;
        })
        this.getListError(result.serviceId);
      })
    },
    getNameUser(userId){
      let name = '';
      this.dataUser.forEach(user => {
        if(user.id === userId){
          name =  `${user.firstName} ${user.lastName}`;
        }
      });
      return name;
    },
    getListError(serviceId){
      ErrorService.getListError(serviceId).then(result => {
        console.log('error list : ',result);
        result.forEach(res => {
          let err = {
            errId: res.errorId,
            errDetail: res.errorDetail,
            errParameter: res.errorParameter,
            errStatus: res.errorStatusName
          }
          this.listError.push(err);
        });
        console.log('listError : ',this.listError);
      })
    },
    async setOptions(){
      this.options = [];
      this.selected = [];
      this.status.forEach(s => {
        let op = {
          text: s.text,
          value: s.text
        }
        this.options.push(op);
        this.selected.push(`${s.text}`);
      });
    }
  },
  updated() {
  },
  mounted(){
    this.$store.dispatch("header/setAllLinkHeader", "Task");
    this.getService(this.$route.params.serviceId)
    // this.getService(4);
    // console.log('status : ',this.status);
    this.setOptions();
    console.log('options mo: ',this.options);
  },
  data() {
    return {
      serviceDetail: {
        projectName : '',
        projectOwner : [],
        serviceId : null,
        serviceName : '',
        userMainten : []
      },
      listError: [],
      selected: [], // Must be an array reference!
      options: [],
      
    };
  },
};
</script>

<style>
.display-task {
  display: block;
}
.display-dropdow-task {
  display: none;
}
@media (max-width: 992px) {
  .display-task {
    display: none;
  }
  .display-dropdow-task {
    display: block;
  }
}
.textarea:focus {
  outline: none !important;
  box-shadow: none !important;
}
.textareabackgrou {
  background-color: #f4f9ff;
}
.fontColor-comment{
  color: #96A1AE;
}
.comment-size-buttom{
  width: 100px;
}
</style>
