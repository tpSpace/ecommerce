import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/size-form";

const ColorPage = async ({ params }: { params: { sizeId: string } }) => {
  const colors = await prismadb.color.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SizeForm initialData={colors} />
        </div>
      </div>
    </>
  );
};

export default ColorPage;
