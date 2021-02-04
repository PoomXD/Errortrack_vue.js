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
              v-for="item in file"
              :key="item.name"
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
                  <div class="text-center icon-download mx-2">
                    <font-awesome-icon
                      :icon="['fas', 'download']"
                      class="icon-size-18"
                    />
                    <br />
                    Download
                  </div>
                  <div class="text-center mx-2 icon-edit">
                    <font-awesome-icon
                      :icon="['fas', 'edit']"
                      class="icon-size-18"
                    />
                    <br />
                    Edit
                  </div>
                  <div class="text-center icon-delete mx-2">
                    <font-awesome-icon
                      :icon="['fas', 'trash-alt']"
                      class="icon-size-18"
                    />
                    <br />
                    Delete
                  </div>
                  <b-dropdown class="bt-grey" right variant="link" ref="dropdowDel" no-caret>
                    <template #button-content>
                      <font-awesome-icon :icon="['fas', 'trash-alt']" />
                      <br />
                      Delete
                    </template>
                    <b-dropdown-form class="text-center">
                      <div>
                        <label class="font-gen m-0">Delete File?</label>
                        <hr />
                        <label class="font-detail m-0">Do you want to remove the file?</label>
                        <br>
                        <div class="row mt-3">
                          <div class="col"><b-button class="w-100 bt-cancel-grey" @click="cancelDel()">Cancel</b-button></div>
                          <div class="col"><b-button class="w-100 bt-red">Delete</b-button></div>
                        </div>
                        <!-- <b-button>Cancel</b-button><b-button>Delete</b-button> -->
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
    cancelDel() {
      alert("dropdowDel")
      this.$refs.dropdowDel.show(false)
    },
  },
};
</script>

<style lang="scss">
.icon-file {
  font-size: 50px;
  color: #96a1ae;
}
.icon-size-18 {
  font-size: 18px;
}
.icon-upload {
  color: #0077ff;
  font-size: 18px;
}
.icon-download {
  font-family: "Prompt";
  font-style: normal;
  font-size: 14px;
  color: grey;
}
.icon-download:hover {
  color: #2fbc70;
}
.icon-edit {
  font-family: "Prompt";
  font-style: normal;
  font-size: 14px;
  color: grey;
}
.icon-edit:hover {
  color: #0077ff;
}
.icon-delete {
  font-family: "Prompt";
  font-style: normal;
  font-size: 14px;
  color: grey;
}
.icon-delete:active {
  color: #bc4b51;
}
.font-gen2 {
  font-family: "Prompt";
  font-style: normal;
  font-weight: bolder;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.bt-grey {
  width: 80px;
  background: none;
  button {
    padding: 0px;
    color: #96a1ae;
    &:hover {
      color: #bc4b51;
    }
    &:active {
      color: #bc4b51;
    }
    svg {
      font-size: 18px;
    }
  }
  ul{
    li{
      form{
        width: 300px;
      }
    }
  }
  
}
</style>