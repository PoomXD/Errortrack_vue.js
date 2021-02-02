<template>
  <div class="container-main font-no-size-color d-flex align-content-between flex-wrap">
    <div class="w-100">
    <div class="row">
      <div class="col">
        <div class="row mb-3">
          <div class="col-3 text-right font-gen">Project ID :</div>
          <div class="col-8 font-detail">
            <b-form-input
              placeholder="xxxx"
              type="text"
              class="shadow-sm"
            ></b-form-input>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-3 text-right font-gen">Project Name :</div>
          <div class="col-8 font-detail">
            <b-form-input
              placeholder="Project Name"
              type="text"
              class="shadow-sm"
            ></b-form-input>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-3 text-right font-gen">Project Owner :</div>
          <div class="col-8 font-detail">
            <multiselect
              v-model="valueOwner"
              placeholder="Name Lastname"
              label="name"
              track-by="id"
              :options="listUserOwner"
              :multiple="true"
            ></multiselect>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col-3 text-right font-gen">Project Details :</div>
          <div class="col-8 font-detail">
            <b-form-textarea type="text" class="shadow-sm"></b-form-textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-3">
      <div class="col text-left">
        <div class="py-3 font-gen">User maintenance :</div>
        <div class="table-box">
          <table class="table-color-alt w-100 text-center ">
            <tr class="font-gen">
              <th class="py-2">No</th>
              <th class="py-2">First - Last Name</th>
              <th class="py-2"></th>
            </tr>
            <tr class="font-detail">
              <td></td>
              <td class="py-2">
                <multiselect
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
      <div class="col text-right mr-4">
        <router-link :to="{ name: 'ProjectDetail' }">
          <b-button class="bt-cancel-blue font-no-size-color w-25"
            >Cancel</b-button
          >
        </router-link>
      </div>
      <div class="col text-left ml-4">
        <router-link :to="{ name: 'ProjectDetail' }" class="btn bt-blue font-no-size-color w-25">
          Save
        </router-link>
      </div>
      <!-- <div class="col"></div> -->
    </div>
  </div>
</template>


<script>
import Multiselect from "vue-multiselect";
export default {
  name:"ProjectEdit",
  component: { multiselect: Multiselect },
  data() {
    return {
      value: null,
      listUserMaintenance: [],
      listUserOwner: [
        { name: "kamonthip fa", id: 1 },
        { name: "airada ai", id: 2 },
        { name: "natawut game", id: 3 },
        { id: 40, name: "Dickerson Macdonald" },
        { id: 21, name: "Larsen Shaw" },
        { id: 89, name: "Geneva Wilson" },
        { id: 38, name: "Jami Carney" },
      ],
      valueMaintenance: [],
      valueOwner: [],
      
    };
  },
  mounted(){
    this.listUserMaintenance = this.listUserOwner
    this.$store.dispatch("header/setAllLinkHeader", "ProjectEdit");
  },
  methods: {
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
    nameWithLang({ name, id }) {
      return `${name} — [${id}]`;
    },
  },
  watch: {
    valueOwner: {
      handler: function (val, oldVal) {
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
