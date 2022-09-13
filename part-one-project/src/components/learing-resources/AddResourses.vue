<template>
  <base-dialog v-if="inputInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at least one input valuee is required.</p>
      <p>Please check all inputs and make sure you enter least one charchter</p>
    </template>

<template #actions>
  <base-button @click="confirmError">Okay</base-button>
</template>
</base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          row="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resoures</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  inject: ["addResource"],
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enterTitle = this.$refs.titleInput.value;
      const enterDescription = this.$refs.descInput.value;
      const enterLink = this.$refs.linkInput.value;
      if (
        enterTitle.trim() === "" ||
        enterDescription.trim() === "" ||
        enterLink.trim() === ""
      ) {
        this.inputInvalid = true;
        return;
      }
      this.addResource(enterTitle, enterDescription, enterLink);
    },
    confirmError(){
      this.inputInvalid = false
    }
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>