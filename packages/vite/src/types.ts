import { FilterPattern } from '@rollup/pluginutils'
import { UserConfig } from '@unocss/core'

export interface UnocssUserOptions extends UserConfig {
  include?: FilterPattern
  exclude?: FilterPattern

  /**
   * CSS Generation mode
   *
   * - `global` - generate a single CSS sheet for entire App
   * - `chunk` - generate a CSS sheet for each code chunk, great for MPA
   * - `per-module` - generate a CSS sheet for each module, can be scoped
   * - `vue-scoped` - inject generated CSS to Vue SFC's `<style scoped>` for isolation
   *
   * @default 'global'
   */
  mode?: 'global' | 'per-module' | 'vue-scoped'
}
