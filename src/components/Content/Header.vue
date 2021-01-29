<template>
  <div class="header-main">
    <table class="header-table">
      <tr>
        <td style="width: 80%; padding-left: 20px;">
          <table>
            <tr>
              <td
                v-for="(val, index) in $store.state.allLinkHeader"
                :key="index"
              >
                <div>
                  <font-awesome-icon
                    v-if="val.name == 'Monitor Error'"
                    :icon="['fas', 'desktop']"
                  />
                  <font-awesome-icon
                    v-if="val.name == 'Project Managemant'"
                    :icon="['fas', 'check-square']"
                  />
                  <font-awesome-icon
                    v-if="val.name == 'Dashboard'"
                    :icon="['fas', 'chart-pie']"
                  />
                  <font-awesome-icon
                    v-if="val.name == 'Document API'"
                    :icon="['fas', 'code']"
                  />

                  <a
                    v-if="$store.state.allLinkHeader.length == 1"
                    class="font-weight-bold header-cursor header-font2 ml-2"
                  >
                    {{ val.name }}
                  </a>
                  <a
                    v-if="$store.state.allLinkHeader.length > 1 && index != $store.state.allLinkHeader.length - 1"
                    class="font-weight-bold header-cursor ml-2"
                    @click="goto(val.url)"
                  >
                    {{ val.name }}
                  </a>
                  <a v-if="index != $store.state.allLinkHeader.length - 1" class="font-weight-bold header-font2 ml-2">
                    >
                  </a>
                </div>
                <div
                  v-if="
                    index == $store.state.allLinkHeader.length - 1 && index != 0
                  "
                >
                  <a class="font-weight-bold header-cursor header-font2 ml-2">
                    {{ val.name }}
                  </a>
                </div>
                
              </td>
            </tr>
          </table>
        </td>
        <td>
          <table class="header-table">
            <tr>
              <td style="width:40%;">
                <font-awesome-icon :icon="['fas', 'bell']" />
              </td>
              <td>
                <b-avatar
                  button
                  @click="onClick"
                  variant="primary"
                  text="FF"
                  class="align-baseline"
                ></b-avatar>
              </td>
              <td>User Name</td>
              <td class="header-td">
                <b-dropdown
                  right
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here...</b-dropdown-item
                  >
                </b-dropdown>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "component-header",

  methods: {
    goto(url) {
      this.$router.push(url);
    },
  },
};
</script>
