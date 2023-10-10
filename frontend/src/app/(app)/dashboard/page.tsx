"use client";

import PageHeader from "@/components/common/PageHeader";
import CardItemWithLink from "@/components/dashboardComponents/CardItemWithLink";
import { DataTableDemo } from "@/components/data-table/DataTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, UserSquare } from "lucide-react";
import { NextPage } from "next";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <div className="flex flex-col h-full pb-4">
      <PageHeader
        title="My Dashboard"
        subTitle="Here's what's going on with your account"
      />

      <div className="w-11/12 py-4 mx-auto overflow-y-scroll max-w-7xl scrollbar-none">
        <div className="w-full">
          <div className="grid grid-cols-3 grid-rows-1 gap-8 ">
            <div className="flex w-full bg-white rounded-md shadow-md h-max">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <h4 className="font-semibold text-gray-800 ">
                      Profile Overview
                    </h4>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-gray-500 ">
                      A quick overview of your account
                    </p>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-center text-gray-800">
                        0
                      </h4>
                      <p className="text-gray-500 ">Total Users</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-center text-gray-800">
                        0
                      </h4>
                      <p className="text-gray-500 ">Total Documents</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-full bg-white rounded-md shadow-md h-max">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <h4 className="font-semibold text-gray-800 ">
                      Invoice & Payments
                    </h4>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-gray-500 ">
                      Some statistics about your invoices and payments
                    </p>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col w-full pt-4 space-y-2 ">
                    <CardItemWithLink
                      link="/"
                      title="Expected Income"
                      value="128,698.20"
                      isAmmount={true}
                    />
                    <CardItemWithLink
                      link="/"
                      title="Payment Received"
                      value="28,698.20"
                      isAmmount={true}
                    />
                    <CardItemWithLink
                      link="/"
                      title="Payment Pending"
                      value="100,000.00"
                      isAmmount={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-full bg-white rounded-md shadow-md h-max">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>
                    <h4 className="font-semibold text-gray-800 ">
                      Documents Overview
                    </h4>
                  </CardTitle>
                  <CardDescription>
                    <p className="text-gray-500 ">
                      Here's a quick overview of your documents
                    </p>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col w-full pt-4 space-y-2">
                    <CardItemWithLink link="/" title="Total Paid" value="0" />
                    <CardItemWithLink link="/" title="Partial Paid" value="0" />
                    <CardItemWithLink link="/" title="Overdue" value="0" />
                    <CardItemWithLink link="/" title="Unpaid" value="0" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="p-4 mt-8 border rounded-md shadow-sm">
            <DataTableDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
