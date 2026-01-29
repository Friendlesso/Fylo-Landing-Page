import Info from "./Info";

export default function FooterContantInfo() {
  return (

    <div className="flex items-start gap-6 md:flex-row flex-col mt-8">
      <Info
        icon="fa-solid fa-location-dot"
        text="Frankfurt"
      />
      <div className="flex flex-col gap-6">
        <Info
          icon="fa-solid fa-phone"
          text="+1-534-123-4567"
        />
        <Info
          icon="fa-solid fa-envelope"
          text="example@fylo.com"
        />
      </div>
    </div>

  )
}