import { cn } from "../../utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FunctionComponent<ContainerProps> = ({
  className,
  ...attr
}) => {
  return (
    <div className={cn("container", className)} {...attr}>
      {attr?.children}
    </div>
  );
};

export default Container;