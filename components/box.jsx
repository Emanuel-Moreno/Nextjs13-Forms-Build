import Image from "next/image";

const Box = ({ img, title, description, free, index, selected, click }) => {
    const boxStyle = `
    w-[137px]  h-max box-borde pl-[15px] pt-[19px] pb-[19px] border rounded-[10px] 
    hover:border-blue-600 hover:cursor-pointer ${selected ? 'bg-blue-100 border-blue-600': 'border-gray-300'}
`
  return (
    <div
      className={boxStyle}
        onClick={()=> click(index)}
    >
       <Image src={img} alt="logo" width='40'  height='40' className=" mb-[42px] box-border "/>
      
      <p className="h-[14px] text-blue-950 font-bold mb-[10px] ">{title}</p>
      <p className="h-[14px] text-gray-400 font-light text-sm  mb-[10px]">{description}</p>
      <p className=" text-blue-950 text-sm font-medium tracking-tighter">{free}</p>
    </div>
  );
};

export default Box;
