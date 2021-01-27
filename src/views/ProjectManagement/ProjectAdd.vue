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
            <AdvancedSearch
              class="shadow-sm"
              v-model="model"
              :options="options"
            >
            </AdvancedSearch>
            <!-- <b-form-input
              placeholder="Project Owner"
              type="text"
             
            ></b-form-input> -->
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
  </div>
</template>

<script>
import AdvancedSearch from "vue-advanced-search";
export default {
  components: { AdvancedSearch },
  data() {
    return {
      model: null,
      options: [
        { label: "airada stongtawarat", value: "value1" },
        { label: "kamon fa", value: "value2" },
      ],
    };
  },
};
</script>
<style src="vue-advanced-search/dist/AdvancedSearch.css"></style>
