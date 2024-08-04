import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
        <div className="flex justify-center flex-col rounded-lg bg-blue-500 ">
          <p className="mx-3 my-1 text-xs font-medium text-gray-900">Email: user@nextmail.com</p>
          <p className="mx-3 my-1 text-xs font-medium text-gray-900">Password: 123456</p>
        </div>
      </div>
    </main>
  );
}
