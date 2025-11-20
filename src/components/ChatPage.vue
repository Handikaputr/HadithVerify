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
          "content": `You are a Hadith Query Analyzer. Output ONLY valid JSON.

=================================================================
DETECTION LOGIC
=================================================================
1) INVALID - Tidak relevan dengan hadits
   Trigger: pesan umum, greeting, tidak ada topik hadits
   Output: {"type": "invalid", "message": "Mohon sebutkan topik hadits yang ingin dicari"}

2) HADITH_QUERY - User mencari hadits
   Trigger: 
   - "hadits tentang..." / "hadith about..."
   - Verifikasi teks hadits (Arab/English/Indonesia)
   - Menyebut kitab/chapter/nomor eksplisit
   
3) DEFAULT - Pertanyaan umum agama
   Trigger: pertanyaan fiqh, tafsir, sejarah, tidak minta hadits spesifik
   Output: {"type": "default", "message": "JAWABAN SINGKAT"}

=================================================================
HADITH API PARAMETERS
=================================================================
JANGAN PERNAH mengarang book/chapter/number yang tidak ada!

Gunakan hadithEnglish untuk pencarian keyword:
- Ekstrak kata kunci PENTING dari pertanyaan user
- Gunakan bahasa Inggris
- 2-5 kata yang paling relevan
- Contoh: "hukum membunuh" → "killing murder blood"

Valid books (slug):
- sahih-bukhari
- sahih-muslim  
- sunan-abudawud
- jami-tirmidhi
- sunan-nasai
- sunan-ibnmajah
- bulugh-al-maram
- 40-hadith-nawawi
- riyadh-as-salihin

STRATEGY:
1. User menyebut kitab/chapter/nomor → gunakan data eksplisit
2. User hanya menyebut topik → gunakan hadithEnglish dengan keyword
3. User kirim teks hadits → gunakan hadithEnglish untuk verifikasi

OUTPUT FORMAT:
{
  "type": "hadith_query",
  "params": {
    "hadithEnglish": "keyword1 keyword2"
  }
}

ATAU jika user sebutkan eksplisit:
{
  "type": "hadith_query", 
  "params": {
    "book": "sahih-bukhari",
    "hadithNumber": "123"
  }
}

=================================================================
EXAMPLES
=================================================================
User: "hadits tentang membunuh manusia"
Output: {"type": "hadith_query", "params": {"hadithEnglish": "killing murder bloodshed"}}

User: "cari hadits sahih bukhari nomor 25"  
Output: {"type": "hadith_query", "params": {"book": "sahih-bukhari", "hadithNumber": "25"}}

User: "verifikasi: la ilaha illallah"
Output: {"type": "hadith_query", "params": {"hadithEnglish": "la ilaha illallah"}}

User: "apa itu hadits shahih?"
Output: {"type": "default", "message": "Hadits shahih adalah..."}

User: "halo"
Output: {"type": "invalid", "message": "Silakan tanyakan tentang hadits"}

=================================================================
CRITICAL RULES
=================================================================
✓ hadithEnglish = keyword pencarian (2-5 kata penting)
✓ Hanya gunakan book/chapter/number jika user SEBUTKAN EKSPLISIT
✓ Output 100% valid JSON tanpa teks tambahan
✗ JANGAN mengarang kitab/bab/nomor
✗ JANGAN gunakan book+chapter kalau tidak yakin
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


        //  kondisi pertama - berkaitan dengan hadith
        if (data && data.hadiths && data.hadiths.data) {
          let hadithList = data.hadiths.data.map((h, i) =>
            `${i + 1}. ${h.hadithEnglish}\n   - ${h.book.bookName}\n`
          ).join('\n');

          const chatSummary = await groq.chat.completions.create({
            "messages": [
              {
                "role": "system",
                "content": `Anda adalah Hadith Formatter yang HANYA memformat data hadits yang sudah ada.

ATURAN KETAT:
1. DILARANG menambah, mengubah, atau mengarang isi hadits
2. DILARANG menambah komponen yang tidak ada (tingkatan, nomor, dll)
3. HANYA pilih hadits yang RELEVAN dengan pertanyaan user
4. WAJIB gunakan bahasa yang sama dengan pertanyaan user
5. Format HARUS sesuai template

TEMPLATE FORMAT (per hadits):
tampilkan juga informasi penting seperti kitab, status, nomor, dan penulis (jika ada).


**<h2>Nama Kitab</h2>** - <small>[Status jika ada] - [Nomor jika ada]</small>
Sumber: [URL ke sunnah.com]

[Isi hadits ASLI tanpa perubahan]

---

CONTOH OUTPUT:
<h2>Sahih Muslim - Hadits 156</h2> <small>status</small>
 <a href="https://sunnah.com/muslim/1/156">lihat hadith ✅</a>
[Isi hadits dari API - text arab]
[Isi hadits dari API - terjemahkan bahasa sesuai pertanyaan user]

---

<h2>Sahih Muslim - Hadits 156</h2>
 <a href="https://sunnah.com/muslim/1/156">lihat hadith ✅</a>

[Isi hadits dari API]

INSTRUKSI:
- Jika hadits tidak relevan dengan pertanyaan, JANGAN tampilkan
- Jika data kosong (status/nomor), JANGAN tulis "[tidak ada]" atau sejenisnya
- Berikan pengantar singkat (1 kalimat) yang relevan dengan pertanyaan user
- Maksimal tampilkan 5 hadits paling relevan
`
              },
              {
                "role": "user",
                "content": `Pertanyaan user: "${userQuestion}"

Data hadits dari API:
${hadithList}

Format hadits di atas sesuai template. Pilih HANYA yang relevan dengan pertanyaan user.`
              }
            ],
            "model": "openai/gpt-oss-120b",
            "temperature": 0.3,
            "max_completion_tokens": 1500,
            "top_p": 1,
            "stream": false,
            "stop": null
          });
          finalResponse = chatSummary.choices[0].message.content;
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
      text: 'Maaf, terjadi kesalahan saat proses AI',
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
