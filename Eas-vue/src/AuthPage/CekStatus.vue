<template>
  <div class="register-page">
    <div class="card">
      <form @submit.prevent="cekStatus">
        <div class="title">Status</div>
        <input type="email" v-model="email" placeholder="Email" required />
        <button type="submit">Cek Status</button>
      </form>
      <div v-if="loading">Loading...</div>
      <div v-if="registrationStatus !== null && !loading">
        <p>Status for {{ email }}: {{ registrationStatus }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const registrationStatus = ref(null);
const loading = ref(false);

const cekStatus = async () => {
  loading.value = true;

  try {
    const res = await fetch(`http://localhost:3000/api/Peserta?email=${email.value}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (json && json.Status) {
      console.log("Status for " + email.value + ": " + json.Status);
      registrationStatus.value = json.Status;
    } else {
      console.log("Invalid response format or missing data for email: " + email.value);
      registrationStatus.value = "Invalid Response";
    }

  } catch (error) {
    console.error("Error while fetching data:", error);
  } finally {
    loading.value = false;
  }
};
</script>


<style scoped>
* {
font-family: 'Avenir', sans-serif;
box-sizing: border-box;
}

body {
margin: 0;
padding: 0;
background-color: #f0f0f0;
}

.register-page {
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url('../src/1325725.png') center/cover;
}

.card {
width: 300px;
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
text-align: center;
padding: 20px;
}

.title {
font-size: 24px;
color: #333;
font-weight: 700;
}

input {
width: 100%;
margin-top: 12px;
padding: 10px;
background-color: #f5f5f5;
outline: none;
border: 1px solid #ddd;
border-radius: 4px;
}

button {
margin-top: 20px;
width: 100%;
padding: 12px;
background-color: #79AC78;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;
}

button:hover {
background-color: #628e5e;
}
</style>
