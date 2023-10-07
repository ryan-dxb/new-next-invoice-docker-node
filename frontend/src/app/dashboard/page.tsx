"use client";
import { NextPage } from "next";
import {
  getAuthenticatedUser,
  selectToken,
  selectUser,
} from "@/store/features/auth/authSlice";
import { useAppSelector } from "@/store/hooks";
import { Suspense } from "react";
import {
  useGetUserQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
} from "@/store/features/auth/authApi";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  const token = useAppSelector(selectToken);

  console.log("TOKEN FROM DASHBOARD", token);

  const { data, error, isLoading } = useGetUserQuery(token, { skip: !token });

  const [logout, { isLoading: logoutLoading, isError }] =
    useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      const response = await logout({ token });
      console.log("response :>> ", response);

      // if (response && response.data) {
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user?.username}</h2>
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Dashboard;
