<template>
  <div class="max-w-3xl mx-auto leading-relaxed text-gray-800">
    <div v-html="html"></div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  text: String
})

const html = ref('')

// 🔥 КЭШ КАРТИНОК (чтобы не лагало)
const imageCache = {}

// 🔥 перевод RU → EN (чтобы поиск норм работал)
async function translate(text) {
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=ru|en`
    )
    const data = await res.json()
    return data.responseData.translatedText
  } catch {
    return text
  }
}

// 🔥 основной поиск картинки
async function getImage(query) {
  if (!query) return fallbackImage('history')

  // если уже искали — берём из кэша
  if (imageCache[query]) return imageCache[query]

  try {
    const enQuery = await translate(query)

    // поиск страницы
    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(enQuery)}&format=json&origin=*`
    )

    const searchData = await searchRes.json()

    if (!searchData.query.search.length) {
      const img = fallbackImage(enQuery)
      imageCache[query] = img
      return img
    }

    const title = searchData.query.search[0].title

    // берём summary
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    )

    const data = await res.json()

    if (data.thumbnail?.source) {
      imageCache[query] = data.thumbnail.source
      return data.thumbnail.source
    }

    const img = fallbackImage(enQuery)
    imageCache[query] = img
    return img

  } catch (e) {
    console.log('img error:', e)
    const img = fallbackImage(query)
    imageCache[query] = img
    return img
  }
}

// 🔥 fallback (НЕ рандом, а по теме)
function fallbackImage(query) {
  return `https://source.unsplash.com/600x400/?${encodeURIComponent(query)}`
}

watchEffect(() => {
  if (!props.text) return

  const lines = props.text.split('\n')
  let result = ''
  let topicIndex = 1
  let lastTitle = ''
  let inList = false

  for (let line of lines) {
    line = line.trim()
    if (!line) continue

    // 🔥 авто картинка (ловит любые варианты)
  if (line.startsWith('[img:')) {

  const index = Math.random().toString(36).slice(2)

  // 🔥 вытаскиваем текст из [img: ...]
  const query = line
    .replace('[img:', '')
    .replace(']', '')
    .trim()

  let img = fallbackImage(query || 'history')

  // 🔥 загружаем реальную картинку в фоне
  getImage(query).then(realImg => {
    if (realImg) {
      const el = document.getElementById(`img-${index}`)
      if (el) el.src = realImg
    }
  })

  result += `
    <div class="md:float-right md:ml-4 mb-2 w-full md:w-64">
      <img 
        id="img-${index}"
        src="${img}" 
        class="rounded-lg shadow-md w-full object-cover"
      />
    </div>
  `
  continue
}

    // | текст |
    if (line.includes('|')) {
      result += `<p class="mb-3">${line.replaceAll('|','')}</p>`
      continue
    }

    // ] текст ]
    if (line.includes(']')) {
      const clean = line.replaceAll(']','')
      result += `<h3 class="text-2xl font-semibold mt-5 mb-2 text-center text-blue-700">${clean}</h3>`
      lastTitle = clean
      continue
    }

    // # текст #
    if (line.includes('#')) {
      const clean = line.replaceAll('#','')
      result += `<h3 class="text-lg font-semibold mt-5 mb-2 text-black">${clean}</h3>`
      lastTitle = clean
      continue
    }

    // 🔥 список (теперь нормально обёрнут)
    if (line.startsWith('- ')) {
      if (!inList) {
        result += `<ul class="mb-3">`
        inList = true
      }
      result += `<li class="ml-5 list-disc">${line.slice(2)}</li>`
      continue
    } else {
      if (inList) {
        result += `</ul>`
        inList = false
      }
    }

    // заголовок
    if (line.length < 60) {
      result += `<h2 class="text-xl font-bold mt-6 mb-2">${topicIndex}. ${line}</h2>`
      lastTitle = line
      topicIndex++
      continue
    }

    // текст
    result += `<p class="mb-3">${line}</p>`
  }

  if (inList) result += `</ul>`

  html.value = result
})
</script>