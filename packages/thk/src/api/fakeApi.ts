type ReturnType = {
  delay: { read(): number | undefined };
};

export function fetchData(): ReturnType {
  const promise = createDelay();
  return {
    delay: wrapPromise(promise as Promise<number>),
  };
}

function createDelay() {
  return new Promise(resolve => {
    const delay = Math.random() * 520 + 230;
    setTimeout(() => resolve(delay), delay);
  });
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise: Promise<number>): { read(): number | undefined } {
  let status = 'pending';
  let result: number;
  const suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
