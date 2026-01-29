import { useState } from "react"

export default function Form() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState(false);


  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setError(email.length > 0 && !e.currentTarget.checkValidity())
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    if (!e.currentTarget.checkVisibility()) {
      setError(false);
    }
  }

  return (
    <div>
      <form
        className="flex md:flex-row flex-col gap-3" action="submit"
        onSubmit={handleSubmit}
      >
        <input
          className={`
            bg-white 
            p-2 
            rounded-full 
            md:w-2/3 w-full 
            outline-(--cyan-500)
            ${error && 'border-red-400 border-2'}
          `}
          required
          value={email}
          onBlur={handleBlur}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="email@example.com"
          type="email"
        />
        <button
          type="submit"
          aria-label="Submit Email"
          className="md:w-1/3 w-full py-2 bg-linear-to-r from-(--teal-200) to-(--cyan-500) rounded-full text-white font-bold cursor-pointer hover:from-(--cyan-500) transition-colors duration-200">
          Get Started for free
        </button>
      </form>
      {error && <p className="text-red-400 text-left px-6 py-2">Please provide a valid email!</p>}
    </div>
  )
}