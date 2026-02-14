import { CreateButton } from "@/components/refine-ui/buttons/create";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARMENT_OPTIONS } from "@/constants";
import { Subject } from "@/types";
import { useTable } from "@refinedev/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const SubjectList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const departmentFilter = selectedDepartment === "all" ? [] : [{ field: "department", operator: "eq" as const, value: selectedDepartment }];   
  const searchFilter = searchQuery ? [{ field: "name", operator: "contains" as const, value: searchQuery }] : []; 
  const subjectsTable = useTable<Subject>({
    columns: useMemo<ColumnDef<Subject>[]>(() => [
      {
        id: "code",
        accessorKey: "code",
        size: 100,
        header: ()=> <p className="column-title ml-2">Code</p>,
        cell: ({ getValue  }) => <Badge>{getValue<string>()}</Badge>,
      }, 
      {
        id: "name",
        accessorKey: "name",
        size: 100,
        header: ()=> <p className="column-title ml-2">Name</p>,
        cell: ({ getValue  }) => <span className="text-foreground">{getValue<string>()} </span>,
        filterFn: 'includesString'
      }, 
      {
        id: "department",
        accessorKey: "department",
        size: 150,
        header: ()=> <p className="column-title ml-2">Department</p>,
        cell: ({ getValue  }) => <Badge variant="secondary">{getValue<string>()}</Badge>,
      },
      {
        id: "description",
        accessorKey: "description",
        size: 100,
        header: ()=> <p className="column-title ml-2">Description</p>,
        cell: ({ getValue  }) => <span className="trancate line-clamp-2">{getValue<string>()}</span>,
      }, 
    ],[]),
    refineCoreProps: {
      resource: "subjects",
      pagination: {
        pageSize: 10,
        mode: "server",
      },
      filters: {
        permanent: [...departmentFilter, ...searchFilter],
      },
      sorters: {
        initial: [{
            field: "id",
          order: "desc"
        }]
      },
    },
  });
  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page-title">Subjects</h1>
      <div className="intro-row">
        <p className="intro-text">Manage the subjects offered in the school, including their details and departments.</p>
      <div className="action-row">
        <div className="search-field border-2">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search by name ..."
            className="pl-10 w-full sm:w-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select
            value={selectedDepartment}
            onValueChange={setSelectedDepartment}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All departments</SelectItem>
              {DEPARMENT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <CreateButton />
        </div>
      </div>
      </div>
      <DataTable table={subjectsTable} />
      
    </ListView>
  );
};

export default SubjectList;
