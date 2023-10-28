type Props = {
  children: React.ReactNode;
};

function Title({ children }: Props) {
  return (
    <h1 className='text-center font-black text-4xl lg:text-6xl text-foreground px-4'>
      {children}
    </h1>
  );
}
export default Title;
