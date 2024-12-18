<template>
  <div id="understanding" class="hidden">
    <div class = "question">
      <label>
        資料はわかりやすかったですか？
      </label>
    </div>
    <div class = "good-btn">
      <input type = "button" class = "good" @click = "handleGoodClick"/>
    </div>
    <div class = "good-face">
      <img class = "smile" src = "./../assets/image/good.png"/>
    </div>
    <div class  = "bad-btn">
      <input type = "button" class = "bad" @click = "handleBadClick"/>
    </div>
    <div class = "bad-face">
      <img class = "unsmile" src = "./../assets/image/bad.png"/>
    </div>

    <div class="sp">
    <div class = "question">
      <label>
      具体的なコメントがあればお書きください
    </label>
    </div>
    <div class = "question-sub">
      (記入後、評価ボタンを押すと送信されます)
    </div>
    <div class = "form">
      <textarea
      id="understanding-comment"
      name="understanding-comment"
      v-model="comment">
      </textarea>
    </div>  
    </div>      
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { postFeedback, postComment } from "~/assets/script/api";

export default {
  setup() {
    const router = useRouter();
    const comment = ref(""); // コメント

    // 良いボタンがクリックされたときの処理
    const handleGoodClick = async () => {
      router.push("/form1");
      await postFeedback(1, "2");
      await postComment(comment.value);
      console.log("good feedback posted");
    };

    // 悪いボタンがクリックされたときの処理
    const handleBadClick = async () => {
      router.push("/form1");
      await postFeedback(2, "2");
      await postComment(comment.value);
      console.log("bad feedback posted");
    };

    return {
      handleGoodClick,
      handleBadClick,
      comment,
    };
  },
};
</script>

<style scoped>

</style>