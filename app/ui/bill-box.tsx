import { lusitana } from "@/app/ui/fonts";
import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";

export default function BillBoxLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <div className="h-12 w-12">
        <CurrencyRupeeIcon className="h-full w-full" />
      </div>
      <p className="text-[44px]">BillBox</p>
    </div>
  );
}
