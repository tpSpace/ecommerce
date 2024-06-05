import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { storeId: string };
}) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const storeId = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId,
        },
    });

    if (!storeId) {
        redirect('/');
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}