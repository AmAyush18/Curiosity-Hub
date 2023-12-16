'use client'
import { styles } from "@/utils/styles";
import { useUser } from "@clerk/nextjs";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {}

const Page = () => {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [shopData, setShopData] = useState({
      name: "",
      description: "",
      shopProductsType: "",
      avatar: "",
    });
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      if (user) {
        const data = {
          name: shopData.name,
          description: shopData.description,
          shopProductsType: shopData.shopProductsType,
          avatar: user?.imageUrl || "",
          userId: user?.id,
        };
        await axios
          .post("/api/create-shop", data)
          .then((res) => {
            setLoading(false);
            toast.success("Shop created successfully!");
            setShopData({
              name: "",
              description: "",
              shopProductsType: "",
              avatar: "",
            });
            router.push("/");
          })
          .catch((error) => {
            setLoading(false);
            toast.error(error.response.data);
            setShopData({
              name: "",
              description: "",
              shopProductsType: "",
              avatar: "",
            });
          });
      }
    };

 return(
    <div className="w-full h-screen flex flex-col justify-center">
        <div>
            <h1 className={`${styles.heading} text-center font-Monserrat`}>
                Start selling right here!
            </h1>
            <form 
                className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%%] m-auto"
                onSubmit={handleSubmit}
            >
                <div className="w-full my-5">
                    <label className={`${styles.label} mb-2 block`}>
                        Shop Name
                    </label>
                    <Input 
                        isRequired
                        type="text"
                        placeholder="CuriosityHub"
                        size="sm"
                        variant="bordered"
                        value={shopData.name}
                        onChange={(e) => setShopData({...shopData, name:e.target.value})}
                    />
                </div>
                <div className="w-full my-5">
                    <label className={`${styles.label} mb-2 block`}>
                        Shop Description (Max 120 letters)
                    </label>
                    <Input
                        isRequired
                        type="text"
                        placeholder="Creative AI Prompts of Future"
                        size="sm"
                        value={shopData.description}
                        onChange={(e) => setShopData({...shopData, description:e.target.value})}
                        maxLength={120}
                        variant="bordered"
                    />
                </div>
                <div className="w-full my-5">
                    <label className={`${styles.label} mb-2 block`}>
                        Describe your Product Category
                    </label>
                    <Textarea 
                        variant="bordered"
                        value={shopData.shopProductsType}
                        onChange={(e) => setShopData({...shopData, shopProductsType:e.target.value})}
                        required
                        placeholder="Chatgpt, Midjourney Prompts etc..."
                        className="col-span-12 md:col-span-6 md:mb-0"
                    />
                    <br />
                </div>
                <Button
                    className="mb-3 w-full bg-transparent h-[45px] border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-800 duration-300 transition-opacity font-Inter font-[600]"
                    type="submit"
                    disabled={loading}
                    disableAnimation={loading}
                >
                    Create Shop
                </Button>
            </form>
        </div>
    </div>
 )
}

export default Page;