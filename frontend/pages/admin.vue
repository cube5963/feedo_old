<template>
  <div class="container">
    <div class="chart-container">
      <canvas id="feedbackPieChart"></canvas>
    </div>
    <div class="comment-container">
      <div v-if="comments.length > 0">
        <!-- コメントを逆順に表示 -->
        <ul>
          <li v-for="comment in reversedComments" :key="comment.id">
            {{ comment.content }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>コメントがありません。</p>
      </div>
    </div>
    <div>
      <input type="button" class="submit" @click="handleSubmitClick" value="リセット"/>
    </div>
  </div>
</template>

<script>
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'; // 必要なパーツをインポート
import { getFeedback, getComment, deleteAll } from '~/assets/script/api';

// Chart.jsのコンポーネントを登録
Chart.register(PieController, ArcElement, Tooltip, Legend);

export default {
  data() {
    return {
      comments: [], // コメントデータを保持するための変数
      feedbackChart: null, // グラフのインスタンスを保持するための変数
    };
  },
  async mounted() {
    await this.fetchData();
    
    // 10秒ごとにデータを再取得
    this.dataRefreshInterval = setInterval(this.fetchData, 5000);
  },
  beforeDestroy() {
    // コンポーネントが破棄される前にインターバルをクリア
    clearInterval(this.dataRefreshInterval);
  },
  methods: {
    async fetchData() {
      try {
        // フィードバックデータを取得
        const feedbackResponse = await getFeedback();
  
        // evaごとのデータを集計
        const eva1Count = feedbackResponse.filter(item => item.eva === 1).length;
        const eva2Count = feedbackResponse.filter(item => item.eva === 2).length;
  
        // 円グラフの描画
        const ctx = document.getElementById('feedbackPieChart').getContext('2d');
        if (this.feedbackChart) {
          // グラフが既に存在する場合、データを更新
          this.feedbackChart.data.datasets[0].data = [eva1Count, eva2Count];
          this.feedbackChart.update();
        } else {
          // グラフが存在しない場合、新規作成
          this.feedbackChart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: ['good', 'bad'],
              datasets: [{
                data: [eva1Count, eva2Count],
                backgroundColor: ['#a4f2a3', '#f17d7d'],
              }],
            },
            options: {
              responsive: true,
            },
          });
        }

        // コメントデータを取得
        const commentResponse = await getComment();
        // コメントデータを逆順に並べ替える
        this.comments = commentResponse.reverse();
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    },
    async handleSubmitClick() {
      await deleteAll();
      await this.fetchData();
    }
  },
  computed: {
    reversedComments() {
      // 逆順に並べ替えたコメントデータを返す
      return this.comments;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 20px; /* グラフとコメントの間隔を調整 */
}

.chart-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.submit{
  height: 60px;
  width:100px;
  border-radius: 40px;
  background-color:#F17D7D;
  border:none;
  position: relative;
  bottom:-300px;
}

.comment-container {
  overflow-y: auto; /* コメントが多い場合にスクロールできるようにする */
  background-color: #ffffff;
  height: 650;
  width: auto;
  color: #000;
  margin-top: 100px;
}

#feedbackPieChart {
  width: 600px !important; /* グラフの幅を調整 */
  height: 600px !important; /* グラフの高さを調整 */
}
</style>
