<template>
  <div class="flex flex-col h-screen w-screen m-0  overflow-hidden"
    :class="isDarkMode ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'">

    <!-- Header with Glass Effect -->
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-90"></div>
      <div class="relative backdrop-blur-sm bg-white/10 px-5 py-5 shadow-2xl border-b border-white/20">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <!-- Islamic Icon -->
            <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
              </svg>
            </div>
            <div>
              <h1 class="text-white font-bold text-lg tracking-wide">Hadith Verify</h1>
              <p class="text-white/80 text-xs">Asisten Pencari dan verivikasi Hadits</p>
            </div>
          </div>

          <!-- Theme Toggle -->
          <button @click="toggleTheme"
            class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95"
            :title="isDarkMode ? 'Mode Terang' : 'Mode Gelap'">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="w-5 h-5 text-white">
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="w-5 h-5 text-white">
              <path fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Messages Area -->
    <div ref="messagesContainer" class="flex-1 overflow-y-auto px-4 py-6">
      <!-- Welcome Message -->
      <div v-if="messages.length === 1" class="flex flex-col items-center justify-center h-full text-center px-6">
        <div class="w-20 h-20 rounded-2xl mb-4 flex items-center justify-center"
          :class="isDarkMode ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20' : 'bg-gradient-to-br from-emerald-100 to-teal-100'">
          <svg class="w-10 h-10" :class="isDarkMode ? 'text-emerald-400' : 'text-emerald-600'" fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-800'">
          Assalamu'alaikum
        </h3>
        <p class="text-sm mb-6" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
          Saya siap membantu Anda dalam mencari dan verifikasi hadits.<br /> kami menyimpan data dari 6 kitab induk
          hadits (Kutubus Sittah).
        </p>
        <div class="flex flex-wrap gap-2 justify-center">
          <button @click="quickAsk('Apa itu hadits shahih?')"
            class="px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105"
            :class="isDarkMode ? 'bg-slate-800 text-gray-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
            Hadits Shahih?
          </button>
          <button @click="quickAsk('Bagaimana cara mengecek keaslian hadits?')"
            class="px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105"
            :class="isDarkMode ? 'bg-slate-800 text-gray-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
            Cek Keaslian
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div v-else class="space-y-4">
        <div v-for="(message, index) in messages" :key="index" class="flex animate-messageSlide"
          :class="message.sender === 'user' ? 'justify-end' : 'justify-start'">

          <!-- AI Avatar -->
          <div v-if="message.sender === 'ai'"
            class="w-8 h-8 rounded-full flex-shrink-0 mr-2 flex items-center justify-center"
            :class="isDarkMode ? 'bg-gradient-to-br from-emerald-500 to-teal-500' : 'bg-gradient-to-br from-emerald-400 to-teal-400'">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
            </svg>
          </div>

          <!-- Message Bubble -->
          <div class="flex flex-col max-w-[75%]">
            <div class="px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm" :class="message.sender === 'user'
              ? isDarkMode
                ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-br-md'
                : 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-br-md'
              : isDarkMode
                ? 'bg-slate-800/80 text-gray-100 rounded-bl-md border border-slate-700/50'
                : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'">
              <div class="text-sm leading-relaxed whitespace-pre-wrap" v-html="message.text"></div>
            </div>
            <span class="text-[10px] mt-1 px-2"
              :class="[message.sender === 'user' ? 'text-right' : 'text-left', isDarkMode ? 'text-gray-500' : 'text-gray-400']">
              {{ message.time }}
            </span>
          </div>

          <!-- User Avatar -->
          <div v-if="message.sender === 'user'"
            class="w-8 h-8 rounded-full flex-shrink-0 ml-2 flex items-center justify-center"
            :class="isDarkMode ? 'bg-gradient-to-br from-blue-500 to-indigo-500' : 'bg-gradient-to-br from-blue-400 to-indigo-400'">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        <!-- Loading Indicator -->
        <div v-if="isLoading" class="flex justify-start items-start">
          <div class="w-8 h-8 rounded-full flex-shrink-0 mr-2 flex items-center justify-center"
            :class="isDarkMode ? 'bg-gradient-to-br from-emerald-500 to-teal-500' : 'bg-gradient-to-br from-emerald-400 to-teal-400'">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
            </svg>
          </div>
          <div class="px-4 py-3 rounded-2xl rounded-bl-md backdrop-blur-sm"
            :class="isDarkMode ? 'bg-slate-800/80 border border-slate-700/50' : 'bg-white border border-gray-200'">
            <div class="flex gap-1.5">
              <div class="w-2 h-2 rounded-full animate-bounce" :class="isDarkMode ? 'bg-emerald-400' : 'bg-emerald-500'"
                style="animation-delay: 0ms"></div>
              <div class="w-2 h-2 rounded-full animate-bounce" :class="isDarkMode ? 'bg-emerald-400' : 'bg-emerald-500'"
                style="animation-delay: 150ms"></div>
              <div class="w-2 h-2 rounded-full animate-bounce" :class="isDarkMode ? 'bg-emerald-400' : 'bg-emerald-500'"
                style="animation-delay: 300ms"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area with Glassmorphism -->
    <div class="p-4 backdrop-blur-xl border-t transition-all duration-300" :class="isDarkMode
      ? 'bg-slate-900/50 border-slate-700/50'
      : 'bg-white/80 border-gray-200'">
      <div class="flex gap-2 items-end">
        <div class="flex-1 relative">
          <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Tanyakan tentang hadits..."
            :disabled="isLoading"
            class="w-full px-5 py-3.5 rounded-2xl text-sm outline-none transition-all duration-300 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            :class="isDarkMode
              ? 'bg-slate-800 text-white border border-slate-700 placeholder-gray-500 focus:ring-emerald-500/50 focus:border-emerald-500'
              : 'bg-white text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-emerald-500/50 focus:border-emerald-500'" />
        </div>
        <button @click="sendMessage" :disabled="!newMessage.trim() || isLoading"
          class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          :class="isDarkMode
            ? 'bg-gradient-to-br from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500'
            : 'bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-white transform rotate-45">
            <path
              d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import Groq from 'groq-sdk'
