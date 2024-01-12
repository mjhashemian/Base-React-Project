import { Input, Typography } from "antd";
import { SearchSVG } from "../svg";

export function HeaderTable({ title, numItems }: any) {
  return (
    <div className="flex px-4 py-8 items-center justify-between ">
      <div className="flex items-start justify-center flex-col gap-y-2 translate-y-[-20px]">
        <Typography.Text className="text-[16px] font-bold ">
          {title}
        </Typography.Text>
        <Typography.Text className="text-gray-400 text-[14px]">
          تعداد کل :{numItems}
        </Typography.Text>
        {/* <Divider /> */}
      </div>
      <Input
        prefix={<SearchSVG />}
        placeholder="جستجو"
        className="bg-[#F9F9F9] input-transparent text-[15px]  text-slate-400 placeholder:text-slate-500 border-none w-[300px] py-2 outline-none gap-x-2"
      />
    </div>
  );
}
