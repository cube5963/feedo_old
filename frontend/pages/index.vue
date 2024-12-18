<template>
    <div class = "question">
      <label>
        私達のピッチは
        <div></div>
        どうでしたか？
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
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { postFeedback } from '~/assets/script/api';

export default {
  setup()  {
    const router = useRouter();

    // 良いボタンがクリックされたときの処理
    const handleGoodClick = async () => {
      router.push('/form1');
      await postFeedback(1, "1");
      console.log('good feedback posted');
    };

    // 悪いボタンがクリックされたときの処理
    const handleBadClick = async () => {
      await postFeedback(2, "1");
      console.log('bad feedback posted');
      router.push('/form1');
    };

    return {
      handleGoodClick,
      handleBadClick,
    };
  },
};
</script>