import axios from 'axios'
const messages = ref([
  {
    sender: 'ai',
    text: 'Halo! Saya adalah asisten AI untuk verifikasi hadits. Ada yang bisa saya bantu?',
    time: getCurrentTime()
  }
])

const newMessage = ref('')
const messagesContainer = ref(null)
const isDarkMode = ref(true)
const isLoading = ref(false)
const chatData = ref([
  {
    "role": "system",
    "content": `You are a Hadith Query Analyzer. Output ONLY valid JSON.

=================================================================
DETECTION LOGIC
=================================================================
1) INVALID - Tidak relevan dengan hadits
   Trigger: pesan umum, greeting, tidak ada topik hadits
   Output: {"type": "invalid", "message": "Mohon sebutkan topik hadits yang ingin dicari"}
    
2) HADITH_SEARCH - User mencari hadits berdasarkan kitab dan nomor, user meminta untuk menjelaskan suatu hadist  maka tetap masuk ini.
   Trigger: 
      - Menyebutkan salah satu kitab (Shahih al-Bukhari
Shahih Muslim
Jami' al-Tirmidzi
Sunan Abu Dawud
Sunan Ibnu Majah
Sunan an-Nasa'i
), penulisan nama kitab pada output sesuai daftar sebelumnya, jadi ketika user input nama kitab salah tulis sedikit maka benarkan. user input kitab dan angka nomor. jika user input kitab yang tidak ada pada daftar maka jangan maka respon invalid "kitab tidak temasuk dalam daftar 6 kitab induk hadits (Kutubus Sittah)".
   Output: 
      {
        "type": "hadith_search",
        "book": "kitab",
        "chapter": "nomor",
        "reason": false // jika user meminta penjelasan atau kamu perlu memberikan respon setelah data hadist tersedia maka beri nilai true
      }

3) HADITH_QUERY - User mencari hadits berdasarkan kata kunci
   Trigger: 
      - Ada kata kunci: "hadits", "hadith", "verifikasi", "cari hadits", "carikan hadits"
      - Atau user memberikan teks hadits (dalam bahasa Arab atau Indonesia)
      - user menyebutkan hadist untuk verifikasi shahih atau tidaknya -> [seluruh text indonesia/arabnya atau kalimat pertama jika banyak [potongan murni tanpa imbuhan apapun seperti ... ]]
   Output: 
      {
        "type": "hadith_query",
        "query": "kata kunci atau teks hadits yang dicari",
        "max":1, //jika berkaitan verifikasi shahih atau tidaknya, selain itu hapus properti ini
        "book": [jika user meminta hadist dari kitab tertentu - format penulisan kitab seperti nomor 2 - jika banyak dipisah dengan ","]
        "answer": {
          "succes": [jawaban ketika hadist ditemukan, jika betarnya shahih atau tidaknya - ['hadist ini memiliki derajat yang tinggi' (jangan secara langsung menyebut shahih)],)],
          "failed": [jawaban ketika hadist tidak ditemukan - ['Maaf, saya tidak menemukan hadits yang spesifik menyebutkan ...' , 'Maaf, saya tidak menemukan hadits yang sesuai dengan teks yang Anda berikan di 6 kitab induk hadits (Kutubus Sittah). Hadits ini tidak dapat kami verifikasi keasliannya atau belum pasti']]
        }
      }

4) DEFAULT - Pertanyaan umum agama
   Trigger: pertanyaan fiqh, tafsir, sejarah, tidak minta hadits spesifik
   Output: {"type": "default", "message": "JAWABAN SINGKAT"}

=================================================================
CRITICAL RULES
=================================================================
✓ Untuk hadith_search, pastikan kitab yang disebutkan adalah dari daftar yang valid.
✓ Untuk hadith_query, ambil kata kunci atau teks hadits yang dicari (dalam bahasa Indonesia atau Arab).
✓ Output 100% valid JSON tanpa teks tambahan.
✗ JANGAN mengarang kitab/bab/nomor.
✗ JANGAN gunakan hadith_search jika tidak yakin.

=================================================================
EXAMPLES
=================================================================
User: "hadits tentang membunuh manusia"
Output: {"type": "hadith_query", "query": "membunuh manusia", "answer": {"success": ["Berikut adalah hadits yang menyebutkan tentang membunuh manusia: ..."], "failed": ["Maaf, saya tidak menemukan hadits yang spesifik menyebutkan tentang membunuh manusia dari 6 kitab induk hadits (Kutubus Sittah)."]}}

User: "cari hadits sahih al - bukhari nomor 25"  
Output: {"type": "hadith_search", "book": "Shahih al-Bukhari", "chapter": "25"} //chapter atau nomor

User: "verifikasi: la ilaha illallah"
Output: {"type": "hadith_query", "query": "la ilaha illallah", "answer": {"success": ["Berikut adalah hadits yang menyebutkan 'la ilaha illallah': ..."], "failed": ["Maaf, saya tidak menemukan hadits yang spesifik menyebutkan 'la ilaha illallah'."]}}

User: "hadits bukhori 25"
Output: {"type": "hadith_search", "book": "Shahih al-Bukhari", "chapter": "25"}

User: "hadits muslim nomor 123"
Output: {"type": "hadith_search", "book": "Shahih Muslim", "chapter": "123"}

User: "apa itu hadits shahih?"
Output: {"type": "default", "message": "Hadits shahih adalah hadits yang memenuhi lima syarat: sanad bersambung, perawi adil, perawi dhabith, tidak syadz, dan tidak illat."}

User: "siapakah jokowi?"
Output: {"type": "invalid", "message": "Mohon sebutkan topik hadits yang ingin dicari"}
`
  }
])

