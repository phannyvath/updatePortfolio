/**
 * Light mode Hero background: blue sky with soft clouds (no 3D).
 */
export default function SkyWithClouds() {
  return (
    <div className="absolute inset-0 z-0 w-full min-h-screen overflow-hidden hero-sky-bg">
      {/* Clouds: soft white shapes */}
      <div className="absolute inset-0 cloud-layer" aria-hidden>
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
        <div className="cloud cloud-5" />
        <div className="cloud cloud-6" />
      </div>
    </div>
  )
}
