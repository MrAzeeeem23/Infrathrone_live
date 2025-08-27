import { Ubuntu as UbuntuFont } from "next/font/google";
import { Poppins as PoppinsFont } from "next/font/google";


const Ubuntu = UbuntuFont({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Poppins = PoppinsFont({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
  });

export {
    Ubuntu,
    Poppins
}