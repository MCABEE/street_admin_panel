import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function DataManager() {
  return (
    <section>
      <div className="mb-4">
        <h1>Data Manager</h1>
        <p>Manage Everything</p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-full md:col-span-6 lg:col-span-4">
          <CardHeader>
            <CardTitle>Business Category</CardTitle>
            <CardDescription>200+ Categories</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Link
              to={"business-category/?page=view"}
              className="text-blue-600 font-semibold"
            >
              View
            </Link>
            <Link
              to={"business-category/?page=add"}
              className="text-blue-600 font-semibold"
            >
              Add
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-full md:col-span-6 lg:col-span-4">
          <CardHeader>
            <CardTitle>Business Type</CardTitle>
            <CardDescription>10+ Types</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Link
              to={"business-type/?page=view"}
              className="text-blue-600 font-semibold"
            >
              View
            </Link>
            <Link
              to={"business-type/?page=add"}
              className="text-blue-600 font-semibold"
            >
              Add
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-full md:col-span-6 lg:col-span-4">
          <CardHeader>
            <CardTitle>Geo Location</CardTitle>
            <CardDescription>1000+ Locations</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Link to={"location/?page=view"} className="text-blue-600 font-semibold">
              View
            </Link>
            <Link to={"location/?page=add"} className="text-blue-600 font-semibold">
              Add
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-full md:col-span-6 lg:col-span-4">
          <CardHeader>
            <CardTitle>Product Catalogue</CardTitle>
            <CardDescription>100+ Products</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Link to={"product-catalogue/?page=view"} className="text-blue-600 font-semibold">
              View
            </Link>
            <Link to={"product-catalogue/?page=add"} className="text-blue-600 font-semibold">
              Add
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
