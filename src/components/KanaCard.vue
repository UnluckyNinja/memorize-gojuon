<template>
  <div>
    <div
      class="m-card root"
      @mousedown="dragstart"
      v-bind="$attrs"
      :class="{
        'has-border': draggable,
        'select-none': draggable,
        invisible: kana.hiragana === '',
      }"
      :style="[draggable === true ? dragTransform : '']"
    >
      <div v-if="words.length >= 1" class="m-card upper">
        <span>
          {{ words[0] }}
        </span>
      </div>
      <div v-if="words.length == 2" class="m-card lower">
        <span>
          {{ words[1] }}
        </span>
      </div>
      <div v-if="words.length == 3" class="m-card lower flex">
        <div class="m-card left">{{ words[1] }}</div>
        <div class="m-card right">{{ words[2] }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { Options, Vue, prop } from 'vue-class-component'
import { characters, Kana } from '/@/data'

class Props {
  kana = prop<Kana>({
    required: true,
  })
  draggable = prop<boolean>({ default: true })
  showHiragana = prop<boolean>({ default: true })
  showKatakana = prop<boolean>({ default: true })
  showRomaji = prop<boolean>({ default: true })
  homeTolerance = prop<number>({ default: 10 })
}

@Options({
  components: {},
  inheritAttrs: false,
})
export default class KanaCard extends Vue.props(Props) {
  get words(): string[] {
    let w: string[] = []

    if (!this.kana || this.kana.hiragana === '') {
      return w
    }

    if (this.showHiragana) {
      w.push(this.kana.hiragana)
    }
    if (this.showKatakana) {
      w.push(this.kana.katakana)
    }
    if (this.showRomaji) {
      w.push(this.kana.romaji)
    }

    return w
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) {
      return
    }
    this.translate.x = this.lastTranslate.x + event.pageX - this.anchorPoint.x
    this.translate.y = this.lastTranslate.y + event.pageY - this.anchorPoint.y
  }
  anchorPoint = { x: 0, y: 0 }
  lastTranslate = { x: 0, y: 0 }
  translate = { x: 0, y: 0 }
  isDragging = false
  dragstart(event: MouseEvent) {
    if (!this.draggable) {
      return
    }
    if (event.button !== 0) {
      return
    }
    this.isDragging = true
    this.anchorPoint.x = event.pageX
    this.anchorPoint.y = event.pageY
    document.addEventListener('mouseup', this.dragend)
    document.addEventListener('mousemove', this.drag)
  }
  dragend(event: MouseEvent): any {
    if (event.button !== 0) {
      return
    }
    const { x, y } = this.translate
    this.isDragging = false
    this.lastTranslate.x = x
    this.lastTranslate.y = y
    document.removeEventListener('mouseup', this.dragend)
    document.removeEventListener('mousemove', this.drag)

    const outbounds = this.homeTolerance
    if (
      -outbounds <= x &&
      x <= outbounds &&
      -outbounds <= y &&
      y <= outbounds
    ) {
      this.$emit('homed')
    }
  }
  get dragTransform() {
    return {
      transform: `translate(${this.translate.x}px, ${this.translate.y}px)`,
    }
  }
  randomize(x: number, y: number, w: number, h: number) {
    this.reset()
    const el = this.$el as HTMLElement
    const offsetX = window.scrollX + el.getBoundingClientRect().x
    const offsetY = window.scrollY + el.getBoundingClientRect().y
    this.translate.x = x + w * Math.random() - offsetX
    this.translate.y = y + h * Math.random() - offsetY
    this.lastTranslate.x = this.translate.x
    this.lastTranslate.y = this.translate.y
  }

  reset() {
    this.anchorPoint.x = 0
    this.anchorPoint.y = 0
    this.lastTranslate.x = 0
    this.lastTranslate.y = 0
    this.translate.x = 0
    this.translate.y = 0
    this.isDragging = false
  }
}
</script>

<style lang="postcss" scoped>
.m-card {
  &.root {
    @apply w-16 h-24 bg-white flex flex-col justify-center items-center;

    &.has-border {
      @apply border rounded-lg shadow cursor-pointer;
    }
    /* width: 5rem;
    height: 5rem; */
  }
  @apply p-1;
  & .m-card.upper {
    @apply text-3xl;
  }
  & .m-card.lower {
    @apply border-t-2 text-base self-stretch;
  }
  & .m-card.left,
  & .m-card.right {
    width: 50%;
  }
}
</style>