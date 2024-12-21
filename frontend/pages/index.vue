<template>
  <body>
    <p class = "question">
      <label>
        料理のお味は
        <div></div>
        いかがでしたか？
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
  </body>
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