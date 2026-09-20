interface OrderItemPreviewProps {
  image: string;
  name: string;
  quantity: number;
}

const OrderItemPreview = ({
  image,
  name,
  quantity,
}: OrderItemPreviewProps) => {
  return (
    <div className="flex min-w-0 flex-1 gap-2 rounded-lg border-[#F7FCFF] bg-[#F7FCFF] p-2">
      <img src={image} alt={name} />

      <div className="min-w-0">
        <h3 className="truncate text-[12px] leading-[150%] text-app-black">{name}</h3>
        <span className="text-[12px] leading-[150%] text-app-black">Qty : {quantity}</span>
      </div>
      
    </div>
  );
};
export default OrderItemPreview;