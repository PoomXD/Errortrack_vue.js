<template>
  <div>
    <!-- {{ status }} -->
    <div class="p-5 background-container">
      <div class="row">
        <div class="col-xl col-lg-12">
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Project Name :</p>
            </div>
            <div class="col-8">
              <p class="font-weight-light font-detail">
                {{ serviceDetail.projectName }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Project Owner :</p>
            </div>
            <div class="col-8">
              <p
                v-for="(user, index) in serviceDetail.projectOwner"
                :key="`userOwner-${index}`"
                class="font-weight-light font-detail"
              >
                {{ user.name }}
              </p>
            </div>
          </div>
  
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">Service Name :</p>
            </div>
            <div class="col-8">
              <p class="font-weight-light font-detail">
                {{ serviceDetail.serviceName }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-right">
              <p class="font-weight-bold font-gen">User Maintenance :</p>
            </div>
            <div class="col-8">
              <p
                v-for="(user, index) in serviceDetail.userMaintenance"
                :key="`userMainten-${index}`"
                class="font-weight-light font-detail"
              >
                {{ user.name }}
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
            <b-form-group
              v-slot="{ ariaDescribedby }"
              class="display-task font-gen"
            >
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
            <b-card-title class="font-gen max-lines">{{ task.errDetail }}</b-card-title>
            <b-card-text class="cut-text font-weight-light font-detail">
              {{ task.errParameter }}
            </b-card-text>
            <div class="d-flex justify-content-end">
              <div
                class="status-waiting rounded-pill"
                v-if="task.errStatus == status[0].text"
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
            <b-modal
              :ref="`errorModal-${task.errId}`"
              :id="`modalPopover${task.errId}`"
              title="Detail"
              size="xl"
              class="font-gen"
              hide-footer
              scrollable
              @hidden="doSomethingOnHidden"
            >
              <ModalForTask :indexError="task.errId" :servId="serviceDetail.serviceId"></ModalForTask>
            </b-modal>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalForTask from "./ModalForTask.vue";
import ServiceService from "@/services/api/service.service";
import ErrorService from "@/services/api/error.service";
import ErrorStatusService from "@/services/api/errorStatus.service";
import { mapState } from "vuex";

export default {
  name: "TaskError",
  computed: {
    ...mapState({
      dataUser: (store) => store.user.users,
      status: (store) => store.errorStatus.status,
    }),
    filteredRows() {
      return this.listError.filter((row) => {
        row;
        return this.selected.includes(row.errStatus);
      });
    },
  },
  components: {
    ModalForTask,
  },
  methods: {
    getService(servId) {
      ServiceService.getService(servId).then((result) => {
        // console.log("detail ",result)
        this.serviceDetail.serviceId = result.serviceId;
        this.serviceDetail.serviceName = result.serviceName;
        this.serviceDetail.projectId = result.projectId;
        this.serviceDetail.projectName = result.projectName;
        
        this.serviceDetail.projectOwner = [];
        result.userOwner.forEach(user => {
          this.serviceDetail.projectOwner.push(user);
        });

        this.serviceDetail.userMaintenance = [];
        result.userMaintenance.forEach(user => {
          this.serviceDetail.userMaintenance.push(user);
        });

        this.getListError(result.serviceId);
        console.log(this.serviceDetail)
      });
    },
    getNameUser(userId) {
      let name = "";
      this.dataUser.forEach((user) => {
        if (user.id === userId) {
          name = `${user.firstName} ${user.lastName}`;
        }
      });
      return name;
    },
    getListError(serviceId) {
      ErrorService.getListError(serviceId).then((result) => {
        result.forEach((res) => {
          let err = {
            errId: res.errorId,
            errDetail: res.errorDetail,
            errParameter: res.errorParameter,
            errStatus: res.errorStatusName,
          };
          this.listError.push(err);
        });
      });
    },
    setOptions() {
      this.options = [];
      this.selected = [];

      ErrorStatusService.getListErrorStatus().then((res) => {
        console.log("error status : ",res);
        res.forEach((re) => {
          let errStatus = {
            value: re.errorStatusName,
            text: re.errorStatusName,
          };
          this.options.push(errStatus);
          this.selected.push(re.errorStatusName);
        });
        console.log("error status 2 : ",this.status);
      });
  
    },
    doSomethingOnHidden() {
      this.listError = [];
      this.getService(this.$route.query.serviceId);
    },
  },
  updated() {this.$store.dispatch("header/setQueryLinkHeader", `Task ${this.serviceDetail.projectId}`);},
  created() {},
  async mounted() {
    await this.getService(this.$route.query.serviceId);
    this.setOptions();
    this.$store.dispatch("sidebar/setActiveNav", "monitor");
    // this.$store.dispatch("header/setQueryLinkHeader", `Task ${this.serviceDetail.projectId}`);
  },
  data() {
    return {
      projectId: 0,
      serviceDetail: {
        projectName: "",
        projectOwner: [],
        serviceId: null,
        serviceName: "",
        userMainten: [],
        projectId: 0,
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
.fontColor-comment {
  color: #96a1ae;
}
.comment-size-buttom {
  width: 100px;
}
.max-lines {
 overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;

}
</style>
