<template>
  <div class="container" id="ModalForTask">
    <div class="row px-1 mb-2">
      <div class="col-xl-7 col-lg-12">
        <div class="row">
          <div class="col-3 font-gen text-right">Error ID :</div>
          <div class="col-9 font-detail text-left">
            {{ errorDetail.errorId }}
          </div>
        </div>
        <div class="row">
          <div class="col-3 font-gen text-right">Error Detail :</div>
          <div class="col-9 font-detail text-left">
            {{ errorDetail.errorDetail }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-3 font-gen text-right">User Assign :</div>
          <div class="col-9 font-detail text-left">
            <div
              class="wrap"
              v-for="(user, index) in errorDetail.userAssignment"
              :key="`user-${index}`"
            >
              <b-avatar 
                :id="`popover-${index}-${user.userId}`"
                class="avatar-owner" 
                :text="getTextAvatar(user.userId)"
              >
              </b-avatar>
              <span class="wrap-span" @click="delUser(user.userId)">
                <font-awesome-icon :icon="['fas', 'times']" />
              </span>
              <b-popover
                :target="`popover-${index}-${user.userId}`"
                :placement="'bottom'"
                triggers="hover focus"
                :content="getNameAvatar(user.userId)"
              ></b-popover>
            </div>

            <b-dropdown
              right
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="hide-bt"
              :menu-class="{
                'prevent-close': showDropdown == true,
                'show-dropdown': showDropdown == false,
              }"
              id="dropdown-member"
            >
              <template #button-content>
                <button class="no-color" @click="show()">
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
              </template>
              <b-dropdown-header href="#">
                <div class="row">
                  <div class="col font-topic">Add User Assign</div>
                  <div class="col text-right">
                    <b-button class="no-color" @click="closeDropDown()">
                      x
                    </b-button>
                  </div>
                </div>
              </b-dropdown-header>

              <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-form>
                <b-form-group>
                  <b-form-input
                    v-model="filterText"
                    id="dropdown-form-member"
                    placeholder="Search Member"
                  ></b-form-input>

                  <b-dropdown-item disabled> User Assign </b-dropdown-item>
                  <div class="menu-width">
                    <b-dropdown-item
                      href="#"
                      @click="pick(userInList.userId)"
                      v-for="(userInList, i) in filteredUsers"
                      :key="`userInList-${i}`"
                    >
                      <b-avatar size="sm" class="avatar-owner">{{
                        userInList.text
                      }}</b-avatar>
                      {{ userInList.userName }}

                      <div
                        v-if="userInList.selected == true"
                        class="float-right"
                      >
                        <font-awesome-icon :icon="['fas', 'check']" />
                      </div>
                    </b-dropdown-item>
                  </div>
                </b-form-group>
              </b-dropdown-form>
            </b-dropdown>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-12">
        <div class="row">
          <div class="col-xl-4 col-lg-12 font-gen">Error Status :</div>
          <div class="col-xl-8 col-lg-12 font-detail">
            <b-form-select
              v-model="selected"
              id="Error_Status"
              :options="options"
              @change="confirmChange()"
            ></b-form-select>
          </div>
        </div>
      </div>
    </div>

    <!-- ############################################## file upload ############################################ -->

    <div class="row py-5">
      <div class="col">
        <font-awesome-icon :icon="['fas', 'upload']" class="icon-upload mx-2" />
        <label class="font-gen2 mx-2">File Upload</label>
        <b-button
          ref="select"
          class="bt-blue font-no-size-color mx-2"
          @click="$refs.fileInput.click()"
          ><font-awesome-icon :icon="['fas', 'paperclip']" class="" />
          แนบไฟล์</b-button
        >
        <form>
          <input
            style="display: none"
            multiple
            type="file"
            ref="fileInput"
            accept="image/png,
             image/jpeg,
              image/jpg,
               text/plain,
                application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                 application/msword,
                  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            @change="onFilePicked"
          />
        </form>
        <hr />
        <div class="px-5">
          <b-card v-for="item in fileDB" :key="item.id" class="my-3 shadow-sm">
            <div class="d-flex justify-content-between">
              <div class="d-flex justify-content-start">
                <font-awesome-icon
                  :icon="['far', 'file-alt']"
                  class="icon-file mr-3"
                />
                <div class="">
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
                <div class="text-center bt-download" @click="NewTab(item.path)">
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
                  :ref="`dropdownEdit${item.id}`"
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
                      <b-form-input
                        :id="`input${item.id}`"
                        :value="item.name"
                        @keydown.enter.prevent="update(item.id)"
                      ></b-form-input>
                      <br />
                      <div class="row">
                        <div class="col">
                          <b-button
                            class="w-100 bt-cancel-grey py-1"
                            @click="
                              $refs['dropdownEdit' + item.id][0].hide(true)
                            "
                            >Cancel</b-button
                          >
                        </div>
                        <div class="col">
                          <b-button
                            @click="update(item.id)"
                            class="w-100 bt-green py-1"
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
                  :ref="`dropdownDel${item.id}`"
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
                            @click="
                              $refs['dropdownDel' + item.id][0].hide(true)
                            "
                            >Cancel</b-button
                          >
                        </div>
                        <div class="col">
                          <b-button
                            class="w-100 bt-red py-1"
                            @click="del(item.id)"
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

    <!-- ######################################### comment ################################################### -->
    <div class="d-flex justify-content-start">
      <div class="p-2">
        <font-awesome-icon
          class="icon-upload"
          :icon="['fas', 'comment-dots']"
        />
      </div>
      <div class="p-2 font-gen2 mx-2">Comment</div>
      <div class="p-2 font-detail">
        ( {{ errorDetail.comment.length }} Comment )
      </div>
    </div>
    <hr />
    <div class="pl-5 pr-5">
      <div id="Comment">
        <b-row>
          <b-col class="d-flex justify-content-start">
            <b-avatar
              variant="primary"
              :text="getTextAvatar(userLogin)"
              class="mr-3 font-no-size-color"
            ></b-avatar>
            <div class="align-middle font-gen">
              {{ getNameUser(userLogin) }}
            </div>
          </b-col>
        </b-row>
        <div class="card-list ml-5 p-1 ">
          <b-form-textarea 
            v-model="commentInput"
            no-resize
            class="border-0 textaera font-detail diseble-box-shadow"
            placeholder="Write a commet..."
          ></b-form-textarea>
          <div class="d-flex justify-content-end">
            <b-button
              id="cancel"
              class="m-2 comment-size-buttom bt-cancel-grey"
              @click="commentInput = ''"
              >Cancel</b-button
            >
            <b-button
              id="savecomment"
              class="m-2 comment-size-buttom bt-green"
              @click="saveComment()"
              >Save</b-button
            >
          </div>
        </div>
      </div>
      <!-- message -->
      <div
        id="Comment"
        v-for="(message, index) in errorDetail.comment"
        :key="index"
      >
        <div :id="`comment${message.commentId}`">
          <b-row>
            <b-col class="d-flex justify-content-start">
              <b-avatar
                variant="primary"
                :text="getTextAvatar(message.userId)"
                class="mr-3 font-no-size-color"
              ></b-avatar>
              <div class="align-middle font-gen">
                {{ getNameUser(message.userId) }}
              </div>
            </b-col>
            <b-col class="d-flex justify-content-end"
              ><div class="align-middle fontColor-comment font-detail">
                {{ getDateTimeForShow(message.commentDate) }}
              </div></b-col
            >
          </b-row>
          <div
            class="card-list mb-1 ml-5 p-2 textareabackgrou fontColor-comment font-detail"
          >
            {{ message.commentDetail }}
          </div>
          <div
            class="d-flex justify-content-start ml-5"
            v-if="message.userId === userLogin"
          >
            <a
              class="fontColor-comment mr-4 cursor-pointer font-detail"
              id="Edit"
              @click="
                editComment(
                  message.commentDetail,
                  `comment${message.commentId}`,
                  `editComment${message.commentId}`
                )
              "
            >
              Edit
            </a>
            <a
              id="Delete"
              class="fontColor-comment cursor-pointer font-detail"
              @click="delComment(message.commentId)"
            >
              Delete
            </a>
          </div>
        </div>
        <!-- Edit comment -->
        <div
          :ref="`editComment${indexError}${index}`"
          :style="{ display: 'none' }"
          :id="`editComment${message.commentId}`"
        >
          <b-row>
            <b-col class="d-flex justify-content-start">
              <b-avatar
                variant="primary"
                :text="getTextAvatar(message.userId)"
                class="mr-3 font-no-size-color"
              ></b-avatar>
              <div class="align-middle font-gen">
                {{ getNameUser(message.userId) }}
              </div>
            </b-col>
          </b-row>
          <div class="card-list ml-5 p-1 ">
            <b-form-textarea
              :id="`EditComment${message.commentId}`"
              no-resize
              class="border-0 textaera"
              v-model="commentEdit"
            >
            </b-form-textarea>

            <div class="d-flex justify-content-end">
              <b-button
                class="m-2 comment-size-buttom bt-cancel-grey"
                @click="
                  cancelEditComment(
                    `comment${message.commentId}`,
                    `editComment${message.commentId}`
                  )
                "
                >Cancel</b-button
              >
              <b-button
                class="m-2 comment-size-buttom bt-green"
                @click="editMyComment(message.commentId)"
                >Save</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swal from "sweetalert2";
