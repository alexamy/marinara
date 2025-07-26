<script>
export default {
  async mounted() {
    this.messageInterval = setInterval(async () => {
      const sw = await navigator.serviceWorker.ready;
      sw.active.postMessage('keepAlive');
    }, 10e3);
  },

  beforeDestroy() {
    clearInterval(this.messageInterval);
  }
};
</script>