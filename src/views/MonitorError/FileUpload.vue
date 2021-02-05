<template>
  <div class="container">
    <b-button v-b-modal.modalPopover>Show Modal</b-button>

    <b-modal id="modalPopover" title="Modal with Popover" size="xl">
      <div class="row px-2">
        <div class="col-xl-8">
          <div class="row">
            <div class="col-4 font-gen text-right">Error ID :</div>
            <div class="col-8 font-detail text-left">
              {{ errorDetail.errorId }}
            </div>
          </div>
          <div class="row">
            <div class="col-4 font-gen text-right">Error Detail :</div>
            <div class="col-8 font-detail text-left">
              {{ errorDetail.errorDetail }}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4 font-gen text-right">User Assing :</div>
            <div class="col-8 font-detail text-left">
              <b-avatar
                v-for="(user, index) in errorDetail.userAssignment"
                :key="`user-${index}`"
                :text="getTextAvatar(user.userAssignId)"
                class="mr-1"
              >
              </b-avatar>
            </div>
          </div>
        </div>
        <div class="col-xl-4">test</div>
      </div>
      <div class="row">
        <div class="col">
          <font-awesome-icon
            :icon="['fas', 'upload']"
            class="icon-upload mx-2"
          />
          <label class="font-gen2 mx-2">File Upload</label>
          <b-button
            ref="select"
            class="bt-blue font-no-size-color mx-2"
            @click="$refs.fileInput.click()"
            ><font-awesome-icon :icon="['fas', 'paperclip']" class="" />
            แนบไฟล์</b-button
          >
          <input
            style="display: none"
            multiple
            type="file"
            ref="fileInput"
            @change="onFilePicked"
          />
          <hr />
          <div class="px-4">
            <b-card
              v-for="(item, index) in file"
              :key="index"
              class="my-3 shadow-sm"
            >
              <div class="d-flex justify-content-between">
                <div class="d-flex justify-content-start">
                  <font-awesome-icon
                    :icon="['far', 'file-alt']"
                    class="icon-file mr-3"
                  />
                  <div>
                    <label class="font-gen m-0"> {{ item.name }} </label> <br />
                    <label class="font-detail m-0">
                      {{
                        item.size / 1024 >= 1024
                          ? (item.size / 1024 / 1024).toFixed(2) + "MB"
                          : (item.size / 1024).toFixed(2) + "KB"
                      }}
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="text-center bt-download">
                    <font-awesome-icon
                      :icon="['fas', 'download']"
                      class="icon-size-18"
                    />
                    <br />
                    Download
                  </div>

                  <b-dropdown
                    class="dropdown-edit"
                    right
                    variant="link"
                    :ref="`dropdownEdit${index}`"
                    no-caret
                  >
                    <template #button-content>
                      <font-awesome-icon :icon="['fas', 'edit']" />
                      <br />
                      Edit
                    </template>
                    <b-dropdown-form class="text-center">
                      <div>
                        <label class="font-gen m-0">File Rename</label>
                        <hr />
                        <b-form-input @input="e => input(e, index)" :id="`input${index}`"></b-form-input>
                        <br />
                        <div class="row">
                          <div class="col">
                            <b-button
                              class="w-100 bt-cancel-grey py-1"
                              @click="$refs['dropdownEdit'+index][0].hide(true)"
                              >Cancel</b-button
                            >
                          </div>
                          <div class="col">
                            <b-button @click="update(index)" class="w-100 bt-green py-1"
                              >Update</b-button
                            >
                          </div>
                        </div>
                      </div>
                    </b-dropdown-form>
                  </b-dropdown>

                  <b-dropdown
                    class="dropdown-del"
                    right
                    variant="link"
                    :ref="`dropdownDel${index}`"
                    no-caret
                  >
                    <template #button-content>
                      <font-awesome-icon :icon="['fas', 'trash-alt']" />
                      <br />
                      Delete
                    </template>
                    <b-dropdown-form class="text-center">
                      <div>
                        <label class="font-gen m-0">Delete File?</label>
                        <hr />
                        <label class="font-detail m-0"
                          >Do you want to remove the file?</label
                        >
                        <br />
                        <div class="row mt-3">
                          <div class="col">
                            <b-button
                              class="w-100 bt-cancel-grey py-1"
                              @click="$refs['dropdownDel'+index][0].hide(true)"
                              >Cancel</b-button
                            >
                          </div>
                          <div class="col">
                            <b-button class="w-100 bt-red py-1"
                              >Delete</b-button
                            >
                          </div>
                        </div>
                      </div>
                    </b-dropdown-form>
                  </b-dropdown>
                </div>
              </div>
            </b-card>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "fileUpload-Test",
 
  data() {
    return {
      rename: "",
      file: [],
      errorDetail: {
        errorId: 123456789,
        errorDetail:
          "this is detail of xxx error example Some quick example text to build on the card title and make up the bulk of the card's content",
        userAssignment: [
          {
            userAssignId: 1,
          },
          {
            userAssignId: 2,
          },
        ],
        errorStatusId: 1,
        comment: [
          {
            errorId: 123456789,
            userId: 1,
            comment: "test comment 1",
          },
          {
            errorId: 123456789,
            userId: 2,
            comment: "test comment 2",
          },
          {
            errorId: 123456789,
            userId: 1,
            comment: "test comment 3",
          },
        ],
      },
      users: [
        {
          userId: 1,
          userName: "Kamonthip",
          userLastName: "Thethong",
        },
        {
          userId: 2,
          userName: "Airada",
          userLastName: "Stong",
        },
        {
          userId: 3,
          userName: "Natthawut",
          userLastName: "Chiphimon",
        },
      ],
    };
  },
  methods: {
    getTextAvatar(id) {
      this.users.forEach((user) => {
        if (user.userId === id) {
          console.log(`Test filter name: ${user.userName}`);
        }
      });
      return "T";
    },
    onFilePicked(event) {
      console.log(event.target.files);
      event.target.files.forEach((e) => {
        this.file.push(e);
      });
      console.log(this.file[0].name);
      this.$refs.select.focus = false;
    },
    cancelDel(index) {
      this.$refs['dropdownDel'+index][0].hide(true)
    },
    cancelEdit(index) {
      this.$refs['dropdownEdit'+index][0].hide(true)
      this.rename = ""
    },
    del(index){

    },
    input(e, index){
      // this.rename = e
      console.log(index)
    },
    update(index){
      console.log(document.getElementById("input"+index).value);
      document.getElementById("input"+index).value = ""
      this.$refs['dropdownEdit'+index][0].hide(true)
    },
  },
};
</script>

