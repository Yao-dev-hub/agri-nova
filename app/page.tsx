"use client"
import AllProductComponent from "@/components/AllProductComponent";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {

  return (
    <div>
      <LoadingPage />
      <AllProductComponent />
    </div>
  )


}
