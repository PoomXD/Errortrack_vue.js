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
          v-for="(task, index) in filteredRows"
          :key="index"
        >
          <b-card class="card-list">
            <b-card-title>{{ task.name }}</b-card-title>
            <b-card-text class="cut-text font-weight-light">
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
      <div>
        <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
        <b-modal id="modal-xl" size="xl" title="Extra Large Modal"
          ><div class="d-flex justify-content-start">
            <div class="p-2">
              <font-awesome-icon :icon="['fas', 'comment-dots']" />
            </div>
            <div class="p-2">Comment</div>
            <div class="p-2">(12 Comment)</div>
          </div>
          <hr />
          <div class="pl-5 pr-5">
            <div id="Comment">
              <b-row>
                <b-col class="d-flex justify-content-start">
                  <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
                  <div class="align-middle">User name</div>
                </b-col>
              </b-row>
              <div class="card-list ml-5 p-1">
                <b-form-textarea
                  no-resize
                  class="border-0 textaera"
                  placeholder="Write a commet..."
                ></b-form-textarea>
                <div class="d-flex justify-content-end">
                  <b-button variant="outline-secondary" class="m-2 comment-size-buttom"
                    >Cancel</b-button
                  >
                  <b-button variant="success" class="m-2 comment-size-buttom">Save</b-button>
                </div>
              </div>
            </div>
            <div
              id="Comment"
              v-for="(message, index) in listMessage"
              :key="index"
            >
              <b-row>
                <b-col class="d-flex justify-content-start">
                  <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
                  <div class="align-middle">{{ message.username }}</div>
                </b-col>
                <b-col class="d-flex justify-content-end"
                  ><div class="align-middle fontColor-comment">{{ message.date }}</div></b-col
                >
              </b-row>
              <div class="card-list mb-1 ml-5 p-2 textareabackgrou fontColor-comment">
                {{ message.message }}
              </div>
              <div
                class="d-flex justify-content-start ml-5 "
                v-if="message.id === 2"
              >
                <a href="" class="fontColor-comment mr-4">Edit</a>
                <a href="" class="fontColor-comment">Delete</a>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskError",
  computed: {
    filteredRows() {
      return this.listTasks.filter((row) => {
        row;
        return this.selected.includes(row.status);
      });
    },
  },
  methods: {},
  updated() {},
  data() {
    return {
      listMessage: [
        {
          id: 1,
          username: "Game Kanna",
          message:
            "Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.",
          date: "Dec 17 at 11:01AM",
        },
        {
          id: 1,
          username: "Game Kanna",
          message:
            "Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.",
          date: "Dec 17 at 11:01AM",
        },
        {
          id: 2,
          username: "Fa kamontip",
          message:
            "Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.",
          date: "Dec 17 at 11:01AM",
        },
        {
          id: 4,
          username: "Airada",
          message:
            "Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.",
          date: "Dec 17 at 11:01AM",
        },
      ],
      selected: ["doing", "todo", "waiting", "done", "testing"], // Must be an array reference!
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
          detail:
            "Detail Error 1 Connect not sucess Detail Error 1 Connect not sucess Detail Error 1Connect not sucess Detail Error 1Connect not sucess Detail Error 1Connect not sucess Detail Error 1",
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
          detail:
            "Render groups of checkboxes with the look of a button-group by setting the prop buttons on <b-form-checkbox-group>. Change the button variant by setting the button-variant prop to one of the standard Bootstrap button variants (see <b-button> for supported variants). The default button-variant is secondary.",
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
.textarea:focus {
  outline: none !important;
  box-shadow: none !important;
}
.textareabackgrou {
  background-color: #f4f9ff;
}
.fontColor-comment{
  color: #96A1AE;
}
.comment-size-buttom{
  width: 100px;
}
</style>
