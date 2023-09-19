# (Angular) Signals

Tech Kafi 20.09.2023

Mathis Hofer

## Slides

https://codimd.puzzle.ch/rE8B0lXpQw-kMZhcYPd2mw

## Playbook

- Signals are like state
  - Show React's useState hook syntax for count
  - createSignal, with write function but simple return value
  - Rename useState to createSignal
  - console.log value, write new value, console.log -> value does not update
  - Convert value to read function -> value is updated
- DOM Rendering
  - Create count-div + increment-button
  - addEventListener, increment value
  - Write a render function -> update is not re-rendered
- Introduce Reactions (createEffect)
  - Track subscriptions in createSignal's read function
  - Call subscriptions in createSignal's write function
  - Trigger re-render in createEffect
- What about derived values (Derivations)?
  - Create firstName & lastName Signals
  - Create effect that logs fullName → but how to get value?
  - createMemo that uses createSignal & createEffect

Generously ignored:

- Clean up (unsubscribe) if effect contains branches
- Diamond Problem
- Optimizations
