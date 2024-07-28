import { fetchRevenue } from "@/app/lib/data";

const  pate = async () => {
  const revenue = await fetchRevenue();
  return (
    <div>
      Invoices Page
    </div>
  )
}

export default pate
