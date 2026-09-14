"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Dashboard failed to load</h1>
      <p>
        Something went wrong while loading your vault. This can happen if the
        database is unreachable or the page could not fetch your links.
      </p>
      {error.digest ? <p>Error reference: {error.digest}</p> : null}
      <button type="button" onClick={() => unstable_retry()}>
        Try again
      </button>
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
}