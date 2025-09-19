import type { Column, Row } from "@tanstack/react-table";
import { ArrowDownAZ, FilePenLine, FileText, MoreHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanySheet from "@/components/dashboard/company-sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WarningModal from "../warning-modal";
import DetailSheet from "./detail-sheet";

export type RowData = {
  id: string;
  email: string;
  company_name: string;
  company_address: string;
  description: string;
};

const ActionsCell = ({ row }: { row: Row<RowData> }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [warn, setWarn] = useState<boolean>(false);
  const [detail, setDetail] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0" type="button">
            <MoreHorizontal className="rotate-90" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <FilePenLine />
            <span className="ml-2 text-sm">Edit Company</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSelected(row.original.id);
            }}
          >
            <FileText />
            <span className="ml-2 text-sm" onClick={() => navigate("/company-detail")}>
              View Details
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSelected(row.original.id);
              setWarn(true);
            }}
          >
            <Trash />
            <span className="ml-2 text-sm">Suspend</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <WarningModal
        open={warn}
        title="Are you sure?"
        text={<span>Are you sure you want to Suspend this company?</span>}
        setOpen={setWarn}
      />
      <CompanySheet id={selected} open={open} setOpen={setOpen} />
      <DetailSheet id={selected} open={detail} setOpen={setDetail} />
    </>
  );
};

export const useRowColumns = () => {
  return [
    {
      accessorKey: "company_name",
      header: ({ column }: { column: Column<RowData> }) => (
        <Button variant="ghost" type="button" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Company Name
          <ArrowDownAZ className="ml-2" />
        </Button>
      ),
      cell: ({ row }: { row: Row<RowData> }) => (
        <span className="ml-3 cursor-pointer font-medium">{row.getValue("company_name")}</span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }: { row: Row<RowData> }) => (
        <span className="font-semibold text-[#71717A] text-sm">{row.getValue("email")}</span>
      ),
    },
    {
      accessorKey: "company_address",
      header: "Address",
      cell: ({ row }: { row: Row<RowData> }) => (
        <span className="font-semibold text-[#71717A] text-sm">{row.getValue("company_address")}</span>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }: { row: Row<RowData> }) => (
        <span className="font-semibold text-[#71717A] text-sm">{row.getValue("description")}</span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: { row: Row<RowData> }) => <ActionsCell row={row} />,
    },
  ];
};
