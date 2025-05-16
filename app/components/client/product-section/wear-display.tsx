import WearCard from "./wear-card"
import WearDetails from "./wear-details"
import { cn } from "@/lib/utils"

interface WearDisplayProps {
  id: string
  imageUrl: string
  code: string
  price: number
  altText?: string
  className?: string
}

export default function WearDisplay({ id, imageUrl, code, price, altText, className }: WearDisplayProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <WearCard id={id} imageUrl={imageUrl} altText={altText} />
      <WearDetails id={id} code={code} price={price} imageUrl={imageUrl} />
    </div>
  )
}
