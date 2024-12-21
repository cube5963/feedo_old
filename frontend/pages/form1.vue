<template>
  <div>
    <div class = "question">
      <label>Thanks!</label>
    </div>
    <div class = "question">
      <label>下のボタンを</label>
    </div>
    <div class = "question">
      <label>押して</label>
    </div>
    <div class = "question">
      <label>詳細なご意見もお寄せください</label>
    </div>
    <div class = "question-sub">
      (途中でやめることも可能です）
    </div>
    <div class="lk">
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form2"
          >店内の雰囲気について</nuxt-link
        >
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form3"
          >店員の対応について</nuxt-link
        >
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form4">メニューについて</nuxt-link>
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom" to="/form5">その他の意見</nuxt-link>
      </div>
      <div>
        <nuxt-link id="satisfied" class="nom exit" to="https://google.com">終了</nuxt-link>
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