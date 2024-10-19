<template>
  <div id="understanding" class="hidden">
    <p class = "question">
      <label>
        ピッチの進行や話し方はどうでしたか？
      </label>
    </p>
    <p class = "good-btn">
      <input type = "button" class = "good" @click = "handleGoodClick"/>
    </p>
    <p class = "good-face">
      <img class = "smile" src = "./../assets/image/good.png"/>
    </p>
    <p class  = "bad-btn">
      <input type = "button" class = "bad" @click = "handleBadClick"/>
    </p>
    <p class = "bad-face">
      <img class = "unsmile" src = "./../assets/image/bad.png"/>
    </p>

    <div class="sp">
    <p class = "question">
      <label>
      具体的なコメントがあればお書きください
    </label>
    </p>
    <p class = "question-sub">
      (記入後、評価ボタンを押すと送信されます)
    </p>
    <p class = "form">
      <textarea
      id="understanding-comment"
      name="understanding-comment"
      v-model="comment">
      </textarea>
    </p>  
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
.sp{
  position:relative;
  -bottom:300px;
}

.form textarea{
  width: 80%;
  height: 200px;
  border-radius: 20px;
}

</style>