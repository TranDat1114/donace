import { TabsDemo } from "@/components/ui/pageComponent/loginNRegister"
import Navbar from "@/components/ui/pageComponent/navbar"

export default function Home() {
  return (
    <div className="p-4">
      <div className="w-full">

      <Navbar/>
      </div>
      <div className=" h-full w-full flex flex-row justify-center items-center ">
        <div></div>
        <div>
          <div className="my-10">
            <p className="text-5xl text-center">Chào mừng</p>
            <p className=" text-center">Hãy điền thông tin đăng nhập của bạn</p>
          </div>
          <TabsDemo />
        </div>
        <div></div>
      </div>

    </div>
  )
}
