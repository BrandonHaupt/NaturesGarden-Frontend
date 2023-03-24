<template>
  <div class="modal">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <!-- Insert your modal content here -->
      <slot></slot>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: ['show'],
  
  data() {
    return {
      showModal: false,
    }
  }


};
</script>

<style>
.modal {
  /* position: fixed;
  top: 0;
  left: 0;
  height: 50vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; */
  position: absolute;
  top: 0;
  left: 0;
  height: 800px;
  width: 800px;
  z-index: 100 !important;
}

.modal-background {
  /* position: absolute;
  top: -30%;
  left: -22%;
  height: 50%;
  width: 50%;
  background: rgba(0, 0, 0, 0.5); */
  position: absolute;
  z-index: 100 !important;
}

.modal-content {
  background: purple;
  position: absolute;
  height: 900px;
  width: 900px;
  padding: 2rem;
  border-radius: 0.5rem;
  z-index: 100 !important;
}
</style>
