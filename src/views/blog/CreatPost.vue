<template lang="">
  <div class="h-full w-full flex justify-center items-center mt-4">
    <div
      class="w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 flex flex-col md:flex-row items-center"
    >
      <div
        class="bg-gray-900 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-xl"
      >
        <form @submit.prevent="createPost">
          <div class="relative mb-4">
            <label for="title" class="leading-7 text-sm text-gray-300"
              >Title</label
            >
            <input
              type="text"
              v-model="title"
              name="title"
              class="w-full bg-gray-700 rounded-md border border-gray-700 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 text-sm outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="body" class="leading-7 text-sm text-gray-300"
              >Content</label
            >
            <input
              type="text"
              id="body"
              v-model="body"
              class="w-full bg-gray-700 rounded-md border border-gray-700 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 text-sm outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="image" class="leading-7 text-sm text-gray-300"
              >Image url</label
            >
            <input
              type="text"
              id="image"
              v-model="image"
              class="w-full bg-gray-700 rounded-md border border-gray-700 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 text-sm outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
            />
          </div>

          <button
            class="text-white bg-blue-500 rounded-md border-0 w-full py-2 px-8 focus:outline-none hover:bg-blue-600 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  <teleport to="#alert" v-if="Notif">
    <Alert :messageColor="messageColor" :massageNotif="massageNotif" />
  </teleport>
</template>
<script>
import Alert from "@/components/Alert.vue";

export default {
  components: {
    Alert,
  },
  data() {
    return {
      title: "",
      body: "",
      image: "",
      Notif: false,
      massageNotif: "",
      messageColor: "null",
    };
  },
  methods: {
    createPost() {
      console.log("hell");
      this.axios
        .post("http://localhost:5000/posts", {
          title: this.title,
          slug: this.title.replace(" ", "-"),
          body: this.body,
          image: this.image,
        })
        .then((response) => {
          this.Notif = true;
          this.massageNotif = "Add !  Post";
          this.messageColor = "text-green-700 bg-green-200";
          setTimeout(() => {
            this.Notif = false;
          }, 2000);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang=""></style>
