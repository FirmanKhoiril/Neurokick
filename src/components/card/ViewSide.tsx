type TViewSideContent = {
  timestamp: string
  pdfDetails: string
  content: string
}
const ViewSide = ({ timestamp, pdfDetails, content }: TViewSideContent) => {
  return (
    <div className="pt-8 text-base">
      <h1 className="font-semibold">Neurokick Coach:</h1>
      <p className="dark:text-gray text-black/90">{timestamp}</p>
      <span className="dark:text-[#6f788a] text-[#727a88]">
        {content}
        <br />
        <br />
        {pdfDetails}
      </span>
    </div>
  )
}

export default ViewSide
