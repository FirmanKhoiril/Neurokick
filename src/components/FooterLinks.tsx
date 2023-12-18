const FooterLinks = () => {
  return (
    <div className="flex items-center justify-between text-sm ">
      <button
        type="button"
        className="font-semibold text-black/40 hover:text-black/60 dark:text-white/40 dark:hover:text-white/60"
      >
        Terms
      </button>
      <button
        type="button"
        className="font-semibold text-black/40 hover:text-black/60 dark:text-white/40 dark:hover:text-white/60"
      >
        Privacy
      </button>
      <button
        type="button"
        className="font-semibold text-black/40 hover:text-black/60 dark:text-white/40 dark:hover:text-white/60"
      >
        About us
      </button>
      <button
        type="button"
        className="text-black/40 hover:text-black/40 dark:text-white/30 dark:hover:text-white/40"
      >
        Contact Copilot 2.0
      </button>
    </div>
  )
}

export default FooterLinks
