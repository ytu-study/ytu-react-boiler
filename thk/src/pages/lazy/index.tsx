import React, { Suspense, lazy } from "react";

const LazyChild = lazy(async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return import("../../components/lazy/LazyChild");
});

export default function LazyPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyChild />
      </Suspense>
    </div>
  );
}
