<template>
  <script type="text/x-template" id="modal">

    <transition name="modal-fade">
      <div class="modal-backdrop" role="dialog">
        <div class="modal" ref="modal">
          <header class="modal-header">
            <slot name="header">
              <h2>
                This is the default tile!
              </h2>

              <button type="button" class="btn-close btn-right" @click="close" aria-label="Close modal">
                x
              </button>
            </slot>
          </header>

          <section class="modal-body">
            <slot name="body">
              I'm the default body!
            </slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-green" @click="close" aria-label="Close modal">
                Close me!
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </script>
</template>
<script>
export default {
  data () {
    return {
      // isModalVisible: false
    }
  },
  methods: {
    close(event) {
      this.$emit('close');
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

</style>

