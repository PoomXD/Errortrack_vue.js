<template>
  <div id="login" class="background p-5 h-80">
    <div class="container background-container rounded ">
      <div class="row ">
        <div class="col image-stlay">
          <img src="/img/image1.png" style="height: 100%; width: 100%;" />
        </div>
        <div class="col pr-5">
          <h1 class="title-font text-center mt-5 mb-5">Sign In</h1>
          <b-form-input
            @keyup.enter="clickLogin()"
            data-testid="username"
            id="username"
            v-model="username"
            placeholder="Username"
            class="rounded-pill mt-3"
          ></b-form-input>
          <b-form-input
            @keyup.enter="clickLogin()"
            data-testid="password"
            id="password"
            v-model="password"
            type="password"
            placeholder="Password"
            class="rounded-pill mt-3"
          ></b-form-input>
          <div
            class="alert-incorrect"
            data-testid="alert-incorrect"
            id="alert-incorrect"
            v-if="
              (!$v.username.required && cliclStatus) ||
                (!$v.password.required && cliclStatus)
            "
          >
            Username or Password is required
          </div>
          <div
            class="alert-incorrect"
            data-testid="alert-incorrect"
            id="alert-incorrect"
            v-if="responseLogin && $v.username.required"
          >
            Username or Password is incorrect
          </div>
          <b-form-checkbox
            class="mt-3 float-left"
            v-model="checkBoxKeepMeSingnedIn"
            data-testid="checkbox-1"
            name="checkbox-1"
            value="true"
            unchecked-value="false"
          >
            Keep me sign in
          </b-form-checkbox>
          <b-button
            class="rounded-pill button-font "
            block
            variant="primary"
            @click="clickLogin()"
          >
            <div class="d-flex bd-highlight">
              <div class=" w-100 bd-highlight">Log In</div>
              <div class="align-self-center">
                <b-spinner
                  v-if="statusload"
                  class="float-right"
                  variant="light"
                  label="Spinning"
                ></b-spinner>
                <font-awesome-icon
                  v-if="!statusload"
                  :icon="['fas', 'arrow-right']"
                  class="float-right"
                />
              </div>
            </div>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var usernameEven = document.getElementById("username");
var passwordEven = document.getElementById("password");

import AccountService from "../../services/api/account.service.js";
import { required } from "vuelidate/lib/validators";
export default {
  name: "login",

  data() {
    return {
      statusload: false,
      username: "",
      password: "",
      checkBoxKeepMeSingnedIn: "false",
      cliclStatus: false,
      responseLogin: false,
    };
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
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
          if (res.status) {
            this.$router.push({ name: "ListProject" });
          }
        });
      }
    },
    clickLogin() {
      if (!this.statusload) {
        console.log("Click login")
        this.cliclStatus = true;
        this.statusload = true;
        var data = {
          username: this.username,
          password: this.password,
        };
        this.$store.dispatch("account/login", data).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            this.getUserIDFromJson();
            if (this.checkBoxKeepMeSingnedIn === "true") {
              localStorage.setItem("username", this.username);
              localStorage.setItem("password", this.password);
            } else if (this.checkBoxKeepMeSingnedIn === "false") {
              localStorage.removeItem("username");
              localStorage.removeItem("password");
            }
            this.$router.push({ name: "ListProject" });
          } else if (res.status == 400) {
            this.responseLogin = true;
          }
          this.statusload = false;
        });
      }
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
.button-login {
  display: flex;
  align-items: center;
}
</style>
