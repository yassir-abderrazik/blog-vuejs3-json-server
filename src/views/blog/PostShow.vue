<template lang="">
  <div>
    <div
      class="h-screen w-full flex justify-center items-center  bg-blue-500"
    >
      <div
        class=" w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0  flex flex-col md:flex-row items-center  "
      >
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <img :src="post.image" class="h-64 w-full rounded-2xl" />
        </div>
        <div
          class="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4"
        >
          <h3 class="mb-4 font-bold text-3xl flex items-center text-blue-500">
            {{ post.title }}
          </h3>

          <p class="text-gray-700 text-sm mt-2">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {

        this.axios
      .get("http://localhost:5000/posts/" + this.$route.params.id)
      .then((response) => (this.post = response.data))
      .catch((err) => console.log(err));

  },
  data() {
    return {
      post: {},
    };
  },
};
</script>
<style lang=""></style>
