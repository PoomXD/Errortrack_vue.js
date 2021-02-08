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
              placeholder="Password"
              class="rounded-pill mt-3"
            ></b-form-input>
            <b-form-checkbox
              class="mt-3 float-left"
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
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
export default {
  name: "login",
  data() {
    return{
      username: "",
      password: "",
    }
  },
  methods: {
    clickLogin() {
      
      this.$router.push({ name: "ListProject" });
      //this.$store.dispatch("setAllLinkHeader", listlink);
    },
  },
};
</script>

<style>
.full-height {
  height: 100%;
}
</style>
