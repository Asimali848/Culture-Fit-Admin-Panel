import { useState } from "react";
import { useEmployeeColumns } from "@/components/company-detail/employee-column";
import { DataTable } from "@/components/data-table";
import CulturePolicies from "@/components/dummy-policy";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { employees } from "@/lib/constants";

const UserDetail = () => {
  const columns = useEmployeeColumns();
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex h-full w-full flex-col gap-5 overflow-auto">
      <div className="flex h-full w-full flex-col items-start justify-start gap-3.5">
        <Label className="flex items-center justify-center font-bold text-[24px] text-primary leading-[24px]">
          Digimark Developer
        </Label>
        <div className="flex w-full items-center justify-center">
          <Card className="w-full rounded-xl shadow-none">
            <CardContent className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Company Email</Label>
                <p className="text-muted-foreground text-sm">digimark@gmail.com</p>
              </div>

              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Owner Name</Label>
                <p className="text-muted-foreground text-sm">John Doe</p>
              </div>

              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Owner Email</Label>
                <p className="text-muted-foreground text-sm">johndoe@gmail.com</p>
              </div>

              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Website</Label>
                <a
                  href="https://digimark.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://digimark.com
                </a>
              </div>

              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Technology</Label>
                <p className="text-muted-foreground text-sm">Software House</p>
              </div>

              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Phone</Label>
                <p className="text-muted-foreground text-sm">+1 (123) 456-7890</p>
              </div>

              <div className="flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Address</Label>
                <p className="text-muted-foreground text-sm">123 Main St, Anytown, USA</p>
              </div>

              <div className="col-span-4 flex flex-col gap-2.5 rounded-lg border-r border-b p-2 pb-2 shadow-md">
                <Label>Description</Label>
                <p className="w-full text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices, justo eget ultricies
                  eleifend, leo non eleifend. Interdum ut malesuada fames ac ante in ipsum primis in faucibus. Orci
                  varius sit amet eros. Nulla vitae elit libero, vel porta nulla, euismod varius purus. Nullam vitae
                  nisi. In hac habitasse platea dictumst. Integer posuere erat, id malesuada metus. Aliquam erat
                  volutpat. Donec id libero. Sed odio dui, sodales in, aliquet in, feugiat nec nisi. Phasellus ultrices
                  metus vitae risus. Nullam quis nulla.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid h-full w-full grid-cols-2 items-center justify-center gap-3.5 overflow-auto">
        <div className="h-full w-full">
          <CulturePolicies />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-2.5 rounded-xl border p-2">
          <div className="flex w-full items-start justify-between py-3">
            <Label className="font-semibold text-primary text-xl">Company Employees</Label>
            <Input
              type="text"
              className="w-1/2"
              placeholder="Filter Users by Email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <DataTable
            columns={columns}
            data={search ? employees.filter((e) => e.email.toLowerCase().includes(search.toLowerCase())) : employees}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
