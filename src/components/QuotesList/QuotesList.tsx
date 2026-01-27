import { QUOTE_DATA } from "../../data/quotes";
import Quote from "./Quote";
import DecorationQuote from '../../assets/images/bg-quotes.png'

export default function QuotesList() {
  return (
    <section className="mt-20 relative">
      <div
        className={`
          grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1
          gap-8
          xl:[&>*:last-child]:col-span-1 
          sm:[&>*:last-child]:col-span-2 
          [&>*:last-child]:col-span-1
        `}
      >
        {QUOTE_DATA.map(quote => (
          <Quote
            key={quote.user.userName}
            message={quote.message}
            user={quote.user}
          />
        ))}
      </div>
      <div className="absolute -top-8 -left-5 -z-10">
        <img src={DecorationQuote} alt="Decoration" />
      </div>
    </section>
  )
}