import { Mulish } from "next/font/google";

const mulish = Mulish({
  variable: '--Mulish',
  subsets: ['latin-ext'],
  weight: '400',
});


export default function Profile({}) {
  return <h1 className={mulish.className}>My name is: ...</h1>;
   <div>
      <h1 className={mulish.className}>My name is: {}</h1>
      <p className={mulish.className}>Bio: {}</p>
    </div>
}

