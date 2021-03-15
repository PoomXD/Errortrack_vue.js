<template>
  <div class="header-space">
    <b-row align-v="center">
      <b-col class="col-xl col-lg"
        ><div class="d-flex justify-content-start">
          <div
            class="p-2 font-no-size-color"
            v-for="(val, index) in header"
            :key="index"
          >
            <font-awesome-icon
              v-if="val.name == 'Monitor Error' && index == 0"
              :icon="['fas', 'desktop']"
            />
            <font-awesome-icon
              v-if="val.name == 'Project Management' && index == 0"
              :icon="['far', 'check-square']"
            />
            <font-awesome-icon
              v-if="val.name == 'Dashboard' && index == 0"
              :icon="['fas', 'chart-pie']"
            />
            <font-awesome-icon
              v-if="val.name == 'Document API' && index == 0"
              :icon="['fas', 'code']"
            />
            <router-link
              v-if="header.length > 1 && index != header.length - 1"
              :to="val.url"
            >
              {{ val.name }}
            </router-link>

            <a v-if="index != header.length - 1" class="ml-2"> > </a>

            <a v-if="index == header.length - 1">
              {{ val.name }}
            </a>
          </div>
        </div></b-col
      >
      <b-col class="col-xl-4 col-lg-2 col-md-2 col-sm-2">
        <div class="d-flex justify-content-end">
          <div class="p-2 align-middle">
            <font-awesome-icon
              :icon="['far', 'bell']"
              style="font-size: 20px; margin-top: 5px"
            />
          </div>
          <div class="p-2 align-middle display">
            <b-avatar
              button
              variant="primary"
              :text="getTextAvatar(userName)"
              class="align-baseline"
            ></b-avatar>
          </div>
          <div class="p-2 align-middle display white-space font-no-size-color">
            {{ userName }}
          </div>
          <div class="p-2 align-middle">
            <b-dropdown
              right
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="no-focus"
              data-testid="dropdown"
            >
              <template #button-content>
                <font-awesome-icon :icon="['fas', 'angle-down']" />
              </template>
              <b-dropdown-item disabled class="display-dropdow" href="#">
                <div class="d-flex justify-content-center">
                  <b-avatar
                    button
                    variant="primary"
                    :text="getTextAvatar(userName)"
                    class="align-baseline display-dropdow"
                  ></b-avatar>
                </div>
              </b-dropdown-item>
              <hr class="display-dropdow" />
              <b-dropdown-item
                disabled
                class="display-dropdow font-no-size-color"
                href="#"
                >{{ userName }}</b-dropdown-item
              >
              <b-dropdown-item @click="clickLogOut()">
                <span class="h-100 w-100">Log Out</span>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- {{ header }} -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// import UserService from '@/services/api/user.service';

export default {
  name: "component-header",
  async created(){
    await this.getErrorStatus();
  },
  mounted() {
    
  },
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    ...mapState({
      header: (state) => state.header.allLinkHeader,
      }),
  },
  methods: {
    clickLogOut() {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("userId");
      this.$router.push({ name: "Login" });
    },
    goto(url) {
      
      this.$router.push(url);
    },
    getTextAvatar(userName) {

      if (userName.split(" ").length === 2 && userName.split(" ")[1] !== "") {
        return `${userName.split(" ")[0][0]}${userName.split(" ")[1][0]}`;
      } else if (userName !== "") {
        return userName[0];
      } else {
        return "Un";
      }
    },
    
    async getErrorStatus() {
      await this.$store.dispatch("errorStatus/getErrorStatus");
    },
  },
};
</script>
<style lang="scss">
.no-focus {
  button:focus {
    box-shadow: none !important;
  }
}
</style>
