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
            <b-form-input v-model="selected" list="input-list" id="input-with-list" @change="onChange()"></b-form-input>
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
            ></b-form-tags>
            <!-- <AdvancedSearch
              class="shadow test"
              v-model="model"
              :options="options"
            >ffffff
            </AdvancedSearch> -->
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
      selected: '',
      options: ["airada stongtawarat", "kamon fa"],
      value: []
    };
  },
  methods:{
    onChange(){
      this.value.push(this.selected)
    }
  }
};
</script>
<style src="vue-advanced-search/dist/AdvancedSearch.css">
.test {
  border: 5px;
  color: brown;
  size: 50px;
  font-size: 50px;
}
</style>
