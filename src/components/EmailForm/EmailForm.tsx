import EmailContent from "./EmailContent";
import Form from "./Form";

export default function EmailForm() {
  return (
    <div
      className={`
        bg-(--custom-bg-color)
        rounded-md
        absolute 
        bottom-0 translate-y-1/2 
        left-1/2 -translate-x-1/2
        text-center
        flex flex-col gap-5 p-6
        shadow-2xl
        w-[90%]
        max-w-200
        min-w-70
      `}
    >
      <EmailContent />
      <Form />
    </div>
  )
}