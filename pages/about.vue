<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  // You can add component-specific logic here if needed
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isModalOpen: false,
      currentImageIndex: 0,
      imageList: [
        '/penida/img/p3.png',
        '/penida/img/p2.png',
        '/penida/img/p7.png',
        '/penida/img/p4.png',
        '/penida/img/p5.png',
        '/penida/img/p6.png',
        '/penida/img/p1.png',
        '/penida/img/p8.png',
        '/penida/img/p9.png',
        '/penida/img/p10.png',
        '/penida/img/p11.png',
        '/penida/img/p12.png',
        // 更多图片 URL
      ]
    };
  },


  methods: {
    openModal(index) {
      this.currentImageIndex = index;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex + this.imageList.length - 1) % this.imageList.length;
    }
  }
}


</script>

<style>
/* 可以在这里添加CSS来美化表格 */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>

<template>
  <Header />

    <p class="bold text-2xl text-center mt-8">特定商取引法に基づく表記</p>
    <div class="mx-32 my-8">
    <table>
      <tbody>
        <tr>
          <td>販売業者</td>
          <td>Zhixiang Tan</td>
        </tr>
        <tr>
          <td>所在地</td>
          <td>請求があったら遅滞なく開示します</td>
        </tr>
        <tr>
          <td>電話番号</td>
          <td>請求があったら遅滞なく開示します</td>
        </tr>
        <tr>
          <td>メールアドレス</td>
          <td>tzxdtc10@gmail.com</td>
        </tr>
        <tr>
          <td>運営統括責任者</td>
          <td>Zhixiang Tan</td>
        </tr>
        <tr>
          <td>追加手数料等の追加料金</td>
          <td>なし</td>
        </tr>
        <tr>
          <td>交換および返品（返金ポリシー）</td>
          <td>返金などありましたらtzxdtc10@gmail.comまでご連絡ください</td>
        </tr>
        <tr>
          <td>引渡時期</td>
          <td>注文後、ツアーのご利用は確定します</td>
        </tr>
        <tr>
          <td>受け付け可能な決済手段</td>
          <td>クレジットカードまたは国内の銀行振込</td>
        </tr>
        <tr>
          <td>決済期間</td>
          <td>クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から 3 日以内にお振り込みいただく必要があります。</td>
        </tr>
        <tr>
          <td>販売価格</td>
          <td>各商品ページに記載の金額</td>
        </tr>
      </tbody>
    </table>
  </div>

      <nuxt-link to="/about"></nuxt-link>

  <Footer />

</template>