<style lang="scss">
.icon-file {
  font-size: 50px;
  color: #96a1ae;
}
.icon-upload {
  color: #0077ff;
  font-size: 18px;
}

.font-gen2 {
  font-family: "Prompt";
  font-style: normal;
  font-weight: bolder;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.bt-download {
  padding: 2px;
  width: 80px;
  background: none;
  font-family: "Prompt";
  font-style: normal;
  font-size: 14px;
  padding: 0px;
  color: #96a1ae;
  &:hover {
    color: #2fbc70;
  }
  &:active {
    color: #2fbc70;
  }
  svg {
    margin-top: 4px;
    font-size: 18px;
  }
}

.dropdown-edit {
  width: 80px;
  background: none;
  button {
    font-family: "Prompt";
    font-style: normal;
    font-size: 14px;
    padding: 0px;
    color: #96a1ae;
    &:hover {
      color: #0077ff;
    }
    &:active {
      color: #0077ff;
    }
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
    svg {
      font-size: 18px;
    }
  }
  ul {
    li {
      form {
        width: 300px;
      }
    }
  }
}

.dropdown-del {
  width: 80px;
  background: none;
  button {
    font-family: "Prompt";
    font-style: normal;
    font-size: 14px;
    padding: 0px;
    color: #96a1ae;
    &:hover {
      color: #bc4b51;
    }
    &:active {
      color: #bc4b51;
    }
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
    svg {
      font-size: 18px;
    }
  }
  ul {
    li {
      form {
        width: 300px;
      }
    }
  }
}
</style>