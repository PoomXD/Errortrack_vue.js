<template>
  <div>
    <form @submit.prevent="addProject">
      <div
        class="container-main font-no-size-color d-flex align-content-between flex-wrap"
      >
        <div class="w-100">
          <div class="row">
            <div class="col-lg-12 col-xl-6">
              <!-- <div class="row mb-3"> 
            <div class="col-3 text-right font-gen">Project ID :</div>
            <div class=" font-detail col-8">
              <b-form-input
                :disabled="true"
                placeholder="xxxx"
                type="text"
                class="shadow-sm"
              ></b-form-input>
            </div>
          </div> -->
              <div
                class="row mb-3"
                :class="{ 'form-group--error': $v.projectName.$error }"
              >
                <div class="col-3 text-right font-gen">Project Name* :</div>
                <div class="col-8">
                  <b-form-input
                    id="Project_Name"
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
                    id="Name_required"
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
                <div class="col-3 text-right font-gen">Project Owner* :</div>
                <div class="col-8 font-detail">
                  <multiselect
                    id="Project_Owner"
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
                    id="Owner_required"
                    v-if="!$v.valueOwner.required && save"
                  >
                    Project Owner is required
                  </div>
                  
                </div>
              </div>

              <div class="row mb-3 form-group">
                <div class="col-3 text-right font-gen">Expires Date* :</div>
                <div class="col-8 font-detail">
                  <b-form-datepicker
                    class="font-detail shadow-sm"
                    :class="{
                      'input-invalid': !$v.exp.required && save,
                    }"
                    v-model.trim="$v.exp.$model"
                    :min="min"
                  ></b-form-datepicker>
                  <div
                    class="error font-invalid"
                    id="exp_required"
                    v-if="!$v.exp.required && save"
                  >
                    Expires Date is required
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
                    data-testid="ProjectDetail"
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
import Multiselect from "vue-multiselect";
import ProjectService from "@/services/api/project.service";
import UserService from "@/services/api/user.service";
import { required } from "vuelidate/lib/validators";
// import { mapState } from "vuex";

export default {
  name: "ProjectAdd",

  computed: {
    // ...mapState({
    //   dataUser: (store) => store.user.users,
    // }),
    // ...mapGetters({
    //   getFullName: "project/getFullName",
    // }),
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
    exp: {
      required,
    },
  },
  data() {
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const minDate = new Date(today);
    return {
      users: [],
      min: minDate,
      save: false,
      projectName: "",
      ProjectDetail: "",
      value: null,
      exp: "",
      listUserMaintenance: [],
      listUserOwner: [],
      valueMaintenance: [],
      valueOwner: [],
      ID: "",
    };
  },
  updated() {
    // var name = this.users.filter(
    //   (data) => data.id == localStorage.getItem("userId")
    // );
    // console.log('users ', this.users)
    // console.log("name ", name);
    // if (name.length > 0) {
    //   this.valueOwner.push({
    //     id: localStorage.removeItem("userId"),
    //     name: name[0].name,
    //   });
    //   console.log("val owner", this.valueOwner);
    // }
  },
  async mounted() {
    this.$store.dispatch("header/setAllLinkHeader", "ProjectAdd");

    await this.getListUser();
    this.users.forEach((data) => {
      this.listUserOwner.push({
        id: data.userId,
        name: data.name,
      });
    });
    this.listUserMaintenance = this.listUserOwner;
    this.$store.dispatch("sidebar/setActiveNav", "project");
    this.ID = localStorage.getItem("userId");
    
    var name = this.users.filter(
      (data) => data.userId == localStorage.getItem("userId")
    );
    console.log('users ', this.users)
    console.log("name ", name);
    if (name.length > 0) {
      this.valueOwner.push({
        id: name[0].userId,
        name: name[0].name,
      });
      console.log("val owner", this.valueOwner);
    }
  },
  methods: {
    async getListUser() {
      await UserService.getListUser().then((res) => {
        this.users = res;
      });
    },
    onDelete(index) {
      this.array.splice(index, 1);
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
    async addProject() {
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
          projectName: this.projectName,
          projectDetail: this.ProjectDetail,
          userOwner: ownerId,
          userMaintenance: maintenanceId,
          expiresDate: this.exp,
        };
        console.log("param : ");
        console.log(param);
        await ProjectService.addProject(param);
        this.$router.push({ name: "ListProject" });
      }
    },
    nameWithLang({ name, id }) {
      return `${name} — [${id}]`;
    },
  },
  watch: {
    valueOwner: {
      handler: function (val, oldVal) {
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
<style>
</style>
