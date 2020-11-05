<template>
  <!-- Fixed Setting Button -->
  <div class="options">
    <button
      class="border shadow rounded p-2"
      @click="showOptions = !showOptions"
    >
      Options
    </button>
    <button class="border shadow rounded p-2 mt-2" @click="shuffle">
      Shuffle
    </button>
    <div class="panel" v-show="showOptions">
      <div class="option">
        <input
          type="checkbox"
          id="hira"
          :checked="options.showHiragana"
          @change="options.showHiragana = $event.target.checked"
        />
        <span>Show Hiragana</span>
      </div>
      <div class="option">
        <input
          type="checkbox"
          id="kata"
          :checked="options.showKatakana"
          @change="options.showKatakana = $event.target.checked"
        />
        <span>Show Katakana</span>
      </div>
      <div class="option">
        <input
          type="checkbox"
          id="romaji"
          :checked="options.showRomaji"
          @change="options.showRomaji = $event.target.checked"
        />
        <span>Show Romaji</span>
      </div>
      <div class="option">
        <input
          type="checkbox"
          id="hint"
          :checked="options.showHint"
          @change="options.showHint = $event.target.checked"
        />
        <span>Show Hint</span>
      </div>
    </div>
  </div>
  <!-- Content -->
  <div class="container mx-auto">
    <div
      ref="container"
      class="p-1 bg-gray-200 inline-flex flex-col items-center"
    >
      <!-- Top Hint -->
      <div class="flex hint-col" :class="{ invisible: !options.showHint }">
        <div v-for="i in ['a', 'i', 'u', 'e', 'o']" class="hint-item">
          <div class="mx-auto">
            {{ i }}
          </div>
        </div>
      </div>
      <!-- Each Row -->
      <div v-for="(row, key) in characters" :key="key" class="flex relative">
        <!-- Left Hint -->
        <div
          class="hint-row hint-item flex flex-col justify-center"
          :class="{ invisible: !options.showHint }"
        >
          <div class="mx-auto">
            {{ key }}
          </div>
        </div>
        <!-- Each Col/Card -->
        <div
          v-for="kana in row"
          class="border"
          :class="{
            'bg-gray-100': kana.hiragana != '',
            'border-transparent': kana.hiragana == '',
          }"
        >
          <KanaCard
            class="relative"
            :class="{ 'z-20': isCardDraggable(kana) }"
            :kana="kana"
            :draggable="isCardDraggable(kana)"
            :showHiragana="options.showHiragana"
            :showKatakana="options.showKatakana"
            :showRomaji="options.showRomaji"
            @homed="insertCard(kana)"
            :ref="setCardRef"
          ></KanaCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { Kana, characters } from '/@/data'
import KanaCard from './KanaCard.vue'

class Props {}

@Options({
  components: {
    KanaCard,
  },
})
export default class FreePlay extends Vue.props(Props) {
  options = {
    showHiragana: true,
    showKatakana: true,
    showRomaji: true,
    showHint: true,
  }
  showOptions = false
  characters = characters
  mapHomed = new Map<Kana, boolean>()
  isCardDraggable(kana: Kana): boolean {
    if (this.mapHomed.has(kana)) {
      return this.mapHomed.get(kana) ?? true
    }
    return true
  }
  insertCard(kana: Kana) {
    this.mapHomed.set(kana, false)
  }

  private cards: KanaCard[] = []
  mounted() {
    this.cards = []
  }
  setCardRef(card: KanaCard) {
    if (card.kana.hiragana == '') {
      return
    }
    this.cards.push(card)
  }

  shuffle() {
    // TODO
    this.mapHomed.clear()
    const el = this.$refs.container as HTMLElement
    const x = window.scrollX + el.getBoundingClientRect().x - 300
    const y = window.scrollY + el.getBoundingClientRect().y
    const w = 150
    const h = el.clientHeight - 100
    console.log(x, y, w, h)
    for (const card of this.cards) {
      card.randomize(x, y, w, h)
    }
  }
}
</script>
<style lang="postcss" scoped>
.options {
  @apply fixed m-4 right-0 top-0 flex flex-col text-3xl;

  & .panel {
    @apply absolute w-64 border shadow rounded mr-1 text-left text-xl;
    right: 100%;
    top: 0;
  }
  & .option {
    @apply m-2;
    & input[type='checkbox'] {
      @apply m-2 w-4 h-4;
    }
  }
}

.hint-row {
  &.hint-item {
    @apply absolute w-16 h-full text-3xl;
    right: 100%;
  }
}
.hint-col {
  @apply absolute text-3xl;
  transform: translateY(-100%);
  & .hint-item {
    @apply w-16 m-px;
  }
}
</style>