// Groq API setup
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY || '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',
  dangerouslyAllowBrowser: true
})
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  }
})

function resetChat() {
  chatData.value = [
    {
      "role": "system",
      "content": `You are a Hadith Query Analyzer. Output ONLY valid JSON.

=================================================================
DETECTION LOGIC
=================================================================
1) INVALID - Tidak relevan dengan hadits
   Trigger: pesan umum, greeting, tidak ada topik hadits
   Output: {"type": "invalid", "message": "Mohon sebutkan topik hadits yang ingin dicari"}
    
2) HADITH_SEARCH - User mencari hadits berdasarkan kitab dan nomor, user meminta untuk menjelaskan suatu hadist  maka tetap masuk ini.
   Trigger: 
      - Menyebutkan salah satu kitab (Shahih al-Bukhari
Shahih Muslim
Jami' al-Tirmidzi
Sunan Abu Dawud
Sunan Ibnu Majah
Sunan an-Nasa'i
), penulisan nama kitab pada output sesuai daftar sebelumnya, jadi ketika user input nama kitab salah tulis sedikit maka benarkan. user input kitab dan angka nomor. jika user input kitab yang tidak ada pada daftar maka jangan maka respon invalid "kitab tidak temasuk dalam daftar 6 kitab induk hadits (Kutubus Sittah)".
   Output: 
      {
        "type": "hadith_search",
        "book": "kitab",
        "chapter": "nomor",
        "reason": false // jika user meminta penjelasan atau kamu perlu memberikan respon setelah data hadist tersedia maka beri nilai true
      }

3) HADITH_QUERY - User mencari hadits berdasarkan kata kunci
   Trigger: 
      - Ada kata kunci: "hadits", "hadith", "verifikasi", "cari hadits", "carikan hadits"
      - Atau user memberikan teks hadits (dalam bahasa Arab atau Indonesia)
      - user menyebutkan hadist untuk verifikasi shahih atau tidaknya -> [seluruh text indonesia/arabnya atau kalimat pertama jika banyak [potongan murni tanpa imbuhan apapun seperti ... ]]
   Output: 
      {
        "type": "hadith_query",
        "query": "kata kunci atau teks hadits yang dicari",
        "max":1, //jika berkaitan verifikasi shahih atau tidaknya, selain itu hapus properti ini
        "book": [jika user meminta hadist dari kitab tertentu - format penulisan kitab seperti nomor 2 - jika banyak dipisah dengan ","]
        "answer": {
          "succes": [jawaban ketika hadist ditemukan, jika betarnya shahih atau tidaknya - ['hadist ini memiliki derajat yang tinggi' (jangan secara langsung menyebut shahih)],)],
          "failed": [jawaban ketika hadist tidak ditemukan - ['Maaf, saya tidak menemukan hadits yang spesifik menyebutkan ...' , 'Maaf, saya tidak menemukan hadits yang sesuai dengan teks yang Anda berikan di 6 kitab induk hadits (Kutubus Sittah). Hadits ini tidak dapat kami verifikasi keasliannya atau belum pasti']]
        }
      }

4) DEFAULT - Pertanyaan umum agama
   Trigger: pertanyaan fiqh, tafsir, sejarah, tidak minta hadits spesifik
   Output: {"type": "default", "message": "JAWABAN SINGKAT"}

=================================================================
CRITICAL RULES
=================================================================
✓ Untuk hadith_search, pastikan kitab yang disebutkan adalah dari daftar yang valid.
✓ Untuk hadith_query, ambil kata kunci atau teks hadits yang dicari (dalam bahasa Indonesia atau Arab).
✓ Output 100% valid JSON tanpa teks tambahan.
✗ JANGAN mengarang kitab/bab/nomor.
✗ JANGAN gunakan hadith_search jika tidak yakin.

=================================================================
EXAMPLES
=================================================================
User: "hadits tentang membunuh manusia"
Output: {"type": "hadith_query", "query": "membunuh manusia", "answer": {"success": ["Berikut adalah hadits yang menyebutkan tentang membunuh manusia: ..."], "failed": ["Maaf, saya tidak menemukan hadits yang spesifik menyebutkan tentang membunuh manusia dari 6 kitab induk hadits (Kutubus Sittah)."]}}

User: "cari hadits sahih al - bukhari nomor 25"  
Output: {"type": "hadith_search", "book": "Shahih al-Bukhari", "chapter": "25"} //chapter atau nomor

User: "verifikasi: la ilaha illallah"
Output: {"type": "hadith_query", "query": "la ilaha illallah", "max"=1, "answer": {"success": ["Berikut adalah hadits yang menyebutkan 'la ilaha illallah': ..."], "failed": ["Maaf, saya tidak menemukan hadits yang spesifik menyebutkan 'la ilaha illallah'."]}}

User: "hadits bukhori 25"
Output: {"type": "hadith_search", "book": "Shahih al-Bukhari", "chapter": "25"}

User: "hadits muslim nomor 123"
Output: {"type": "hadith_search", "book": "Shahih Muslim", "chapter": "123"}

User: "apa itu hadits shahih?"
Output: {"type": "default", "message": "Hadits shahih adalah hadits yang memenuhi lima syarat: sanad bersambung, perawi adil, perawi dhabith, tidak syadz, dan tidak illat."}

User: "siapakah jokowi?"
Output: {"type": "invalid", "message": "Mohon sebutkan topik hadits yang ingin dicari"}
`
    }
  ]
}
function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

