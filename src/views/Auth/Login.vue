<template>
  <div id="login" class="background p-5 h-80">
    <div class="container background-container rounded ">
      <div class="row ">
        <div class="col image-stlay">
          <img src="/img/image1.png" style="height: 100%; width: 100%;" />
        </div>
        <div class="col pr-5">
          <h1 class="title-font text-center mt-5 mb-5">Sing In</h1>
          <b-form-input
            v-model="username"
            placeholder="Username"
            class="rounded-pill mt-3"
          ></b-form-input>
          <b-form-input
            v-model="password"
            type="password"
            placeholder="Password"
            class="rounded-pill mt-3"
          ></b-form-input>
          <b-form-checkbox
            class="mt-3 float-left"
            v-model="checkBoxKeepMeSingnedIn"
            id="checkbox-1"
            name="checkbox-1"
            value="true"
            unchecked-value="false"
          >
            Keep me signed in
          </b-form-checkbox>
          <b-button
            class="rounded-pill button-font"
            block
            variant="primary"
            @click="clickLogin()"
          >
            <table class="table-stlay">
              <tr>
                <td class="pl-5">Log In</td>
                <td class="float-right">
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </td>
              </tr>
            </table>
          </b-button>
          <p class="mt-3 mb-5 forgot-font">Forgot password?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountService from "../../services/api/account.service.js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      checkBoxKeepMeSingnedIn: "false",
    };
  },
  mounted() {
    this.setKeepMeSignedIn();
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (
        localStorage.getItem("access_token") &&
        localStorage.getItem("refresh_token")
      ) {
        console.log("access_token and refesh_token is reday");
        AccountService.refreshToken().then((res) => {
          if(res.status){
            this.$router.push({ name: "ListProject" });
          }
        });
      }
    },
    clickLogin() {
      var data = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch("account/login", data).then((res) => {
        console.log("Res: ", res);
        if (res.data.status) {
          this.getUserIDFromJson();
          if (this.checkBoxKeepMeSingnedIn === "true") {
            localStorage.setItem("username", this.username);
            localStorage.setItem("password", this.password);
          } else if (this.checkBoxKeepMeSingnedIn === "false") {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
          }
          this.$router.push({ name: "ListProject" });
        } else {
          console.log("fail");
        }
      });
    },
    getUserIDFromJson() {
      console.log(
        JSON.parse(atob(localStorage.getItem("access_token").split(".")[1]))
      );
      var data = JSON.parse(
        atob(localStorage.getItem("access_token").split(".")[1])
      );
      localStorage.setItem("userId", data.userId);
    },
    setKeepMeSignedIn() {
      if (localStorage.getItem("username")) {
        this.username = localStorage.getItem("username");
        this.checkBoxKeepMeSingnedIn = "true";
      }
      if (localStorage.getItem("password")) {
        this.password = localStorage.getItem("password");
      }
    },
  },
};
</script>

<style>
.full-height {
  height: 100%;
}
</style>
