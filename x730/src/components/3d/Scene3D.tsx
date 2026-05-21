"use client";

import dynamic from "next/dynamic";

const GlobeSceneDynamic = dynamic(() => import("./GlobeScene"), { ssr: false });
const GeometricSceneDynamic = dynamic(() => import("./GeometricScene"), { ssr: false });

export function GlobeScene3D() {
  return <GlobeSceneDynamic />;
}

export function GeometricScene3D({
  shape,
  color = "#ffffff",
}: {
  shape: string;
  color?: string;
}) {
  return <GeometricSceneDynamic shape={shape as never} color={color} />;
}
