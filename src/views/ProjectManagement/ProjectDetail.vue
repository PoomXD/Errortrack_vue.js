<template>
  <div class="ProjectDetail">
    <!-- {{ Project_ID }} -->
    <div>
      <router-link
        :to="{
          name: 'ProjectEdit',
          query: { projectId: Project_ID },
        }"
      >
        <b-button class="bt-blue float-right" style="width: 90px" data-testid="Edit_Button" id='Edit_Button'>
          <font-awesome-icon :icon="['fas', 'edit']" /> Edit</b-button
        ></router-link
      >
    </div>

    <br />
    <br />
    <div class="card-list" id="cardlist">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="row mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
            >
              Token :
            </div>
            <div class="font-detail" align="left">
              <b-input-group>
                <b-form-input
                  type="text"
                  data-autoselect
                  class="form-control"
                  v-model="token"
                  ref="copyText"
                  readonly
                ></b-form-input>
                <b-input-group-append>
                  <b-button class="bt-cancel-blue-no-size" @click="copy()">
                    <font-awesome-icon :icon="['fas', 'copy']" />
                  </b-button>
                  <b-button class="bt-blue-no-size" @click="revoke(Project_ID)">
                    <font-awesome-icon :icon="['fas', 'sync']" />
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <div class="row mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
            >
              Exp : 
            </div>
            <div class="font-detail" align="left">
              {{ this.exp }}
              <b-input-group id="datepicker">
                
                <b-form-datepicker
                  class="font-detail shadow-sm"
                  :class="{
                    'input-invalid': !$v.date.required && save,
                  }"
                  v-model.trim="$v.date.$model"
                  :min="min"
                  placeholder="select date exp"
                ></b-form-datepicker>
                

                <b-input-group-append>
                  <b-button
                    class="bt-blue-no-size"
                    @click="refresh(Project_ID, date)"
                  >
                    <font-awesome-icon :icon="['fas', 'arrow-alt-circle-up']" />
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <div
                  class="error font-invalid"
                  id="exp_required"
                  v-if="!$v.date.required && save"
                >
                  Expires Date is required
                </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="row mb-3 mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
            >
              Project ID :
            </div>
            <div class="font-detail" align="left">
              {{ Project_ID }}
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
            >
              Project Name :
            </div>
            <div class="font-detail" align="left">
              {{ Project_Name }}
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen mt-0 text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
              a
            >
              Project Details :
            </div>
            <div
              class="font-detail col p-0"
              :class="{ go_up: mobileView }"
              align="left"
            >
              {{ Project_Detail }}
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-md-12">
          <div class="row mb-3 mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
            >
              Project Owner :
            </div>
            <div class="font-detail" align="left">
              <tr
                v-for="(Project_Owner, index) in Project_Owner"
                :key="`Project_Owner-${index}`"
              >
                <td>{{ Project_Owner.name }}</td>
              </tr>
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div
              class="col-xl-4 col-md-3 font-gen text-right"
              :class="{ move: mobileView }"
              style="font-weight: bold"
            >
              User Maintenance :
            </div>
            <div class="font-detail" align="left">
              <tr
                v-for="(Member, index) in User_Maintenance"
                :key="`Member-${index}`"
              >
                <td>{{ Member.name }}</td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div id="search">
      <table>
        <tr>
          <td>
            <input
              id="ServiceSearch"
              type="text"
              placeholder=" Service Search"
              v-model="keyword"
            />
          </td>
          <td>
            <b-button variant="primary" id="icon"
              ><font-awesome-icon :icon="['fas', 'search']"
            /></b-button>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <div class="row table-box" id="ServiceTable">
      <b-table
        class="table-color"
        striped
        hover
        :items="items"
        :fields="fields"
      >
        <template v-slot:cell(Service_Detail)="data">
          <router-link
            :to="{
              name: 'TaskError',
              query: { serviceId: data.item.Service_ID },
            }"
            style="text-decoration: underline"
            class="icon-list"
          >
            <font-awesome-icon :icon="['fas', 'search']" />
            <!-- <i class="fas fa-search"></i> -->
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import ProjectService from "@/services/api/project.service";
import ServiceService from "@/services/api/service.service";
import { mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
import moment from "moment";
import Swal from "sweetalert2";

export default {
  name: "ProjectDetail",
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    console.log("Name: ", this.$route.meta.name);
    if (this.$route.meta.showEdit == false) {
      this.Member = this.User_Maintenance;
    }
    if (this.$route.meta.name == "ProjectDetail") {
      this.$store.dispatch("header/setAllLinkHeader", "ProjectDetail");
    }
    if (this.$route.meta.name == "Detail") {
      this.$store.dispatch("header/setAllLinkHeader", "Detail");
    }
    // console.log('id = ',this.$route.query.projectId);
    this.getListUser();
    this.getDetail(this.$route.query.projectId);
  },
  mounted() {
    // console.log(this.$route.params.projectId)
    // this.getDetail(this.$route.params.projectId);
    if (this.$route.meta.showEdit == false) {
      document.getElementById("search").style.marginTop = "0%";
      document.getElementById("Edit_Button").style.display = "none";
      document.getElementById("datepicker").style.display = "none";
      document.getElementById("cardlist").style.marginTop = "-3%";

      this.$store.dispatch("sidebar/setActiveNav", "monitor");
    } else {
      this.$store.dispatch("sidebar/setActiveNav", "project");
    }
  },
  validations: {
    date: {
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
      save: false,
      min: minDate,
      date: "",
      token: "",
      exp: null,
      mobileView: true,
      keyword: "",
      // fields: [
      //   { key: "No", thStyle: { width: "5%" } },
      //   { key: "Service_ID", thStyle: { width: "20%" } },
      //   { key: "Service_Name", thStyle: { width: "65%" } },
      //   //  {key:' ',thStyle: {width: '35%'}},
      //   { key: "Create_Date", thStyle: { width: "10%" } },
      // ],
      fields: [
        { key: "No", thStyle: { width: "5%" } },
        { key: "Service_Name", thStyle: { width: "60%" } },
        { key: "Create_Date", thStyle: { width: "15%" } },
        {
          key: "Service_Detail",
          thStyle: { width: "20%" },
          class: "text-center",
        },
      ],
      dataArray: [],
      Project_ID: "",
      Project_Detail: "",
      Project_Name: "",
      Project_Owner: [],
      Member: [],
      User_Maintenance: [],
    };
  },
  computed: {
    items() {
      return this.keyword
        ? this.dataArray.filter((item) => {
            const serviceId = item.Service_ID.toString().toLowerCase();
            const serviceName = item.Service_Name.toString().toLowerCase();

            return (
              serviceId.includes(this.keyword) ||
              serviceName.includes(this.keyword)
            );
          })
        : this.dataArray;
    },
    ...mapState({
      dataUser: (store) => store.user.users,
    }),
  },
  methods: {
    parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return moment(JSON.parse(jsonPayload).exp * 1000).format("MM/DD/YYYY");
    },
    async revoke(projectId) {
      // await ProjectService.revokeToken({ projectId: projectId });
      await Swal.fire({
        title: "Refresh Token",
        text: "Do you want to refresh this token?",
        icon: "warning",
        confirmButtonText: "yes",
        cancelButtonText: "no",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          ProjectService.revokeToken({ projectId: projectId });
          this.getDetail(projectId);
        }
      });
    },
    async refresh(projectId, date) {
      this.save = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("invalid field");
      } else {
        console.log("refresh token PID :", projectId);
        await ProjectService.refreshToken({
          projectId: projectId,
          expiresDate: date,
        });
        this.date = ''
        this.save = false
        this.getDetail(projectId);
      }
    },
    copy() {
      var copyText = this.$refs.copyText;
      console.log(copyText);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    },
    async getListUser() {
      await this.$store.dispatch("user/getUser");
    },
    handleView() {
      this.mobileView = window.innerWidth <= 770;
    },
    getDetail(projectId) {
      ProjectService.getProject(projectId).then((result) => {
        console.log("detail", result);
        console.log(result.userMaintenance)
        this.Project_ID = result.projectId;
        this.Project_Detail = result.projectDetail;
        this.Project_Name = result.projectName;
        this.token = result.token;
        this.exp = this.parseJwt(this.token);
        this.User_Maintenance = []
        result.userMaintenance.forEach((e) => {
            this.User_Maintenance.push({
              name: e.name,
            });
          
        });
        this.Project_Owner = []
        result.userOwner.forEach((e) => {
          this.Project_Owner.push({
              name: e.name,
            });
        }); // this.dataArray.push()
      });
      ServiceService.getListService(projectId).then((result) => {
        console.log("service", result);
        this.dataArray = []
        var i = 1;
        result.forEach((e) => {
          this.dataArray.push({
            No: i,
            Service_ID: e.serviceId,
            Service_Name: e.serviceName,
            Create_Date: e.createDate.toString().split("T")[0],
          });
          i++;
        });
        console.log(this.dataArray);
      });
    },
  },
};
</script>

<style scoped>
.icon-list {
  font-size: 25px;
  text-align: center;
}
.ProjectDetail {
  padding: 1rem;
}
#search {
  border: 1px solid rgb(174, 199, 255);
  border-radius: 20px;
  background: #fff;
  width: 350px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -4%;
  margin-right: 100%;
}
#ServiceSearch {
  border: 1px solid rgb(255, 255, 255);
  width: 300px;
  border-radius: 20px;
  background: #fff;
  outline: -webkit-focus-ring-color auto 0px;
}
#icon {
  margin: 1px;
  border-radius: 100%;
}
.move {
  text-align: left;
  /* margin-top: 3%; */
}
</style>
