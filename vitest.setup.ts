import * as matchers from 'vitest-axe/matchers'
import { expect } from 'vitest'
import type { AxeMatchers } from 'vitest-axe'

declare module 'vitest' {
  interface Assertion extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}

expect.extend(matchers)
