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
            <!-- <b-form-input v-model="selected" list="input-list" id="input-with-list" @change="onChange()"></b-form-input>
            <b-form-datalist
              id="input-list"
              :options="options"
            ></b-form-datalist>
            <b-form-tags
              input-id="tags-pills"
              v-model="value"
              tag-variant="primary"
              tag-pills
              size="lg"
              separator=" "
              placeholder="Enter new tags separated by space"
            ></b-form-tags> -->
            <multiselect
              v-model="value"
              placeholder="Name Lastname"
              label="name"
              track-by="id"
              :options="options"
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
    <!-- {{ options }}
    {{ value }} -->
  </div>
</template>


<script>
import Multiselect from "vue-multiselect";
export default {
  component: { multiselect: Multiselect },
  data() {
    return {
      options: [
        { name: "kamonthip fa", id: "01" },
        { name: "airada ai", id: "02" },
        { name: "natawut game", id: "03" },
      ],
      value: [],
    };
  },
  methods: {
    
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