function getCurrentTime() {
  const now = new Date()
  return now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
}

function quickAsk(question) {
  newMessage.value = question
  sendMessage()
}

async function sendMessage() {
  if (!newMessage.value.trim() || isLoading.value) return

  const userQuestion = newMessage.value.trim()

  // Add user message
  messages.value.push({
    sender: 'user',
    text: userQuestion,
    time: getCurrentTime()
  })

  newMessage.value = ''
  isLoading.value = true

  // Scroll to bottom
  await nextTick()
  scrollToBottom()

  try {
    // Add user message to chatData
    chatData.value.push({
      "role": "user",
      "content": userQuestion
    })

    // Stream response from Groq
    const chatCompletion = await groq.chat.completions.create({
      "messages": chatData.value,
      "model": "openai/gpt-oss-120b",
      "temperature": 1,
      "max_completion_tokens": 2000,
      "top_p": 1,
      "stream": false,
      "stop": null
    })
    let firstResponse = JSON.parse(chatCompletion.choices[0].message.content);
    console.log("First Response:", firstResponse);

    // Function to get hadith status based on book
    const getHadithStatus = (bookName) => {
      const shahihBooks = ['Shahih al-Bukhari', 'Shahih Muslim'];
      if (shahihBooks.some(book => bookName.includes(book))) {
        return {
          badge: 'Aman',
          color: 'bg-green-500',
          explanation: 'Hadis dari Shahih Bukhari dan Shahih Muslim memiliki tingkat kesahihan tertinggi. Kedua kitab ini secara khusus disusun untuk mengumpulkan hadis-hadis yang paling otentik setelah Al-Qur\'an.'
        };
      } else {
        return {
          badge: 'Sedang',
          color: 'bg-yellow-500',
          explanation: 'Kitab ini (Sunan Abu Dawud, Sunan At-Tirmidzi, Sunan An-Nasa\'i, atau Sunan Ibnu Majah) memiliki kombinasi hadis shahih, hasan, dan dhaif. Meskipun demikian, di dalamnya terdapat banyak hadis yang berkualitas shahih. Disarankan untuk melakukan verifikasi lebih lanjut dengan ulama.'
        };
      }
    };

    let finalResponse;
    if (firstResponse.type === "hadith_query") {
      try {
        // Call Vercel Edge Function instead of direct API
        const max = firstResponse.max || 3;

        let edgeUrl = `https://hadith-api-wine.vercel.app/api/search?q=${encodeURIComponent(firstResponse.query)}&max=${max}`;

        // Tambahkan parameter book jika ada
        if (firstResponse.book && firstResponse.book.length > 0) {
          const bookParam = Array.isArray(firstResponse.book)
            ? firstResponse.book.join(',')
            : firstResponse.book;
          edgeUrl += `&book=${encodeURIComponent(bookParam)}`;
        }
        console.log("Calling Edge Function:", edgeUrl);

        const response = await axios.get(edgeUrl);
        console.log("Hadith API Response:", response);
        const data = response.data;



        //  kondisi pertama - berkaitan dengan hadith
        if (data != null && data.length > 0) {
          let hadithList = data.map((h, i) =>
            `${i + 1}. ${h.arab}\n - ${h.book} : ${h.number}\n - ${h.indonesia}`
          ).join('\n');

          // Cek dan potong jika lebih dari 1000 token (estimasi ~4 karakter per token)
          const maxTokens = 2000;
          const estimatedCharsPerToken = 5;
          const maxChars = maxTokens * estimatedCharsPerToken;
          if (hadithList.length > maxChars) {
            // Potong array dari belakang sampai di bawah 1000 token
            let truncatedData = [...data];
            while (truncatedData.length > 0) {
              hadithList = truncatedData.map((h, i) => {
                const status = getHadithStatus(h.book);
                return `<div class="mb-4 flex flex-col">
                  <div class="flex items-center gap-1.5 mb-2 flex-wrap">
                    <h2 class='text-base font-semibold'>${i + 1}. ${h.book}</h2>
                    <button onclick="alert('${status.explanation.replace(/'/g, "\\'")}')"
                      style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; height: auto; font-size: 0.75rem; border-radius: 0.375rem; padding: 0.25rem 0.5rem; cursor: pointer; color: ${status.color === 'bg-green-500' ? '#10b981' : '#eab308'}; background-color: ${status.color === 'bg-green-500' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)'}; border: none; line-height: 1.2; white-space: nowrap;">
                      ${status.badge}
                    </button>
                  </div>
<div class="mb-2 text-xs"> Lebih Lengkap : <a target="_blank" href="https://sunnah.com/search?q=${h.arab}" class="px-2 py-1 rounded-md hover:underline" style="color: #6b7280; background-color: rgba(107, 114, 128, 0.1);">sunnah.com</a> <a target="_blank" href="https://www.hadits.id/tentang/${h.arab}" class="px-2 py-1 rounded-md hover:underline" style="color: #6b7280; background-color: rgba(107, 114, 128, 0.1);">hadits.id</a></div>
<p class="text-bold text-end mb-4">${h.arab}</p>
<p class='italic'>"${h.indonesia}"</p>
                  </div > `;
              }).join(''); if (hadithList.length <= maxChars) break;
              truncatedData.pop(); // Hapus element terakhir
            }
            console.log(`Hadith list truncated from ${data.length} to ${truncatedData.length} items`);
          } else {
            // Jika tidak perlu dipotong, tetap format sebagai HTML
            hadithList = data.map((h, i) => {
              const status = getHadithStatus(h.book);
              return `<div class="mb-4 flex flex-col">
                <div class="flex items-center gap-1.5 mb-2 flex-wrap">
                  <h2 class='text-base font-semibold'>${i + 1}. ${h.book}</h2>
                  <button onclick="alert('${status.explanation.replace(/'/g, "\\'")}')"
                    style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; height: auto; font-size: 0.75rem; border-radius: 0.375rem; padding: 0.25rem 0.5rem; cursor: pointer; color: ${status.color === 'bg-green-500' ? '#10b981' : '#eab308'}; background-color: ${status.color === 'bg-green-500' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)'}; border: none; line-height: 1.2; white-space: nowrap;">
                    ${status.badge}
                  </button>
                </div>
<div class="mb-2 text-xs"> Lebih Lengkap : <a target="_blank" href="https://sunnah.com/search?q=${h.arab}" class="px-2 py-1 rounded-md hover:underline" style="color: #6b7280; background-color: rgba(107, 114, 128, 0.1);">sunnah.com</a> <a target="_blank" href="https://www.hadits.id/tentang/${h.arab}" class="px-2 py-1 rounded-md hover:underline" style="color: #6b7280; background-color: rgba(107, 114, 128, 0.1);">hadits.id</a></div>
<p class="text-bold text-end mb-4">${h.arab}</p>
<p class='italic'>"${h.indonesia}"</p>
                </div > `;
            }).join('');
          }

          console.log("Formatted Hadith List:", hadithList);

          // Format plain text untuk AI context
          const plainTextForAI = data.map((h, i) =>
            `${i + 1}. ${h.book} (${h.number}) \nArab: ${h.arab} \nIndonesia: ${h.indonesia} `
          ).join('\n\n');

          chatData.value.push({
            "role": "assistant",
            "content": firstResponse.answer.success.join('\n') + '\n\n' + plainTextForAI
          });

          finalResponse = firstResponse.answer.success.join('\n') + '\n\n' + hadithList;

        } else {
          finalResponse = firstResponse.answer.failed.join('\n');
          chatData.value.push({
            "role": "assistant",
            "content": firstResponse.answer.failed.join('\n')
          });
        }

      } catch (error) {
        resetChat();
        console.error("Error fetching hadith:", error);
        finalResponse = `Terjadi kesalahan saat memvalidasi data hadiths`;
      }

    } else if (firstResponse.type === "hadith_search") {
      try {
        // Call Edge Function untuk hadith book search
        const edgeUrl = `https://hadith-api-wine.vercel.app/api/searchDetail?book=${encodeURIComponent(firstResponse.book)}&number=${encodeURIComponent(firstResponse.chapter)}`;

        const response = await axios.get(edgeUrl);
        console.log("Hadith Search Response:", response);
        const data = response.data;

        if (data != null) {
          // Format sama seperti hadith_query
          const status = getHadithStatus(data.book);
          const hadithList = [data].map((h, i) =>
            `<div class="mb-4 flex flex-col">
              <div class="flex items-center gap-1.5 mb-2 flex-wrap">
                <h2 class='text-base font-semibold'>${i + 1}. ${h.book}</h2>
                <button onclick="alert('${status.explanation.replace(/'/g, "\\'")}')"
                  style="display: inline-flex; align-items: center; justify-content: center; align-self: flex-start; height: auto; font-size: 0.75rem; border-radius: 0.375rem; padding: 0.25rem 0.5rem; cursor: pointer; color: ${status.color === 'bg-green-500' ? '#10b981' : '#eab308'}; background-color: ${status.color === 'bg-green-500' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)'}; border: none; line-height: 1.2; white-space: nowrap;">
                  ${status.badge}
                </button>
              </div>              <div class="mb-2 text-xs">Lebih Lengkap: <a target="_blank" href="https://sunnah.com/searchDetail?q=${h.arab}" class="px-2 py-1 rounded-md hover:underline" style="color: #6b7280; background-color: rgba(107, 114, 128, 0.1);">sunnah.com</a> <a target="_blank" href="https://www.hadits.id/tentang/${h.arab}" class="px-2 py-1 rounded-md hover:underline" style="color: #6b7280; background-color: rgba(107, 114, 128, 0.1);">hadits.id</a></div>
              <p class="text-bold text-end mb-4">${h.arab}</p>
              <p class='italic'>"${h.indonesia}"</p>
            </div>`
          ).join('');

          // Format plain text untuk AI context
          const plainTextForAI = `hadist: ${data.book} (${data.number})\nArab: ${data.arab}\nIndonesia: ${data.indonesia}`;

          // Jika reason true, kirim data ke AI untuk respons tambahan
          if (firstResponse.reason === true) {
            chatData.value.push({
              "role": "assistant",
              "content": plainTextForAI
            });

            // Tambahkan prompt untuk AI agar merespons sesuai pertanyaan user
            chatData.value.push({
              "role": "user",
              "content": "Berdasarkan hadits di atas, berikan kelanjutan jawaban sesuai pertanyaan saya sebelumnya. Jawab dengan singkat dan jelas."
            });

            // Panggil AI lagi untuk mendapat respons tambahan
            const secondCompletion = await groq.chat.completions.create({
              "messages": chatData.value,
              "model": "llama-3.1-8b-instant",
              "temperature": 0.7,
              "max_completion_tokens": 1000,
              "top_p": 1,
              "stream": false,
              "stop": null
            });

            let aiResponseText = secondCompletion.choices[0].message.content;
            console.log("Second AI Response (raw):", aiResponseText);

            // Parse AI response - bisa JSON atau plain text
            let explanationText;
            try {
              const aiResponse = JSON.parse(aiResponseText);
              // Coba ambil dari berbagai struktur JSON
              explanationText = aiResponse.answer?.success || aiResponse.message || aiResponseText;
              // Jika array, join dengan newline
              if (Array.isArray(explanationText)) {
                explanationText = explanationText.join('\n');
              }
            } catch (parseError) {
              console.warn("AI response is not JSON, using plain text:", parseError);
              explanationText = aiResponseText;
            }

            chatData.value.push({
              "role": "assistant",
              "content": explanationText
            });

            finalResponse = hadithList + `<div class="mt-4 p-3 rounded-lg text-sm" style="background-color: var(--explanation-bg, rgba(243, 244, 246, 1)); color: var(--explanation-text, rgba(31, 41, 55, 1)); border: 1px solid var(--explanation-border, rgba(229, 231, 235, 1));">${explanationText}</div>`;
          } else {
            // Jika reason false, hanya tampilkan hadits
            chatData.value.push({
              "role": "assistant",
              "content": "Berikut adalah hadits yang Anda cari:\n\n" + plainTextForAI
            });

            finalResponse = "Berikut adalah hadits yang Anda cari:\n\n" + hadithList;
          }
        } else if (response.status === 404) {
          finalResponse = "Maaf, saya tidak dapat menemukan hadits yang sesuai ";
        } else {
          finalResponse = "Maaf, terjadi kesalahan saat mencari hadits.";
        }
      } catch (error) {
        console.error("Error fetching hadith search:", error);
        finalResponse = "Terjadi kesalahan saat mencari hadits berdasarkan kitab dan nomor.";
      }
    }
    else if (firstResponse.type === "invalid") {
      resetChat();
      finalResponse = firstResponse.message;
      chatData.value.push({
        "role": "assistant",
        "content": finalResponse
      });
    } else {
      finalResponse = firstResponse.message;
      chatData.value.push({
        "role": "assistant",
        "content": finalResponse
      });
    }

    messages.value.push({
      sender: 'ai',
      text: finalResponse,
      time: getCurrentTime()
    })

  } catch (error) {
    console.error('Error calling Groq:', error)

    messages.value.push({
      sender: 'ai',
      text: 'Maaf, terjadi kesalahan saat proses AI',
      time: getCurrentTime()
    })
  } finally {


    isLoading.value = false
    await nextTick()
    scrollToBottom()
  }
  console.log(chatData.value);

}

function scrollToBottom() {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}
</script>

<style scoped>
@keyframes messageSlide {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-messageSlide {
  animation: messageSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #10b981, #14b8a6);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #059669, #0d9488);
}
</style>