import ErrorService from "@/services/api/error.service";
import FileService from "@/services/api/file.service";
import ProjectService from "@/services/api/project.service";
import moment from "moment";
import axios from "axios";
export default {
  methods: {
    NewTab(path) {
      console.log(`${process.env.VUE_APP_BASE_API}file/${path}`)
      window.open(`${process.env.VUE_APP_BASE_API}file/${path}`, "_blank");
    },
    onFilePicked(event) {
      const formData = new FormData();
      var typecheck = true;
      var type = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "text/plain",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      event.target.files.forEach((e) => {
        if (!type.includes(e.type)) {
          typecheck = false;
        }

        this.file.push(e);
        formData.append("Files", e);
      });
      if (typecheck) {
        formData.append("errorId", this.indexError);
        this.submitFile(formData);
      } else {
        this.alertForUploadFile();
      }
    },
    async submitFile(formData) {
      await FileService.addFile(formData).then((result) => {
        this.getListFile(this.indexError);
      });
    },
    getError(errId) {
      ErrorService.getErrorById(errId).then((result) => {
        this.errorDetail.errorId = result.errorId;
        this.errorDetail.errorDetail = result.errorDetail;
        this.selected = result.errorStatusId;
        if (result.comment == null) {
          this.errorDetail.comment = [];
        } else {
          this.errorDetail.comment = JSON.parse(result.comment);
        }

        if (result.userAssignment == null) {
          this.errorDetail.userAssignment = [];
        } else {
          this.errorDetail.userAssignment = JSON.parse(result.userAssignment);
        }

        this.addPickUsers();
      });
    },
    editComment(str, index, index2) {
      this.commentEdit = str;
      document.getElementById(index).style.display = "none";
      document.getElementById(index2).style.display = "block";
    },
    cancelEditComment(index, index2) {
      document.getElementById(index).style.display = "block";
      document.getElementById(index2).style.display = "none";
    },
    getTextAvatar(id) {
      let text = "";
      this.dataUser.forEach((user) => {
        if (user.id === id) {
          if (user.firstName != "" && user.lastName != "") {
            text = `${user.firstName[0]}${user.lastName[0]}`;
          } else if (user.firstName != "" && user.lastName == "") {
            text = `${user.firstName[0]}`;
          } else {
            text = `Un`;
          }
        }
      });
      return text;
    },
    getNameAvatar(id) {
      let name = "";
      this.dataUser.forEach((user) => {
        if (user.id === id) {
          if (user.firstName != "" && user.lastName != "") {
            name = `${user.firstName} ${user.lastName}`;
          } else if (user.firstName != "" && user.lastName == "") {
            name = `${user.firstName}`;
          } else {
            name = `Unknow`;
          }
        }
      });
      return name;
    },
    pick(id) {
      this.showDropdown = true;

      this.pickUsers.forEach((p) => {
        if (p.userId === id) {
          if (p.selected === true) {
            p.selected = false;

            //============== delete user =================
            let res = this.errorDetail.userAssignment;

            res = res.filter((data) => data.userId !== id);

            //=================== call service ===================
            let updateParam = {
              errorId: this.errorDetail.errorId,
              userAssigns: res,
              errorStatusId: this.selected,
            };

            this.updateUserAndStatus(updateParam).then((re) => {
              if (re.status) {
                this.errorDetail.userAssignment = res;
              }
            });
          } else {
            p.selected = true;
            let addUser = {
              userId: p.userId,
            };

            let addNewUser = this.errorDetail.userAssignment;
            addNewUser.push(addUser);

            //=================== call service ===================
            let updateParam = {
              errorId: this.errorDetail.errorId,
              userAssigns: this.errorDetail.userAssignment,
              errorStatusId: this.selected,
            };

            this.updateUserAndStatus(updateParam).then((re) => {
              if (re.status) {
                this.errorDetail.userAssignment = addNewUser;
              }
            });
          }
        }
      });
    },
    delUser(id) {
      this.pickUsers.forEach((p) => {
        if (p.userId === id) {
          p.selected = false;

          //============== delete user =================
          let res = this.errorDetail.userAssignment;

          res = res.filter((data) => data.userId !== id);

          this.errorDetail.userAssignment = res;

          //=================== call service ===================
          let updateParam = {
            errorId: this.errorDetail.errorId,
            userAssigns: res,
            errorStatusId: this.selected,
          };

          this.updateUserAndStatus(updateParam).then((re) => {
            if (re.status) {
              this.errorDetail.userAssignment = res;
            }
          });
        }
      });
    },
    show() {
      this.showDropdown = true;
    },
    closeDropDown() {
      this.showDropdown = false;
    },
    alertForUploadFile() {
      Swal.fire({
        icon: "error",
        title: "Type of file don't support",
        text: "please select .png, .jpg, ,jpeg, .txt, .xlsx, .doc, .docx",
      });
    },
    confirmChange() {
      Swal.fire({
        title: "Edit Status",
        text: "Do you want to change this error status?",
        icon: "warning",
        confirmButtonText: "OK",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let updateParam = {
            errorId: this.errorDetail.errorId,
            userAssigns: this.errorDetail.userAssignment,
            errorStatusId: this.selected,
          };

          this.updateUserAndStatus(updateParam).then((re) => {
            if (re.status) {
              this.errorDetail.errorStatusId = this.selected;
            }
          });
        } else {
          this.selected = this.errorDetail.errorStatusId;
        }
      });
    },

    // ################################### file upload method ####################

    async del(index) {
      // delby index
      let param = {
        fileId: index,
      };
      await FileService.deleteFile(param);
      this.getListFile(this.indexError);
      this.$refs["dropdownDel" + index][0].hide(true);
    },
    async update(index) {
      let params = {
        fileId: index,
        fileName: document.getElementById("input" + index).value,
      };
      await FileService.renameFile(params);
      this.getListFile(this.indexError);
      document.getElementById("input" + index).value = "";
      this.$refs["dropdownEdit" + index][0].hide(true);
    },
    getNameUser(userId) {
      let name = "";
      this.dataUser.forEach((user) => {
        if (user.id === userId) {
          name = `${user.firstName} ${user.lastName}`;
        }
      });
      return name;
    },
    getListFile(errorId) {
      FileService.getListFile(errorId).then((result) => {
        this.fileDB = [];
        result.forEach((data) => {
          this.fileDB.push({
            name: data.fileName,
            size: data.fileSize,
            id: data.fileId,
            path: data.fileRename,
          });
        });
      });
    },
    addPickUsers() {
      this.users = [];
      ProjectService.getProject(this.projectId).then((result) => {
        result.userOwner.forEach((user) => {
          this.users.push(user);
        });
        result.userMaintenance.forEach((user) => {
          this.users.push(user);
        });

        this.dataUser.forEach((user) => {
          this.users.forEach((us) => {
            if (user.id === us.userId) {
              let text = "";
              if (user.firstName != "" && user.lastName != "") {
                text = `${user.firstName[0]}${user.lastName[0]}`;
              } else if (user.firstName != "" && user.lastName == "") {
                text = `${user.firstName[0]}`;
              } else {
                text = `Un`;
              }
              let addToPick = {
                userId: user.id,
                userName: `${user.firstName} ${user.lastName}`,
                text: text,
                selected: false,
              };
              this.pickUsers.push(addToPick);
            }
          });
        });

        this.errorDetail.userAssignment.forEach((userAss) => {
          this.pickUsers.forEach((pUser) => {
            if (userAss.userId == pUser.userId) {
              pUser.selected = true;
            }
          });
        });
      });
    },
    updateUserAndStatus(upParam) {
      return ErrorService.updateUsersAndErrorStatus(upParam);
    },
    addComment(param) {
      return ErrorService.addNewComment(param);
    },
    saveComment() {
      if (!this.commentInput == "") {
        let commentParam = {
          errorId: this.errorDetail.errorId,
          userId: this.userLogin,
          comment: this.commentInput,
        };

        this.addComment(commentParam).then((res) => {
          if (res.status) {
            ErrorService.getComment(this.errorDetail.errorId).then((com) => {
              this.errorDetail.comment = com;
              this.commentInput = "";
            });
          }
        });
      }
    },
    editMyComment(ind) {
      let com = document.getElementById("EditComment" + ind).value;
      let editCommentParam = {
        errorId: this.errorDetail.errorId,
        commentId: ind,
        comment: com,
      };

      ErrorService.editComment(editCommentParam).then((result) => {
        if (result.status) {
          ErrorService.getComment(this.errorDetail.errorId).then((com) => {
            this.errorDetail.comment = com;
            this.commentInput = "";

            this.cancelEditComment(`comment${ind}`, `editComment${ind}`);
          });
        }
      });
    },
    delComment(commentId) {
      Swal.fire({
        title: "Delete Comment",
        text: "Do you want to delete this comment?",
        icon: "warning",
        confirmButtonText: "Yes",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let delParam = {
            errorId: this.errorDetail.errorId,
            commentId: commentId,
          };

          ErrorService.deleteComment(delParam).then((result) => {
            if (result.status) {
              ErrorService.getComment(this.errorDetail.errorId).then((com) => {
                this.errorDetail.comment = com;
              });
            }
          });
        }
      });
    },
    getDateTimeForShow(strDateTime) {
      return moment(strDateTime).format("MM/DD/YYYY hh:mm");
    },
  },
  props: {
    indexError: {
      type: [Number],
    },
    projectId: {
      type: [Number],
    },
  },
  name: "modal-task",
  data() {
    return {
      selected: "",
      rename: "",
      uploadPercentage: [],
      file: [],
      fileDB: [],
      errorDetail: {
        errorId: 0,
        errorDetail: "",
        userAssignment: [],
        errorStatusId: 1,
        comment: [],
      },
      pickUsers: [],
      showDropdown: false,
      filterText: "",
      userLogin: null,
      commentInput: "",
      commentEdit: "",
    };
  },

  computed: {
    filteredUsers() {
      return this.pickUsers.filter((row) => {
        const userName = row.userName.toLowerCase();
        const searchTerm = this.filterText.toLowerCase();

        return userName.includes(searchTerm);
      });
    },
    ...mapState({
      options: (state) => state.errorStatus.status,
      dataUser: (store) => store.user.users,
    }),
  },
  mounted() {
    //call service get error by id
    this.getError(this.indexError);
    this.getListFile(this.indexError);
    this.userLogin = localStorage.getItem("userId");
  },
};
</script>

