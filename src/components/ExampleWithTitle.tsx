const ExampleWithTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
        <hr />
      </div>
      {children}
    </div>
  );
};

export default ExampleWithTitle;
