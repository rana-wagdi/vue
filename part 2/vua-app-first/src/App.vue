<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <FriendContact></FriendContact>
      <FriendContact></FriendContact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "0123 45678 90",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "0987 654421 21",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
    components: { FriendContact }
};
</script>