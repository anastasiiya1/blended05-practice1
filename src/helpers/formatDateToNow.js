import { formatDistanceToNow } from "date-fns"

export const formatDateToNow = (data) => {
  return (
	formatDistanceToNow(new Date(data), { addSuffix: true })
  )
}
