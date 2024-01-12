import { Empty, Table } from "antd";
export const CustomTable = ({
  data,
  loading,
  columns,
  rowSelection,
  pagination,
  header,
  selectionType,
  className,
  scroll,
  size,
  layout,
}: any) => {
  // const getRowSelection = () => {
  //   // Check if selectionType is null or -1, if true, disable row selection
  //   if (selectionType === null || selectionType === -1) {
  //     return undefined;
  //   }
  //
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //   return {
  //     type: selectionType ? selectionType : "",
  //     ...rowSelection,
  //   };
  // };

  return (
    <>
      <Table
        tableLayout={layout}
        size={size ? size : "middle"}
        className={className}
        locale={{
          emptyText: () => (
            <Empty
              description="آیتمی وجود ندارد"
              className="text-gray-500"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        dataSource={data}
        loading={loading}
        columns={columns}
        rowSelection={
          selectionType !== -1 || selectionType !== null
            ? { type: selectionType ? selectionType : "", ...rowSelection }
            : null
        }
        pagination={{
          defaultPageSize: 15,
          ...pagination,
          position: ["bottomLeft"],
        }}
        caption={header}
        scroll={scroll}
      />
    </>
  );
};
