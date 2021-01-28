<template>
  <div class="container-main">
    <div class="row">
      <div class="col">
        <div class="row mb-3">
          <div class="col-3 text-right">Project ID :</div>
          <div class="col-8">
            <b-form-input
              placeholder="xxxx"
              type="text"
              class="shadow-sm"
            ></b-form-input>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-3 text-right">Project Name :</div>
          <div class="col-8">
            <b-form-input
              placeholder="Project Name"
              type="text"
              class="shadow-sm"
            ></b-form-input>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-3 text-right">Project Owner :</div>
          <div class="col-8">
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
          <div class="col-3 text-right">Project Details :</div>
          <div class="col-8">
            <b-form-textarea type="text" class="shadow-sm"></b-form-textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-3">
      <div class="col text-left">
        User maintenance :
        <table>
          <tr>
            <th>No</th>
            <th>First - Last Name</th>
            <th></th>
          </tr>
          <tr>
            <td></td>
            <td>
              <multiselect
                v-model="value"
                :options="listUserMaintenance"
                placeholder="Select one"
                label="name"
                track-by="name"
              ></multiselect>
              <!-- <b-form-input list="input-list" v-model.lazy="value"></b-form-input>
              <b-form-datalist
                id="input-list"
                text-field="id"
                value-field="name"
                :options="listUserMaintenance"
              ></b-form-datalist> -->

              <!-- <b-form-datalist id="input-list">
                <obtion v-for="value in items" :key="value.value" :value="value.value" >{{ value.text }}</obtion>
              </b-form-datalist> -->
            </td>
            <td>
              <font-awesome-icon
                :icon="['fas', 'plus-circle']"
                @click="addUserMaintenance()"
              />
            </td>
          </tr>
          <tr v-for="(item, index) in valueMaintenance" :key="`item-${index}`">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <font-awesome-icon
                :icon="['fas', 'trash-alt']"
                @click="delUserMaintenance(item)"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- listUserOwner {{ listUserOwner.length }} <br />
    {{ listUserOwner }} <br />
    valueOwner {{ valueOwner.length }} <br />
    {{ valueOwner }} <br />
    valueMaintenance {{ valueMaintenance.length }} <br />
    {{ valueMaintenance }} <br />-->
    <!-- listUserMaintenance {{ listUserMaintenance.length }} <br />
    {{ listUserMaintenance }} <br>  -->
    <!-- value
    {{ value }} -->
  </div>
</template>


<script>
import Multiselect from "vue-multiselect";
export default {
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
      fields: [
        {
          key: "no",
          sortable: true,
        },
        {
          key: "name",
          label: "First - Last Name",
          sortable: true,
        },
        {
          key: "button",
          label: " ",
          sortable: true,
          // variant: "danger",
        },
      ],
    };
  },
  methods: {
    addUserMaintenance() {
      this.valueMaintenance.push({ name: this.value.name, id: this.value.id });
      let res = this.listUserMaintenance;
      this.valueMaintenance.forEach((e) => {
        res = res.filter((data) => data.id !== e.id);
      });
      this.listUserMaintenance = res;
      this.value = null;
    },
    delUserMaintenance(data){
      // console.log(data)
      this.listUserMaintenance.push(data)
      let res = this.valueMaintenance
      res = res.filter(val => val.id != data.id)
      // console.log(res)
      this.valueMaintenance = res
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
.test {
  border: 5px;
  color: brown;
  size: 50px;
  font-size: 50px;
}
</style>
