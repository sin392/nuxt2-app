<script setup lang="ts">
import { EMAIL, EMAIL_HREF } from '~/consts/contact'
import { TWITTER_URL, YOUTUBE_URL, NOTE_CREATOR_URL } from '~/consts/url'

interface ContactType {
  label: string
  name: string
  href: string
}

const CONTACTS: ContactType[] = [
  { label: 'Email', name: EMAIL, href: EMAIL_HREF },
  {
    label: 'Twitter',
    name: 'Kosen-Sparkle (@kosen_sparkle)',
    href: TWITTER_URL,
  },
  { label: 'Youtube', name: 'Kosen-Sparkleチャンネル', href: YOUTUBE_URL },
  { label: 'Note', name: 'Kosen_Sparkle', href: NOTE_CREATOR_URL },
]
</script>

<template>
  <div class="contact-page">
    <h1 class="title">お問い合わせ先</h1>
    <div class="body">
      <div class="contacts">
        <p v-for="item in CONTACTS" :key="item.name" class="contact-item">
          <span class="contact-label">{{ item.label }}:</span>
          <a :href="item.href" target="_blank">
            {{ item.name }}
          </a>
        </p>
      </div>
      <div class="announce">
        <div>運営メンバーやイベント協力のご連絡などもお待ちしております！</div>
        <ul>
          <li>キャリア支援や起業に興味がある</li>
          <li>組織運営の勉強がしてみたい</li>
          <li>高専生の話が聞きたい！力が借りたい！</li>
        </ul>
        <p>卒業生・社会人・非高専生の方もぜひお気軽にご連絡ください。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  width: 60%;
  height: 80%;
  margin: auto;
  box-shadow: 0 0 5px darkgray;
  padding: 20px;
}
.body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.title {
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  color: inherit;
  margin-bottom: 32px;
}
.contacts {
  font-size: large;
}
.contact-label {
  display: inline-block;
  width: 6rem;
  letter-spacing: 2px;
}
.announce {
  font-size: medium;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.announce ul {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
}
.announce li {
  font-size: x-large;
  font-weight: bold;
}
@media (max-width: 480px) {
  .contact-page {
    width: 80%;
  }
  .title {
    margin: 0;
  }
  .body {
    width: 100%;
    padding-bottom: 0;
    flex-grow: 0;
  }
  .contacts {
    padding: 0 100px;
    font-size: small;
  }
  .contact-item {
    margin: 0;
  }
  .contact-label {
    display: block;
  }
  .announce {
    width: 80%;
    font-size: smaller;
    margin-top: 20px;
  }
  .announce ul {
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 5px;
    padding-left: 10px;
  }
  .announce li {
    font-size: smaller;
    font-weight: bold;
  }
}
</style>
