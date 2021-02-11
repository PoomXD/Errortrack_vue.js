<template>
  <div>
    <form @submit.prevent="updateProject">
      <div
        class="container-main font-no-size-color d-flex align-content-between flex-wrap"
      >
        <div class="w-100">
          <div class="row">
            <div class="col-lg-12 col-xl-6">
              <div class="row mb-3">
                <div class="col-3 text-right font-gen">Project ID :</div>
                <div class="font-detail col-8 text-left">
                  {{ projectId }}
                </div>
              </div>
              <div
                class="row mb-3"
                :class="{ 'form-group--error': $v.projectName.$error }"
              >
                <div class="col-3 text-right font-gen">Project Name* :</div>
                <div class="col-8">
                  <b-form-input
                    v-model.trim="$v.projectName.$model"
                    placeholder="Project Name"
                    type="text"
                    class="font-detail shadow-sm"
                    :class="{
                      'input-invalid': !$v.projectName.required && save,
                    }"
                  ></b-form-input>
                  <div
                    class="error font-invalid"
                    v-if="!$v.projectName.required && save"
                  >
                    Project Name is required
                  </div>
                </div>
              </div>
              <div
                class="row mb-3 form-group"
                :class="{ 'form-group--error': $v.valueOwner.$error }"
              >
                <div class="col-3 text-right font-gen">
                  <label class="form__label">Project Owner* :</label>
                </div>
                <div class="col-8 font-detail">
                  <multiselect
                    class="shadow-sm multiselect"
                    :class="{
                      'multiselect-invalid': !$v.valueOwner.required && save,
                    }"
                    v-model.trim="$v.valueOwner.$model"
                    placeholder="Name Lastname"
                    label="name"
                    track-by="id"
                    :options="listUserOwner"
                    :multiple="true"
                  ></multiselect>
                  <div
                    class="error font-invalid"
                    v-if="!$v.valueOwner.required && save"
                  >
                    Project Owner is required
                  </div>
                </div>
              </div>
            </div>
            <!---------------------------------------- detail ----------------------------------------->
            <div class="col-lg-12 col-xl-6">
              <div class="row">
                <div class="col-3 text-right font-gen">Project Details :</div>
                <div class="col-8 font-detail">
                  <b-form-textarea
                    type="text"
                    class="shadow-sm"
                    v-model="ProjectDetail"
                  ></b-form-textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-3">
            <div class="col text-left">
              <div class="py-3 font-gen">User maintenance :</div>
              <div class="table-box">
                <table class="table-color-alt w-100 text-center">
                  <tr class="font-gen">
                    <th class="py-2">No</th>
                    <th class="py-2">First - Last Name</th>
                    <th class="py-2"></th>
                  </tr>
                  <tr class="font-detail">
                    <td></td>
                    <td class="py-2">
                      <multiselect
                        class="multiselect"
                        v-model="value"
                        :options="listUserMaintenance"
                        placeholder="Name Lastname"
                        label="name"
                        track-by="name"
                        style="width: 60%"
                      ></multiselect>
                    </td>
                    <td>
                      <font-awesome-icon
                        class="add-icon"
                        :icon="['fas', 'plus-circle']"
                        @click="addUserMaintenance()"
                      />
                    </td>
                  </tr>
                  <tr
                    v-for="(item, index) in valueMaintenance"
                    :key="`item-${index}`"
                    class="font-detail"
                  >
                    <td class="py-2">{{ index + 1 }}</td>
                    <td class="float-left py-2">{{ item.name }}</td>
                    <td class="py-2">
                      <font-awesome-icon
                        class="del-icon"
                        :icon="['fas', 'trash-alt']"
                        @click="delUserMaintenance(item)"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="row w-100">
          <!-- <div class="col"></div> -->
          <div class="col text-right pr-4">
            <router-link
              :to="{ name: 'ListProject' }"
              class="btn bt-cancel-blue font-no-size-color"
            >
              Cancel
            </router-link>
          </div>
          <div class="col text-left pl-4">
            <!-- <router-link :to="{ name: 'ListProject' }"> -->
            <b-button type="submit" class="bt-blue font-no-size-color">
              Save
            </b-button>
            <!-- </router-link> -->
          </div>
          <!-- <div class="col"></div> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ProjectService from "@/services/api/project.service";
