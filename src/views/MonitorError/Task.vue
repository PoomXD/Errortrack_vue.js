<template>
  <div>
    <div class="p-5 background-container">
      <div class="row">
        <div class="col-xl col-lg-12">
          <ul class="p-0">
            <li class="list-inline-item">
              <p class="font-weight-bold">Project Name :</p>
            </li>
            <li class="list-inline-item ">
              <p class="font-weight-light">Covid 19 Airports project</p>
            </li>
          </ul>
          <ul class="p-0">
            <li class="list-inline-item">
              <p class="font-weight-bold">Project Owner :</p>
            </li>
            <li class="list-inline-item">
              <p class="font-weight-light">Covid 19 Airports project</p>
            </li>
          </ul>
          <ul class="p-0">
            <li class="list-inline-item">
              <p class="font-weight-bold">Service ID :</p>
            </li>
            <li class="list-inline-item">
              <p class="font-weight-light">Covid 19 Airports project</p>
            </li>
          </ul>
        </div>
        <div class="col-xl-6 col-lg-12">
          <ul class="p-0">
            <li class="list-inline-item">
              <p class="font-weight-bold">Service Name :</p>
            </li>
            <li class="list-inline-item">
              <p class="font-weight-light">Covid 19 Airports project</p>
            </li>
          </ul>
          <ul class=" p-0">
            <li class="list-inline-item ">
              <p class="font-weight-bold">User Maintenance :</p>
            </li>
            <li class="list-inline-item">
              <p class="font-weight-light">Covid 19 Airports project</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-5 background-container mt-5">
      <div class="row">
        <div class="col-xl-4 col-lg-5 col-sm-8 align-middle">
          <h5>สถานะ Service Error</h5>
        </div>
        <div class="col-xl-8 col-lg-7 col-sm-4">
          <div class="d-flex justify-content-end">
            <b-form-group v-slot="{ ariaDescribedby }" class="display-task">
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
              class="m-2 display-dropdow-task"
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
          v-for="(task, index) in listTasks"
          :key="index"
        >
          <b-card class="card-list">
            <b-card-title>{{ task.name }}</b-card-title>
            <b-card-text>
              {{ task.detail }}
            </b-card-text>
            <div class="d-flex justify-content-end">
              <div
                class="status-waiting rounded-pill"
                v-if="task.status == 'waiting'"
              >
                <p class="fw-bold m-0 text-center white-space">
                  Waiting
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-todo rounded-pill"
                v-if="task.status == 'todo'"
              >
                <p class="fw-bold m-0 text-center white-space">
                  To do
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-doing rounded-pill"
                v-if="task.status == 'doing'"
              >
                <p class="fw-bold m-0 text-center white-space">
                  Doing
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-testing rounded-pill"
                v-if="task.status == 'testing'"
              >
                <p class="fw-bold m-0 text-center white-space">
                  Testing
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
              <div
                class="status-done rounded-pill"
                v-if="task.status == 'done'"
              >
                <p class="fw-bold m-0 text-center white-space">
                  Done
                  <font-awesome-icon
                    class="font-status"
                    :icon="['fas', 'tag']"
                  />
                </p>
              </div>
            </div>
          </b-card>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskError",
  mounted() {
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Waiting", value: "waiting" },
        { text: "To do", value: "todo" },
        { text: "Doing", value: "doing" },
        { text: "Testing", value: "testing" },
        { text: "Done", value: "done" },
      ],
      listTasks: [
        {
          name: "ERROR1",
          detail: "Detail Error 1 Connect not sucess",
          status: "waiting",
        },
        {
          name: "ERROR2",
          detail: "Detail Error 1 Connect not sucess",
          status: "waiting",
        },
        {
          name: "ERROR1",
          detail: "Detail Error 1 Connect not sucess",
          status: "waiting",
        },
        {
          name: "ERROR1",
          detail: "Detail Error 1 Connect not sucess",
          status: "done",
        },
        {
          name: "ERROR1",
          detail: "Detail Error 1 Connect not sucess",
          status: "testing",
        },
        {
          name: "ERROR1",
          detail: "Detail Error 1 Connect not sucess",
          status: "todo",
        },
        {
          name: "ERROR1",
          detail: "Detail Error 1 Connect not sucess",
          status: "doing",
        },
      ],
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
</style>
