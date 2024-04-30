import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf, PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    title: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your assests delivered to your Email in seconds and dowlaod them right away."
  },
  {
    title: "Guranted Quantity",
    icon: CheckCircle,
    description: "Every assests are verified by our teams. And is of the best quality."
  },
  {
    title: "For the Planet",
    icon: Leaf,
    description: "We have pluged 1% of sales to the environment and restoration of natural resources."
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col item-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-600 sm:text-6xl">
            This is the marketplace of {' '}
            <span className="text-blue-500"> High Quality products</span>
          </h1>
          <span className="mt-6 text-lg max-w-prose text-muted-foreground mx-auto text-center">
            Everything on this platform is so reliable and of good quality.
          </span>
          <div className=" flex flex-col sm:flex-row gap-4 mt-6 mx-auto">
            <Link href={"./products"} className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">Our quality check &rarr;</Button>
          </div>

        </div>
        {/*Todo list of products*/}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-col-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {
              perks.map((perk) => (
                <div key={perk.title} className="text-center md:flex md:items-start md:text-left lg:block lg-text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-200 text-blue-900 ">
                    {<perk.icon className="w-1/3 h-1/3"/>}
                    </div>

                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:mt-6 flex flex-col items-center">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-sm">
                    {perk.description}
                    </p>

                  </div>
                </div>
              ))
            }

          </div>
        </MaxWidthWrapper>


      </section>
    </>
  );
}
