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
              <p class="text-white/80 text-xs">Asisten Verifikasi Hadits</p>
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
          Saya siap membantu Anda dalam verifikasi hadits.<br />Tanyakan apapun tentang keaslian hadits.
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
              <p class="text-sm leading-relaxed whitespace-pre-wrap">{{ message.text }}</p>
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
    // Stream response from Groq
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "system",
          "content": `You are a Hadith Verification Pre-Processor.

Your ONLY job is to analyze the user's message and output EXACTLY ONE valid JSON object.

=================================================================
1) INVALID
Triggered when:
- Pesan terlalu umum,
- Tidak ada topik hadis,
- Tidak ada kata yang bisa dipakai query,
- Tidak relevan dengan agama / budi pekerti.

FORMAT:
{
  "type": "invalid",
  "message": "mohon memasukkan topik hadis yang benar yaa"
}
=================================================================

2) HADITH_QUERY  
Triggered when:
- User meminta "hadis tentang ..."
- User meminta verifikasi / takhrij
- User mengirim teks hadis (Arab/English/Indonesia)
- User menyebut kitab / chapter / nomor

Your task:
Extract ONLY data that *benar-benar disebut user*  
atau data *book + chapter* yang valid DAN umum dipakai untuk topik tertentu.

Supported keys untuk hadithapi:
- book          : slug kitab yang disebut user atau bab relevan (TIDAK BOLEH DIPALSUKAN)
- chapter       : nomor bab yang disebut user atau bab relevan yang benar-benar ada
- hadithNumber  : jika user menyebut nomor
- hadithArabic  : jika user mengirim teks Arab
- hadithEnglish : HANYA untuk verifikasi hadis (keyword dari teks hadis), bukan untuk topik
- status        : jika user menyebut sahih / hasan / dhaif

RULES:
- TOPIK → WAJIB mengembalikan "book" + "chapter" yang VALID (tidak boleh hadithEnglish)
- VERIFIKASI TEKS HADIS → boleh hadithEnglish
- Tidak boleh menebak nomor hadis
- Tidak boleh membuat kitab atau chapter palsu
- Hanya keluarkan data yang bisa digunakan langsung di hadithapi

FORMAT (hanya isi field yang memang valid):

{
  "type": "hadith_query",
  "params": {
    "book": "sahih-bukhari",
    "chapter": 1
  }
}
=================================================================

3) DEFAULT  
Triggered ketika:
- Pesan tidak meminta pencarian hadis
- Pesan bukan verifikasi
- Pesan adalah pertanyaan umum tentang agama / budi pekerti

FORMAT:
{
  "type": "default",
  "message": "JAWABAN NORMALMU DI SINI"
}

"message" harus berisi jawaban normal seperti AI biasa.
=================================================================

GLOBAL RULES:
- Output harus 100% valid JSON (tanpa teks lain).
- Tidak boleh menambah, mengarang, atau menghalukan kitab/bab/nomor.
- hadithEnglish hanya dipakai ketika user mengirim teks hadis (verifikasi).
- Untuk pertanyaan topik, wajib pakai book + chapter yang valid.
- Jangan menulis isi hadis.

`
        },
        {
          "role": "user",
          "content": userQuestion
        }
      ],
      "model": "openai/gpt-oss-120b",
      "temperature": 1,
      "max_completion_tokens": 2000,
      "top_p": 1,
      "stream": false,
      "stop": null
    })

    let firstResponse = JSON.parse(chatCompletion.choices[0].message.content);
    console.log("First Response:", firstResponse);

    let finalResponse;
    if (firstResponse.type === "hadith_query") {
      try {
        // Call Vercel Edge Function instead of direct API
        const params = new URLSearchParams();

        // Add params from Groq response
        if (firstResponse.params && typeof firstResponse.params === 'object') {
          Object.entries(firstResponse.params).forEach(([key, value]) => {
            params.append(key, value);
          });
        }

        const edgeUrl = `/api/hadith?${params.toString()}`;
        console.log("Calling Edge Function:", edgeUrl);

        const response = await axios.get(edgeUrl);
        console.log("Hadith API Response:", response);
        const data = response.data;

        if (data && data.hadiths && data.hadiths.data) {
          let hadithList = data.hadiths.data.map((h, i) =>
            `${i + 1}. ${h.hadithEnglish}\n   - ${h.book.bookName}\n`
          ).join('\n');

          const chatSummary = await groq.chat.completions.create({
            "messages": [
              {
                "role": "system",
                "content": `You are a Hadith Summary Generator.
Your task is to summarize the following hadiths into a concise format for the user.
`              },
              {
                "role": "user",
                "content": `Here are the hadiths:\n\n${hadithList}\n\nPlease provide a brief summary highlighting the key points of these hadiths for the user. sesuaikan dengan bahasa user yang sebelumnya digunakan. user sebelumnya bertanya ${userQuestion}, jadi buat ringkasan atau ambil hadith yang sesuai dan mudah dipahami berdasarkan pertanyaan user, buat link hadith menuju sumber di SUNNAH.com . JANGAN TAMBAHKAN ATAU UBAH ISI HADITS.`
              }
            ],
            "model": "openai/gpt-oss-120b",
            "temperature": 0.7,
            "max_completion_tokens": 1000,
            "top_p": 1,
            "stream": false,
            "stop": null
          });
        } else {
          finalResponse = 'Tidak ditemukan hadits yang sesuai.';
        }

      } catch (error) {
        console.error("Error fetching hadith:", error);
        finalResponse = `Terjadi kesalahan saat memvalidasi data hadiths`;
      }

    } else if (firstResponse.type === "invalid") {
      finalResponse = firstResponse.message;

    } else {
      finalResponse = firstResponse.message;
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
      text: 'Maaf, terjadi kesalahan saat menghubungi AI. Pastikan API key Groq sudah dikonfigurasi dengan benar di file .env',
      time: getCurrentTime()
    })
  } finally {



    isLoading.value = false
    await nextTick()
    scrollToBottom()
  }
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
