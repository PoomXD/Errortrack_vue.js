<template>
  <div id="login" class="background p-5 ">
    <div class="container background-container rounded " style="heigth: 100%">
      <div class="row ">
        <div class="col image-stlay">
          <img src="/img/image1.png" style="height:400px;"/>
        </div>
        <div class="col pr-5">
          <h1 class="title-font mt-5 mb-5">Sing In</h1>
          <b-form-input
            v-model="text"
            placeholder="Username"
            class="rounded-pill mt-3"
          ></b-form-input>
          <b-form-input
            v-model="text"
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
          <b-button class="rounded-pill button-font" block variant="primary">
            <table class="table-stlay">
              <tr>
                <td class="pl-5">Log In</td>
                <td class="float-right">-></td>
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
};
</script>

<style></style>
