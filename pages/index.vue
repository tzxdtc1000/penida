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
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal img {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
/* 左右箭头按钮样式 */
.left-arrow, .right-arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

.right-arrow {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.left-arrow {
  left: 0;
  border-radius: 3px 0 0 3px;
}

/* 鼠标悬停在按钮上时的样式 */
.left-arrow:hover, .right-arrow:hover {
  background-color: rgba(0, 0, 0, 1);
}
</style>

<template>
  <Header />


  <div v-if="isModalOpen" class="modal">
      <span class="close" @click="isModalOpen = false">&times;</span>
      <img :src="imageList[currentImageIndex]" alt="Modal Image">
      <button class="left-arrow" @click="prevImage">&#10094;</button>
      <button class="right-arrow" @click="nextImage">&#10095;</button>
  </div>




  <div class="mx-auto　">
    <div class="container mx-auto m-4">
      <div class="grid grid-cols-3 h-auto">
        <!-- Left large image container -->
        <div class="flex-grow mr-1 col-span-2 h-auto" @click="openModal(0)">
          <!-- <VuePictureSwipe :items="items"></VuePictureSwipe> -->
          <img src="/img/p3.png" alt="Large Image" class="w-full h-full rounded-l-lg">
        </div>

        <!-- Right side images container -->
        <div class="flex-grow grid grid-rows-2 gap-1">
          <div @click="openModal(1)">
            <img src="/img/p2.png" alt="Top Right Image" class="w-full h-full rounded-tr-lg">
          </div>
          <div @click="openModal(2)">
            <img src="/img/p7.png" alt="Bottom Right Image" class="w-full h-full rounded-br-lg">
          </div>
        </div>
      </div>

      <div class="bg-slate-200 rounded-lg p-2 mt-4">
        <div class="text-3xl text-black">
          Package details
        </div>
        <ul>
          <li class="text-gray-700">06:30 Pick up you from your Hotel in Bali</li>
          <li class="text-gray-700">08:00 Take the boat to Penida Island</li>
          <li class="text-gray-700">09:30 Arrive at Penida Island and meet with Cobek</li>
          <li class="text-gray-700">09:30-15:00 Angel Billabong-Broken Beach-Kelingking beach-Snorkelling(optional)
            <br>※ Having lunch at local restaurant
          </li>
          <li class="text-gray-700">15:30 Take the boat back to Bali</li>
        </ul>
        <div class="text-3xl pt-4">
          Price
        </div>
        <ul>
          <li class="text-gray-700">1 person Rp 1,439,873</li>
          <li class="text-gray-700">2 person Rp 1,737,500 (868,750 / person)</li>
          <li class="text-gray-700">3 person Rp 2,226,924 (743,308 / person)</li>
          <li class="text-gray-700">4 person Rp 2,605,128 (651,282 / person)</li>
        </ul>
        <p class="bold">
          ※ If you find cheaper price on other website, we can provide <span class="text-2xl font-semibold text-red-400">much cheaper</span> price
        </p>
        <div class="text-3xl pt-4">
          What's Included
        </div>
        <ul>
          <li class="text-gray-700">・Boat ticket</li>
          <li class="text-gray-700">・Bottled water</li>
          <li class="text-gray-700">・Round-trip from and to hotel</li>
          <li class="text-gray-700">・Basic English-speaking guide</li>
        </ul>
        <div class="text-3xl pt-4">
          Optional
        </div>
        <ul>
          <li class="text-gray-700">・Visit guider's home to<span class="text-2xl font-semibold text-red-400"> experience local culture(Free)</span></li>
          <li class="text-gray-700">・Snorkelling(extra fee)</li>
        </ul>
        <div class="text-3xl pt-4">
          Contact
        </div>
        <div class="flex justify-center items-center space-x-4 m-8">
          <div class="relative">
            <img src="/img/ins.png" alt="First Image" class="w-full h-auto" />
            <span class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-black text-lg font-bold p-2">
              Instagram
            </span>
          </div>
          <div class="relative">
            <img src="/img/whats.png" alt="First Image" class="w-full h-auto" />
            <span class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-black text-lg font-bold p-2 bg-opacity-50">
              WhatsApp
            </span>
          </div>
        </div>

        <div class="text-3xl pt-4">
          FAQs
        </div>
        <div class="font-bold">
          ・How to book the trip?
        </div>
        <div class="">
          Scan the QR code and let's chat the trip plan and price.
        </div>
        <div class="font-bold">
          ・Why can you provide cheaper price?
        </div>
        <div class="">
          Booking directly through us instead of other travel platforms can save on service fees.
        </div>
        <div class="font-bold">
          ・Who create this website?
        </div>
        <div class="">
          I visited penida in Jan 2024,
          the guilder told me he has two children to raise but maybe can't afford their tuition fee.
          I saw a lot of children don't wear shoes when they walk.
          During talked with him I found the book trip system should be improved.

        </div>
      </div>

      <nuxt-link to="/about">特定商取引法に基づく表記</nuxt-link>
    </div>
  </div>
  <Footer />

</template>
