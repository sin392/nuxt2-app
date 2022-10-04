import { SetupContext } from 'vue'

export const getChildren = (context: SetupContext<{}>) =>
  context.slots.default?.()