<style>
.menu-width {
  width: 350px;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 5px;
}
.show-dropdown {
  display: none !important;
}
.prevent-close {
  display: block !important;
}
.hide-bt {
  /* display: inline-block; */
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
  color: #96a1ae;
  background-color: #e3e3e3;
}

.hide-bt:focus {
  /* display: inline-block; */
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
  color: #96a1ae;
  background-color: #bdbaba;
}
.hide-bt:hover {
  /* display: inline-block; */
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
  color: #96a1ae;
  background-color: #bdbaba;
}
.hide-bt:active {
  /* display: inline-block; */
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
  color: #96a1ae;
  background-color: #bdbaba;
}
.no-color {
  color: grey;
  padding-left: 2px;
  border: none;
  background-color: inherit;
}
.no-color:hover {
  color: grey;
  border: none;
  background-color: inherit;
}
.no-color:active {
  color: grey;
  border: none;
  background-color: inherit;
}
.dropdown-bt {
  color: #96a1ae;
  background-color: #e3e3e3;
  border: none;
  border-radius: 100%;
}
.dropdown-bt:hover {
  color: #96a1ae;
  background-color: #e3e3e3;
  border: none;
  border-radius: 100%;
}
.dropdown-bt:focus {
  color: #96a1ae;
  background-color: #e3e3e3;
  border: none;
  border-radius: 100%;
}
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
.fontColor-comment {
  color: #96a1ae;
}
.comment-size-buttom {
  width: 100px;
}
.diseble-box-shadow:focus{
  box-shadow :0 0 0 0.2rem rgb(0 0 0 / 0%);
}
</style>
