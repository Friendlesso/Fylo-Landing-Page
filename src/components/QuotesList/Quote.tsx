type QuoteProps = {
  message: string;
  user: {
    userProfile: string,
    userName: string,
    userTitle: string
  }
}

export default function Quote({
  message, user
}: QuoteProps) {
  return (
    <article className="bg-(--quotes-bg-color) p-6 rounded-md text-white xl:w-sm w-full">
      <div>
        <p>
          {message}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div>
          <img className="h-12 w-12 rounded-full" src={user.userProfile} alt="UserProfile image" />
        </div>
        <div>
          <h3 className="font-bold">{user.userName}</h3>
          <p className="text-gray-400">{user.userTitle}</p>
        </div>
      </div>
    </article>
  )
}