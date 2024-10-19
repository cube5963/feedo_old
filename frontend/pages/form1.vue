<template>
  <div>
    <p class = "question">
      <label>Thanks!</label>
    </p>
    <p class = "question">
      <label>下のボタンを</label>
    </p>
    <p class = "question">
      <label>押して</label>
    </p>
    <p class = "question">
      <label>詳細なご意見もお寄せください</label>
    </p>
    <p class = "question-sub">
       (途中でやめることも可能です）
    </p>
    <div class="lk">
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form2"
          >内容の理解度について</nuxt-link
        >
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form3"
          >ピッチスキルについて</nuxt-link
        >
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form4">資料について</nuxt-link>
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form5">その他の回答</nuxt-link>
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom exit" to="https://feedo0.wordpress.com">終了</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nom {
  display: block;
  width: 250px;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  color: #333;
  text-decoration: none;
  margin-right:2rem;
  margin-left:2rem;
  border-radius: 40px;
  border:none;
}

.lk {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.exit {
  background-color: #f17d7d;
  color: #fff;
}
</style>