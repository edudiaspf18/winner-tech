"use client";

import { useSyncExternalStore } from "react";
import { Ga4 } from "@/components/ga4";
import { MetaPixel } from "@/components/meta-pixel";
import { HAS_TRACKING, readConsent, subscribeConsent } from "@/lib/consent";

/** Loads GA4 / Meta Pixel only after the visitor accepts (LGPD). */
export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  if (!HAS_TRACKING || consent !== "granted") return null;

  return (
    <>
      <Ga4 />
      <MetaPixel />
    </>
  );
}
