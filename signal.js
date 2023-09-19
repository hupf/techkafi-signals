let context = [];

/**
 * Signal (also Observable, Atom, Subject, Ref)
 */
export function createSignal(initialValue) {
  const subscriptions = new Set();
  let value = initialValue;

  function read() {
    const running = context[context.length - 1];
    if (running) {
      subscriptions.add(running);
    }
    return value;
  }

  function write(newValue) {
    value = newValue;
    subscriptions.forEach((sub) => sub.execute());
  }

  return [read, write];
}

/**
 * Reaction (also Effect, Autorun, Watche, or Impure/Effectful Computed)
 */
export function createEffect(callback) {
  const effect = {
    execute() {
      context.push(effect);
      callback();
      context.pop();
    },
  };

  effect.execute();
}

/**
 * - Derivation (also Memoization or Pure Computed)
 */
export function createMemo(callback) {
  const [computed, setComputed] = createSignal();
  createEffect(() => setComputed(callback()));
  return computed;
}
