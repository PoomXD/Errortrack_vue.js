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
              v-if="val.name == 'Project Managemant' && index == 0"
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
              text="FF"
              class="align-baseline"
            ></b-avatar>
          </div>
          <div class="p-2 align-middle display white-space font-no-size-color">
            User name
          </div>
          <div class="p-2 align-middle">
            <b-dropdown
              right
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="no-focus"
            >
              <template #button-content>
                <font-awesome-icon :icon="['fas', 'angle-down']" />
              </template>
              <b-dropdown-item disabled class="display-dropdow" href="#">
                <div class="d-flex justify-content-center">
                  <b-avatar
                    button
                    variant="primary"
                    text="FF"
                    class="align-baseline display-dropdow"
                  ></b-avatar>
                </div>
              </b-dropdown-item>
              <hr class="display-dropdow" />
              <b-dropdown-item
                disabled
                class="display-dropdow font-no-size-color"
                href="#"
                >User name</b-dropdown-item
              >
              <b-dropdown-item
                ><router-link :to="{ name: 'Login' }"
                  ><div class="h-100 w-100">Log Out</div>
                </router-link></b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "component-header",
  mounted() {},
  computed: {
    ...mapState({
      header: (state) => state.header.allLinkHeader,
    }),
  },
  methods: {
    goto(url) {
      console.log("url", url);
      this.$router.push(url);
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