import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

import useGetAllProducts from "../hooks/useGetAllProducts";
import useDeleteProduct from "../hooks/useDeleteProduct";
import usePutProduct from "../hooks/usePutProduct";
import usePostAddProduct from "../hooks/usePostAddProduct";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const editSchema = yup.object().shape({
  title: yup.string().required("عنوان الزامی است"),
  price: yup
    .number()
    .typeError("قیمت باید عدد باشد")
    .required("قیمت الزامی است"),
});

const addSchema = yup.object().shape({
  title: yup.string().required("عنوان الزامی است"),
  price: yup
    .number()
    .typeError("قیمت باید عدد باشد")
    .required("قیمت الزامی است"),
});

export default function Admin() {
  const { data } = useGetAllProducts();

  const { mutateAsync: deleteMutate, isPending: deletePending } =
    useDeleteProduct();
  const { mutateAsync: updateMutate, isPending: updatePending } =
    usePutProduct();
  const { mutateAsync: addMutate, isPending: addPending } = usePostAddProduct();

  const [editOpen, setEditOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
    formState: { errors: editErrors },
  } = useForm({
    resolver: yupResolver(editSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (editingProduct) {
      resetEdit({
        title: editingProduct.title ?? "",
        price: editingProduct.price ?? "",
      });
    }
  }, [editingProduct, resetEdit]);

  const {
    register: registerAdd,
    handleSubmit: handleSubmitAdd,
    reset: resetAdd,
    formState: { errors: addErrors },
  } = useForm({
    resolver: yupResolver(addSchema),
    mode: "onBlur",
    defaultValues: { title: "", price: "" },
  });

  async function deleteFn(product) {
    try {
      await deleteMutate(product.id);
      toast.success("حذف شد ✅");
    } catch {
      toast.error("خطا در حذف ❌");
    }
  }

  function openEdit(product) {
    setEditingProduct(product);
    setEditOpen(true);
  }

  async function onEditSubmit(values) {
    if (!editingProduct?.id) return;

    try {
      await updateMutate({
        productId: editingProduct.id,
        productData: { title: values.title, price: Number(values.price) },
      });

      toast.success("آپدیت شد ✅");
      setEditOpen(false);
      setEditingProduct(null);
    } catch {
      toast.error("خطا در آپدیت ❌");
    }
  }

  async function onAddSubmit(values) {
    try {
      await addMutate(
        { title: values.title, price: Number(values.price) },
        { onSuccess: () => toast.success("افزودن کالا با موفقیت انجام شد ✅") },
      );

      resetAdd({ title: "", price: "" });
    } catch {
      toast.error("خطا در افزودن ❌");
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-extrabold text-white">پنل ادمین</h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                افزودن محصول
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-sm bg-[#0f1629] text-white border border-white/10">
              <DialogHeader>
                <DialogTitle className="text-white">افزودن محصول</DialogTitle>
                <DialogDescription className="text-white/60">
                  اطلاعات محصول جدید را وارد کنید.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmitAdd(onAddSubmit)}
                className="space-y-4"
              >
                <FieldGroup>
                  <Field>
                    <Label htmlFor="add-title" className="text-white/80">
                      عنوان
                    </Label>
                    <Input
                      id="add-title"
                      className="bg-[#0b0f19] border-white/10 text-white placeholder:text-white/30"
                      {...registerAdd("title")}
                    />
                    {addErrors.title && (
                      <p className="text-xs text-rose-400 mt-1">
                        {addErrors.title.message}
                      </p>
                    )}
                  </Field>

                  <Field>
                    <Label htmlFor="add-price" className="text-white/80">
                      قیمت
                    </Label>
                    <Input
                      id="add-price"
                      type="number"
                      className="bg-[#0b0f19] border-white/10 text-white placeholder:text-white/30"
                      {...registerAdd("price")}
                    />
                    {addErrors.price && (
                      <p className="text-xs text-rose-400 mt-1">
                        {addErrors.price.message}
                      </p>
                    )}
                  </Field>
                </FieldGroup>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-white/15 text-white hover:bg-white/10 hover:text-white"
                    >
                      انصراف
                    </Button>
                  </DialogClose>

                  <Button
                    type="submit"
                    disabled={addPending}
                    className="bg-violet-600 hover:bg-violet-700 text-white"
                  >
                    {addPending ? "در حال افزودن..." : "ثبت"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0f1629] overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr className="text-right text-sm text-white/70">
                <th className="p-3">ID</th>
                <th className="p-3">عنوان</th>
                <th className="p-3">تصویر</th>
                <th className="p-3">عملیات</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((product) => (
                <tr key={product.id} className="border-t border-white/10">
                  <td className="p-3 text-sm text-white/80">{product.id}</td>
                  <td className="p-3 text-sm text-white line-clamp-1">
                    {product.title}
                  </td>

                  <td className="p-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-14 w-14 object-contain bg-white rounded-md p-1"
                    />
                  </td>

                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Button
                        disabled={deletePending}
                        className="bg-rose-600 hover:bg-rose-700 text-white"
                        onClick={() => deleteFn(product)}
                      >
                        حذف
                      </Button>

                      <Button
                        variant="outline"
                        className="border-violet-500/40 text-violet-400 
             hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-400"
                        onClick={() => openEdit(product)}
                      >
                        ویرایش
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogContent className="sm:max-w-sm bg-[#0f1629] text-white border border-white/10">
            <DialogHeader>
              <DialogTitle className="text-white">ویرایش محصول</DialogTitle>
              <DialogDescription className="text-white/60">
                اطلاعات را تغییر دهید و ذخیره کنید.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmitEdit(onEditSubmit)}
              className="space-y-4"
            >
              <FieldGroup>
                <Field>
                  <Label htmlFor="edit-title" className="text-white/80">
                    عنوان
                  </Label>
                  <Input
                    id="edit-title"
                    className="bg-[#0b0f19] border-white/10 text-white placeholder:text-white/30"
                    {...registerEdit("title")}
                  />
                  {editErrors.title && (
                    <p className="text-xs text-rose-400 mt-1">
                      {editErrors.title.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <Label htmlFor="edit-price" className="text-white/80">
                    قیمت
                  </Label>
                  <Input
                    id="edit-price"
                    type="number"
                    className="bg-[#0b0f19] border-white/10 text-white placeholder:text-white/30"
                    {...registerEdit("price")}
                  />
                  {editErrors.price && (
                    <p className="text-xs text-rose-400 mt-1">
                      {editErrors.price.message}
                    </p>
                  )}
                </Field>
              </FieldGroup>

              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-red-600 text-white border-red-500 hover:bg-white/10 hover:border-white/20 hover:text-white"
                  >
                    انصراف
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  disabled={updatePending}
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                >
                  {updatePending ? "در حال ذخیره..." : "ذخیره تغییرات"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
