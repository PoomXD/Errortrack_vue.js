<template>
  <div class="container">
    <div class="row px-1 mb-2">
      <div class="col-xl-7 col-lg-12">
        <div class="row">
          <div class="col-3 font-gen text-right">
            Error ID :
          </div>
          <div class="col-9 font-detail text-left">
            {{ errorDetail.errorId }}
          </div>
        </div>
        <div class="row">
          <div class="col-3 font-gen text-right">
            Error Detail :
          </div>
          <div class="col-9 font-detail text-left">
            {{ errorDetail.errorDetail }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-3 font-gen text-right">
            User Assign :
          </div>
          <div class="col-9 font-detail text-left">
            <div
              class="wrap"
              v-for="(user, index) in errorDetail.userAssignment"
              :key="`user-${index}`"
            >
              <b-avatar
                class="avatar-owner"
                :text="getTextAvatar(user.userAssignId)"
              >
              </b-avatar>
              <span class="wrap-span" @click="delUser(user.userAssignId)">
                <font-awesome-icon :icon="['fas', 'times']" />
              </span>
            </div>

            <!-- <div
                                v-for="(user, index) in errorDetail.userAssignment"
                                :key="`user-${index}`"
                                class="avatar-with-bt"
                            >
                                <b-avatar
                                    
                                    :text="getTextAvatar(user.userAssignId)"
                                    class="mr-1 avatar-owner mt-1"
                                >
                                    
                                </b-avatar>
                                <span class="del-bt-in-avatar">x</span>
                            </div> -->

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
                  <div class="col font-topic">
                    Add User Assign
                  </div>
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

                  <b-dropdown-item disabled>
                    User Assign
                  </b-dropdown-item>
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
          <div class="col-xl-4 col-lg-12 font-gen">
            Error Status :
          </div>
          <div class="col-xl-8 col-lg-12 font-detail">
            <b-form-select
              v-model="selected"
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
        <input
          style="display: none"
          multiple
          type="file"
          ref="fileInput"
          @change="onFilePicked"
        />
        <hr />
        <div class="px-5">
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
                      <b-form-input :id="`input${index}`"></b-form-input>
                      <br />
                      <div class="row">
                        <div class="col">
                          <b-button
                            class="w-100 bt-cancel-grey py-1"
                            @click="$refs['dropdownEdit' + index][0].hide(true)"
                            >Cancel</b-button
                          >
                        </div>
                        <div class="col">
                          <b-button
                            @click="update(index)"
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
                            @click="$refs['dropdownDel' + index][0].hide(true)"
                            >Cancel</b-button
                          >
                        </div>
                        <div class="col">
                          <b-button class="w-100 bt-red py-1">Delete</b-button>
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
        <font-awesome-icon :icon="['fas', 'comment-dots']" />
      </div>
      <div class="p-2">Comment</div>
      <div class="p-2">( {{ listMessage.length }} Comment)</div>
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
            <b-button
              variant="outline-secondary"
              class="m-2 comment-size-buttom"
              >Cancel</b-button
            >
            <b-button variant="success" class="m-2 comment-size-buttom"
              >Save</b-button
            >
          </div>
        </div>
      </div>
      <!-- message -->
      <div id="Comment" v-for="(message, index) in listMessage" :key="index">
        <div :ref="`comment${indexError}${index}`"  :id="`comment${indexError}${index}`">
          <b-row>
            <b-col class="d-flex justify-content-start">
              <b-avatar
                variant="primary"
                :text="getTextAvatar(message.id)"
                class="mr-3"
              ></b-avatar>
              <div class="align-middle">{{ message.username }}</div>
            </b-col>
            <b-col class="d-flex justify-content-end"
              ><div class="align-middle fontColor-comment">
                {{ message.date }}
              </div></b-col
            >
          </b-row>
          <div
            class="card-list mb-1 ml-5 p-2 textareabackgrou fontColor-comment"
          >
            {{ message.message }}
          </div>
          <div
            class="d-flex justify-content-start ml-5 "
            v-if="message.id == 2"
          >
            <a class="fontColor-comment mr-4 cursor-pointer" @click="editComment(`comment${indexError}${index}`,`editComment${indexError}${index}`)">Edit</a>
            <a class="fontColor-comment cursor-pointer" >Delete</a>
            
          </div>
        </div>
        <!-- Edit comment -->
        <div :ref="`editComment${indexError}${index}`" :style="{ display: 'none'} " :id="`editComment${indexError}${index}`">
          <b-row>
            <b-col class="d-flex justify-content-start">
              <b-avatar variant="primary" :text="getTextAvatar(message.id)" class="mr-3"></b-avatar>
              <div class="align-middle">{{ message.username }}</div>
            </b-col>
          </b-row>
          <div class="card-list ml-5 p-1">
            <b-form-textarea
              no-resize
              class="border-0 textaera"
              placeholder="Write a commet..."
            ></b-form-textarea>
            <div class="d-flex justify-content-end">
              <b-button
                variant="outline-secondary"
                class="m-2 comment-size-buttom"
                @click="cancelEditComment(`comment${indexError}${index}`,`editComment${indexError}${index}`)"
                >Cancel</b-button
              >
              <b-button variant="success" class="m-2 comment-size-buttom"
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

export default {
  
  props: {
    indexError: {
      type: [Number],
    },
  },
  updated() {
  },
  name: "modal-task",
  data() {
    return {
      selected: "",
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
          role: "owner",
        },
        {
          userId: 2,
          userName: "Airada",
          userLastName: "Stong",
          role: "mainten",
        },
        {
          userId: 3,
          userName: "Natthawut",
          userLastName: "Chiphimon",
          role: "mainten",
        },
        {
          userId: 4,
          userName: "User",
          userLastName: "Test",
          role: "mainten",
        },
        {
          userId: 5,
          userName: "pin",
          userLastName: "wanyen",
          role: "mainten",
        },
        {
          userId: 6,
          userName: "wanwi",
          userLastName: "srisopa",
          role: "owner",
        },
        {
          userId: 7,
          userName: "toey",
          userLastName: "han",
          role: "mainten",
        },
        {
          userId: 8,
          userName: "daniel",
          userLastName: "kang",
          role: "mainten",
        },
        {
          userId: 9,
          userName: "Aristeaz",
          userLastName: "Cutie",
          role: "mainten",
        },
        {
          userId: 10,
          userName: "Milky",
          userLastName: "Way",
          role: "mainten",
        },
        {
          userId: 11,
          userName: "Sirius",
          userLastName: "Red",
          role: "mainten",
        },
        {
          userId: 12,
          userName: "Azeii",
          userLastName: "Gei",
          role: "mainten",
        },
      ],
      pickUsers: [],
      showDropdown: false,
      filterText: "",
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
    };
  },
  mounted() {
    //call service get error by id
    this.selected = this.errorDetail.errorStatusId;

    this.users.forEach((us) => {
      let text = "";
      if (us.userName != "" && us.userLastName != "") {
        text = `${us.userName[0]}${us.userLastName[0]}`;
      } else if (us.userName != "" && us.userLastName == "") {
        text = `${us.userName[0]}`;
      } else {
      
        text = `Un`;
      }
      let addToPick = {
        userId: us.userId,
        userName: `${us.userName} ${us.userLastName}`,
        text: text,
        selected: false,
      };
      this.pickUsers.push(addToPick);
    });

    this.errorDetail.userAssignment.forEach((userAss) => {
      this.pickUsers.forEach((pUser) => {
        if (userAss.userAssignId == pUser.userId) {
          pUser.selected = true;
        }
      });
    });
  },
  methods: {
    editComment(index,index2) {
        document.getElementById(index).style.display = "none";
        document.getElementById(index2).style.display = "block";
    },
    cancelEditComment(index,index2){
        document.getElementById(index).style.display = "block";
        document.getElementById(index2).style.display = "none";
    },
    getTextAvatar(id) {
      let text = "";
      this.users.forEach((user) => {
        if (user.userId === id) {
          if (user.userName != "" && user.userLastName != "") {
            text = `${user.userName[0]}${user.userLastName[0]}`;
          } else if (user.userName != "" && user.userLastName == "") {
            text = `${user.userName[0]}`;
          } else {
            

            text = `Un`;
          }
        }
      });
      return text;
    },
    pick(id) {
      this.showDropdown = true;
      

      this.pickUsers.forEach((p) => {
        if (p.userId === id) {
          if (p.selected === true) {
            p.selected = false;

            //============== delete user =================
            let res = this.errorDetail.userAssignment;

            res = res.filter((data) => data.userAssignId !== id);

            this.errorDetail.userAssignment = res;
            

            //=================== call service ===================
          } else {
            p.selected = true;
            let addUser = {
              userAssignId: p.userId,
            };
            this.errorDetail.userAssignment.push(addUser);

            //=================== call service ===================
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

          res = res.filter((data) => data.userAssignId !== id);

          this.errorDetail.userAssignment = res;
         

          //=================== call service ===================
        }
      });
    },
    show() {
      this.showDropdown = true;
     
    },
    closeDropDown() {
      this.showDropdown = false;
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
          this.errorDetail.errorStatusId = this.selected;
        } else {
          this.selected = this.errorDetail.errorStatusId;
        }
      });
    },

    // ################################### file upload method ####################
    onFilePicked(event) {
      event.target.files.forEach((e) => {
        this.file.push(e);
      });
      this.$refs.select.focus = false;
    },
    del(index) {
      // delby index
      this.$refs["dropdownDel" + index][0].hide(true);
    },
    update(index) {
      document.getElementById("input" + index).value = "";
      this.$refs["dropdownEdit" + index][0].hide(true);
    },
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
      options: (state) => state.errorStatus,
    }),
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
</style>
