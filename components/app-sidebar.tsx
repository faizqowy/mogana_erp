"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  SquareKanban,
  Hospital,
  Users,
  Banknote,
  Settings
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Main",
      url: "/dashboard",
      icon: SquareKanban,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Reports & Analytics",
          url: "/dashboard/reports-analytics",
        }
      ],
    },
    {
      title: "Operations",
      url: "/dashboard/operations",
      icon: Hospital,
      items: [
        {
          title: "Patient Management",
          url: "/dashboard/operations/patient-management",
        },
        {
          title: "Appointment Management",
          url: "/dashboard/operations/appointment-management",
        },
        {
          title: "Pharmacy & Inventory",
          url: "/dashboard/operations/pharmacy-inventory",
        },
      ],
    },
    {
      title: "Human Resources",
      url: "/dashboard/human-resources",
      icon: Users,
      items: [
        {
          title: "Doctor & Staff Management",
          url: "/dashboard/human-resources/doctor-staff-management",
        },
        {
          title: "Attendance & Shifts",
          url: "/dashboard/human-resources/attendance-shifts",
        },
        {
          title: "Payroll",
          url: "/dashboard/human-resources/payroll",
        }
      ],
    },
    {
      title: "Finance",
      url: "/dashboard/finance",
      icon: Banknote,
      items: [
        {
          title: "Billing & Invoices",
          url: "/dashboard/finance/billing-invoices",
        },
        {
          title: "Expenses",
          url: "/dashboard/finance/expenses",
        },
        {
          title: "Insurance Claims",
          url: "/dashboard/finance/insurance-claims",
        },
        {
          title: "Financial Reports",
          url: "/dashboard/finance/financial-reports",
        },
      ],
    },
    {
      title : "Administration",
      url: "/dashboard/administration",
      icon: Settings,
      items: [
        {
          title: "System Settings",
          url: "/dashboard/administration/system-settings",
        },
        {
          title: "User Roles & Permissions",
          url: "/dashboard/administration/user-roles-permissions",
        },
        {
          title: "Audit & Logs",
          url: "/dashboard/administration/audit-logs",
        }
      ],
    }
  ]
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <div className="flex items-center">
        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        	 width="35px" height="35px" viewBox="0 0 512 512"  xmlSpace="preserve" className="ml-2 mt-2 fill-gray-800">
        <style type="text/css">
        </style>
        <g>
        	<path className="st0" d="M256,0l-9,5.031L8.734,138.266V512h206.672h14.766h51.672h14.766h206.656V138.266L256,0z M466.359,475.094
        		H318.75V340.781H193.266v134.313H45.641V159.906L256,42.281l210.359,117.625V475.094z"/>
        	<rect x="104.141" y="359.219" className="st0" width="36.953" height="44.078"/>
        	<rect x="104.141" y="261.438" className="st0" width="36.953" height="44.063"/>
        	<rect x="237.516" y="261.438" className="st0" width="36.969" height="44.063"/>
        	<polygon className="st0" points="235.359,103.969 235.359,141.125 198.188,141.125 198.188,182.438 235.359,182.438 235.359,219.594 
        		276.641,219.594 276.641,182.438 313.813,182.438 313.813,141.125 276.641,141.125 276.641,103.969 	"/>
        	<rect x="370.828" y="261.438" className="st0" width="34.656" height="44.063"/>
        	<rect x="370.906" y="359.219" className="st0" width="36.969" height="44.078"/>
        </g>
        </svg>
        <span className="ml-2 font-bold text-md mt-2"><h2>Mogana ERP</h2></span>
      </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
