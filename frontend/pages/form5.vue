<template>
  <div id="slides" class="hidden">
    <div class = "question">
      <label for="slides-comment">
        その他コメントがあればお書きください
      </label>
    </div>
    <div class = "question-sub">
      (記入後、送信ボタンを押すと送信されます)
    </div>
    <div class = "form">
      <textarea
        id="slides-comment"
        name="slides-comment"
        v-model="c1"
      ></textarea>
    </div>
    <div class = "submit-btn">
      <input type="button" class="submit" @click="handleSubmitClick" value="送信"/>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postComment } from "~/assets/script/api";

export default {
  setup() {
    const router = useRouter();
    const c1 = ref(""); // コメント1

    // 提出ボタンがクリックされたときの処理
    const handleSubmitClick = async () => {
      try {
        console.log(c1.value)
        router.push("/form1");
        await postComment(c1.value); // c1 と c2 の値を送
        console.log("comment posted");
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    };

    return {
      handleSubmitClick,
      c1,
    };
  },
};
</script>

<style scoped>
.form textarea{
  width: 80%;
  height: 200px;
  border-radius: 20px;
}

.submit {
background-color: #4CAF50;
border: none;
color: white;
padding: 30px 64px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 25px;
margin: 8px 4px;
cursor: pointer;
border-radius: 20px;
}
</style>