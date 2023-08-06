import { ModeToggle } from "@/components/ui/changeThemeModeButton";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full">
        <div className="my-10">
          <p className="text-5xl text-center">Chào mừng</p>
          <p className=" text-center">Hãy điền thông tin đăng nhập của bạn</p>
        </div>
      </div>
    </div>
  )
}
