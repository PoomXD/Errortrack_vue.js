<template>
  <b-card
    class="app-card"
    :bg-variant="bgVariant"
    :border-variant="borderVariant"
    header-class="d-flex justify-content-between align-items-center">

    <template slot="header" v-if="title || icon">
      <h5 class="mb-0">
        <span class="card-header-icon" v-if="icon">
          <font-awesome-icon :icon="icon"/>
        </span>
        {{ title }}
      </h5>
      <slot name="header-right">

      </slot>
    </template>

    <div>
      <slot name="body-content"></slot>
    </div>

  </b-card>
</template>

<script>
export default {
  name: "app-card",
  props:{
    title:{
      type: [String, null],
      default: () => null
    },
    icon: {
      type: [String, null],
      default: () => null
    },
    /**
     * Card background color
     */
    bgVariant: {
      type: String
    },
    /**
     * Card border color
     */
    borderVariant: {
      type: String
    },
  }

}
</script>

<style lang="scss" scoped>
// .app-card{
//   box-shadow: 0 0 5px 0px #c1c1c1;
//   border-radius: $card-border-radius;
//   border: 0;
// }
</style>
