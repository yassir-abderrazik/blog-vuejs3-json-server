<template lang="">
  <div class="mt-4">
    <div class="flex justify-end m-4">
      <router-link
        :to="{ name: 'Add Post' }"
        class="px-4 py-2 rounded-xl text-white bg-gray-900"
        >New Post</router-link
      >
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-1 gap-4 ">
      <div
        class="rounded-xl mx-8  shadow-xl bg-gray-900 my-2"
        v-for="post in posts"
        :key="post.id"
      >
        <img :src="post.image" class="h-64 w-full rounded-xl" />
        <div class="p-2 bg-gray-900 rounded-xl">
          <h2 class="text-lg font-semibold text-white text-center">
            {{ post.title }}
          </h2>
          <p class="text-gray-400">
            {{ post.body }}
          </p>
          <div class="flex justify-center mt-8">
            <button class="bg-gray-500 text-gray-200 py-2 px-4 m-2 rounded-lg">
              <router-link
                :to="{
                  name: 'PostShow',
                  params: { id: post.id, slug: post.slug },
                }"
              >
                Show</router-link
              >
            </button>
            <button class="bg-gray-500 text-gray-200 py-2 px-4 m-2 rounded-lg">
              <router-link
                :to="{
                  name: 'Edit Post',
                  params: { id: post.id},
                }"
              >
                Edit</router-link
              >
            </button>
            <button
              class="bg-gray-500 text-gray-200 py-2 px-4 m-2 rounded-lg"
              @click="deletePost(post.id)"
            >
              Delete
            </button>
          </div>
        </div>
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
  mounted() {
    this.axios
      .get("http://localhost:5000/posts")
      .then((response) => (this.posts = response.data))
      .catch((err) => console.log(err));
  },
  data() {
    return {
      posts: [],
      Notif: false,
      massageNotif: "",
      messageColor: "null",
    };
  },
  methods: {
    deletePost(id) {
      this.axios
        .delete("http://localhost:5000/posts/" + id)
        .then((response) => {
          this.posts = this.posts.filter((post) => post.id !== id);
          this.Notif = true;
          this.massageNotif = "delete !  Post";
          this.messageColor = "text-red-700 bg-red-200";
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