import Multiselect from "vue-multiselect";
import { required, minLength } from "vuelidate/lib/validators";
import { mapState } from "vuex";
import Swal from "sweetalert2";
export default {
  name: "ProjectAdd",
  computed: {
    ...mapState({
      dataUser: (store) => store.user.users,
    }),
  },
  component: {
    multiselect: Multiselect,
  },
  validations: {
    projectName: {
      required,
    },
    valueOwner: {
      required,
    },
  },
  data() {
    return {
      save: false,
      projectId: 0,
      projectName: "",
      ProjectDetail: "",
      value: null,
      listUserMaintenance: [],
      listUserOwner: [],
      valueMaintenance: [],
      valueOwner: [],
    };
  },
  mounted() {
    console.log(this.$route.query.projectId);
    this.getDetailProject(this.$route.query.projectId);
    this.$store.dispatch(
      "header/setQueryLinkHeader",
      `ProjectEdit ${this.$route.query.projectId}`
    );
  },

  methods: {
    alertOops() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    },
    getDetailProject(projectId) {
      ProjectService.getProject(projectId).then((result) => {
        console.log("get for edit", result);
        this.projectName = result.projectName;
        this.projectId = result.projectId;
        this.ProjectDetail = result.projectDetail;
        result.userMaintenance.forEach((data) => {
          var user = this.dataUser.filter((e) => e.id === data.userId);
          this.valueMaintenance.push({
            id: user[0].id,
            name: `${user[0].firstName} ${user[0].lastName}`,
          });
          // console.log("4545456456")
          // this.dataUser = this.dataUser.filter(e => e.id !== data.id)
          // console.log("sokdksdfkp[skf")
        });
        result.userOwner.forEach((data) => {
          var user = this.dataUser.filter((e) => e.id === data.userId);
          this.valueOwner.push({
            id: user[0].id,
            name: `${user[0].firstName} ${user[0].lastName}`,
          });
        });
        console.log("set list user");
        this.dataUser.forEach((data) => {
          this.listUserOwner.push({
            id: data.id,
            name: `${data.firstName} ${data.lastName}`,
          });
        });
        let lm = this.listUserMaintenance;
        let lo = this.listUserOwner;
        this.valueMaintenance.forEach((e) => {
          lm = lm.filter((data) => data.id !== e.id);
          lo = lo.filter((data) => data.id !== e.id);
        });
        this.listUserMaintenance = lm;
        this.listUserOwner = lo;
      });
    },
    addUserMaintenance() {
      this.valueMaintenance.push({ name: this.value.name, id: this.value.id });
      let lm = this.listUserMaintenance;
      let lo = this.listUserOwner;
      this.valueMaintenance.forEach((e) => {
        lm = lm.filter((data) => data.id !== e.id);
        lo = lo.filter((data) => data.id !== e.id);
      });
      this.listUserMaintenance = lm;
      this.listUserOwner = lo;
      this.value = null;
    },
    delUserMaintenance(data) {
      // console.log(data)
      this.listUserOwner.push(data);
      this.listUserMaintenance.push(data);
      let res = this.valueMaintenance;
      res = res.filter((val) => val.id != data.id);
      // console.log(res)
      this.valueMaintenance = res;
    },
    async updateProject() {
      this.save = true;
      this.$v.$touch();
      console.log(this.$v.projectName.$error);
      if (this.$v.$invalid) {
        console.log("invalid field");
      } else {
        let ownerId = [];
        this.valueOwner.forEach((data) => {
          ownerId.push({ userId: data.id });
        });
        let maintenanceId = [];
        this.valueMaintenance.forEach((data) => {
          maintenanceId.push({ userId: data.id });
        });
        let param = {
          projectId: this.projectId,
          // projectId:0,
          projectName: this.projectName,
          projectDetail: this.ProjectDetail,
          projectOwner: ownerId,
          userMaintenance: maintenanceId,
        };
        console.log("ownerId", ownerId);
        // console.log("param edit : ");
        // console.log(param);
        try {
          let response = await ProjectService.updateProject(param);
          console.log('response',response)
          if (response.status) {
            this.$router.push({
              name: "ProjectDetail",
              query: { projectId: this.projectId },
            });
          } else {
            console.log(response)
            this.alertOops();
          }
        } catch (ex) {
          this.alertOops();
          console.log("CATCH",ex)
        }
      }
    },
  },
  watch: {
    valueOwner: {
      handler: function(val, oldVal) {
        this.value = null;
        let res = this.listUserOwner;
        val.forEach((e) => {
          res = res.filter((data) => data.id !== e.id);
        });
        this.listUserMaintenance = res;
      },
      deep: true,
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style></style>
