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

  await nextTick()
  scrollToBottom()

  try {
    // Step 1: Classify the question and extract parameters
    const classification = await classifyQuestion(userQuestion)
    console.log("Classification:", classification)

    let finalResponse

    if (classification.type === 'hadith_query') {
      // Step 2: Search for hadith
      const hadiths = await searchHadith(classification.params)
      console.log("Hadiths found:", hadiths)

      // Step 3: Format the response
      if (hadiths && hadiths.length > 0) {
        finalResponse = await formatHadithResponse(hadiths, userQuestion)
      } else {
        // Fallback: try keyword search if specific search failed
        if (classification.params.hadithNumber || classification.params.book) {
          const fallbackHadiths = await searchHadith({
            hadithEnglish: classification.params.hadithEnglish || extractKeywords(userQuestion)
          })
          if (fallbackHadiths && fallbackHadiths.length > 0) {
            finalResponse = await formatHadithResponse(fallbackHadiths, userQuestion)
          } else {
            finalResponse = 'Maaf, tidak ditemukan hadits yang sesuai dengan pencarian Anda.'
          }
        } else {
          finalResponse = 'Maaf, tidak ditemukan hadits yang sesuai dengan pencarian Anda.'
        }
      }
    } else if (classification.type === 'invalid') {
      finalResponse = classification.message
    } else {
      finalResponse = classification.message
    }

    messages.value.push({
      sender: 'ai',
      text: finalResponse,
      time: getCurrentTime()
    })

  } catch (error) {
    console.error('Error in sendMessage:', error)
    messages.value.push({
      sender: 'ai',
      text: 'Maaf, terjadi kesalahan saat memproses permintaan Anda.',
      time: getCurrentTime()
    })
  } finally {
    isLoading.value = false
    await nextTick()
    scrollToBottom()
  }
}

async function classifyQuestion(question) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Anda adalah classifier untuk pertanyaan hadits. Keluarkan HANYA JSON.

Tugas:
1. Tentukan apakah pertanyaan user termasuk:
   - "hadith_query": jika user menanyakan hadits tertentu (dengan teks, kitab, nomor, atau topik)
   - "default": pertanyaan umum tentang Islam tapi tidak meminta hadits spesifik
   - "invalid": tidak relevan dengan hadits atau Islam

2. Untuk "hadith_query", ekstrak parameter:
   - book: hanya jika user menyebutkan nama kitab secara eksplisit (e.g., "Bukhari", "Muslim")
   - hadithNumber: hanya jika user menyebutkan nomor hadits
   - hadithEnglish: keyword untuk pencarian (2-5 kata penting dalam Bahasa Inggris)

Contoh:
User: "Hadits tentang sedekah"
→ {"type": "hadith_query", "params": {"hadithEnglish": "charity donation"}}

User: "Bukhari nomor 25"
→ {"type": "hadith_query", "params": {"book": "sahih-bukhari", "hadithNumber": "25"}}

User: "Apa hukum shalat?"
→ {"type": "default", "message": "Shalat adalah kewajiban bagi setiap muslim..."}

User: "Halo"
→ {"type": "invalid", "message": "Silakan tanyakan tentang hadits"}

Jangan mengarang informasi. Jika tidak yakin, gunakan hadithEnglish saja.`
      },
      {
        role: "user",
        content: question
      }
    ],
    model: "mixtral-8x7b-32768", // Gunakan model yang lebih cepat
    temperature: 0.1,
    max_tokens: 500,
    response_format: { type: "json_object" }
  })

  return JSON.parse(chatCompletion.choices[0].message.content)
}

async function searchHadith(params) {
  try {
    const searchParams = new URLSearchParams()

    // Add all parameters that exist
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.append(key, value.toString())
      }
    })

    const response = await axios.get(`/api/hadith?${searchParams.toString()}`)
    return response.data.hadiths?.data || []
  } catch (error) {
    console.error("Error searching hadith:", error)
    return null
  }
}

async function formatHadithResponse(hadiths, userQuestion) {
  // Batasi jumlah hadits yang ditampilkan
  const limitedHadiths = hadiths.slice(0, 3)

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Anda adalah pembentuk respons hadits. Format hadits yang diberikan dengan cara yang mudah dibaca.

ATURAN:
1. Tampilkan maksimal 3 hadits yang paling relevan dengan pertanyaan user.
2. Untuk setiap hadits, sertakan:
   - Kitab dan nomor (jika ada)
   - Teks hadits dalam bahasa Indonesia (jika tersedia) atau Inggris
   - Tautan ke sunnah.com (jika ada informasi yang cukup)
3. Gunakan bahasa yang sama dengan pertanyaan user.
4. Jangan mengubah atau menambah isi hadits.
5. Berikan pengantar singkat.

Format:
[Pengantar singkat]

**Kitab - Nomor**
[Teks hadits]
[Tautan jika ada]

---`
      },
      {
        role: "user",
        content: `Pertanyaan: "${userQuestion}"

Data hadits:
${limitedHadiths.map((h, i) => `
${i + 1}. Kitab: ${h.book?.bookName || 'Tidak diketahui'}
   Nomor: ${h.hadithNumber || 'Tidak diketahui'}
   Teks: ${h.hadithEnglish || h.hadithArabic || 'Teks tidak tersedia'}
   ${h.chapter ? `Bab: ${h.chapter}` : ''}
`).join('\n')}`
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.3,
    max_tokens: 1500
  })

  return chatCompletion.choices[0].message.content
}

function extractKeywords(question) {
  // Simple keyword extraction - bisa ditingkatkan nanti
  const stopWords = ['apa', 'bagaimana', 'apakah', 'yang', 'dengan', 'untuk', 'tentang', 'hadits', 'hadis']
  const words = question.toLowerCase().split(' ')
  return words.filter(word => 
    word.length > 2 && !stopWords.includes(word)
  ).slice(0, 3).join(' ')
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
